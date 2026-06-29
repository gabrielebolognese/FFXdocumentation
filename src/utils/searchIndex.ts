import { sidebarConfigs, SidebarItem, SidebarConfig } from '../data/navigation';

export interface SearchEntry {
  label: string;
  route: string;
  tab: string;
  category: string;
  keywords: string;
}

function extractItemsFromConfig(
  config: SidebarConfig,
  tab: string,
  entries: SearchEntry[] = []
): SearchEntry[] {
  const processItem = (item: SidebarItem, category: string = '') => {
    if (item.path) {
      const keywords = `${item.label} ${category} ${tab}`.toLowerCase();
      entries.push({
        label: item.label,
        route: item.path,
        tab,
        category,
        keywords,
      });
    }

    if (item.children && item.children.length > 0) {
      const childCategory = item.label;
      item.children.forEach(child => processItem(child, childCategory));
    }
  };

  if (config.iconItems) {
    config.iconItems.forEach(item => processItem(item));
  }

  if (config.sections) {
    config.sections.forEach(section => {
      const sectionLabel = section.label || '';
      section.items.forEach(item => processItem(item, sectionLabel));
    });
  }

  if (config.items) {
    config.items.forEach(item => processItem(item));
  }

  return entries;
}

export function buildSearchIndex(): SearchEntry[] {
  const entries: SearchEntry[] = [];

  const tabNames: Record<string, string> = {
    '/': 'Home',
    '/editor': 'Editor',
    '/features': 'Features',
    '/runtimes': 'Runtimes',
    '/feature-support': 'Feature Support',
    '/tutorials': 'Tutorials',
  };

  Object.entries(sidebarConfigs).forEach(([tabPath, config]) => {
    const tabName = tabNames[tabPath] || 'Home';
    extractItemsFromConfig(config, tabName, entries);
  });

  return entries;
}

export function searchEntries(query: string, entries: SearchEntry[]): SearchEntry[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase();

  const results = entries
    .map(entry => {
      const labelLower = entry.label.toLowerCase();
      let score = 0;

      if (labelLower === lowerQuery) {
        score = 100;
      } else if (labelLower.startsWith(lowerQuery)) {
        score = 50;
      } else if (entry.keywords.includes(lowerQuery)) {
        score = 10;
      }

      return { entry, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(result => result.entry);

  return results;
}

export function highlightMatch(text: string, query: string): { before: string; match: string; after: string } | null {
  if (!query.trim()) {
    return null;
  }

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const index = lowerText.indexOf(lowerQuery);

  if (index === -1) {
    return null;
  }

  return {
    before: text.substring(0, index),
    match: text.substring(index, index + query.length),
    after: text.substring(index + query.length),
  };
}
