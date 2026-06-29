import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, ChevronDown, ExternalLink, DollarSign, Users, FileText, Zap } from 'lucide-react';
import { useEffect } from 'react';
import { sidebarConfigs, SidebarItem, SidebarConfig } from '../data/navigation';
import { useSidebarState } from '../contexts/SidebarStateContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  Users,
  FileText,
  Zap,
};

function SidebarItemComponent({ item, level = 0, tabKey, itemPath = '' }: { item: SidebarItem; level?: number; tabKey: string; itemPath?: string }) {
  const location = useLocation();
  const { isExpanded: getIsExpanded, setExpanded } = useSidebarState();
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.path ? location.pathname === item.path : false;

  // Generate unique key for this item based on its path in the tree
  const itemKey = itemPath ? `${itemPath}/${item.label}` : item.label;
  const isExpanded = getIsExpanded(tabKey, itemKey);

  const handleToggle = () => {
    if (hasChildren) {
      setExpanded(tabKey, itemKey, !isExpanded);
    }
  };

  const itemContent = (
    <>
      {hasChildren && (
        <span className="flex-shrink-0">
          {isExpanded ? (
            <ChevronDown className="w-3 h-3" />
          ) : (
            <ChevronRight className="w-3 h-3" />
          )}
        </span>
      )}
      <span>{item.label}</span>
      {item.external && <ExternalLink className="w-3 h-3 ml-auto flex-shrink-0" />}
    </>
  );

  const linkProps = item.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <div>
      {item.path && !hasChildren ? (
        <Link
          to={item.path}
          {...linkProps}
          className={`flex items-center gap-2 px-0 py-1.5 text-xs transition-colors ${
            isActive
              ? 'text-yellow-accent font-medium'
              : 'text-blue-muted hover:text-white'
          }`}
          style={{ paddingLeft: `${level * 12}px` }}
        >
          {itemContent}
        </Link>
      ) : (
        <button
          onClick={handleToggle}
          className={`flex items-center gap-2 px-0 py-1.5 text-xs transition-colors w-full text-left ${
            isActive
              ? 'text-yellow-accent font-medium'
              : 'text-blue-muted hover:text-white'
          }`}
          style={{ paddingLeft: `${level * 12}px` }}
        >
          {itemContent}
        </button>
      )}

      {hasChildren && isExpanded && (
        <div className="space-y-0.5">
          {item.children!.map((child, index) => (
            <SidebarItemComponent key={index} item={child} level={level + 1} tabKey={tabKey} itemPath={itemKey} />
          ))}
        </div>
      )}
    </div>
  );
}

function IconItem({ item }: { item: SidebarItem }) {
  const location = useLocation();
  const isActive = item.path ? location.pathname === item.path : false;
  const Icon = item.icon ? iconMap[item.icon] : null;

  const linkProps = item.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  if (!item.path) return null;

  return (
    <Link
      to={item.path}
      {...linkProps}
      className={`flex items-center gap-2 px-0 py-1.5 text-xs transition-colors ${
        isActive
          ? 'text-yellow-accent font-medium'
          : 'text-blue-muted hover:text-white'
      }`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      <span>{item.label}</span>
    </Link>
  );
}

function SidebarSection({
  label,
  items,
  defaultExpanded = false,
  collapsible = true,
  tabKey,
}: {
  label?: string;
  items: SidebarItem[];
  defaultExpanded?: boolean;
  collapsible?: boolean;
  tabKey: string;
}) {
  const { isExpanded: getIsExpanded, setExpanded, initializeDefaults } = useSidebarState();

  // Initialize default expanded state for this section on first render
  useEffect(() => {
    if (label) {
      const sectionKey = `section:${label}`;
      initializeDefaults(tabKey, { [sectionKey]: defaultExpanded });
    }
  }, [label, tabKey, defaultExpanded, initializeDefaults]);

  if (!label) {
    return (
      <div className="space-y-0.5">
        {items.map((item, index) => (
          <SidebarItemComponent key={index} item={item} tabKey={tabKey} />
        ))}
      </div>
    );
  }

  const sectionKey = `section:${label}`;
  const isExpanded = getIsExpanded(tabKey, sectionKey);

  // Non-collapsible section header
  if (!collapsible) {
    return (
      <div>
        <h3 className="text-[10px] uppercase tracking-widest text-white/40 font-medium mb-4">
          {label}
        </h3>
        <div className="space-y-0.5">
          {items.map((item, index) => (
            <SidebarItemComponent key={index} item={item} tabKey={tabKey} />
          ))}
        </div>
      </div>
    );
  }

  // Collapsible section header
  return (
    <div>
      <button
        onClick={() => setExpanded(tabKey, sectionKey, !isExpanded)}
        className="flex items-center gap-2 w-full text-left mb-2"
      >
        {isExpanded ? (
          <ChevronDown className="w-3 h-3 text-blue-muted" />
        ) : (
          <ChevronRight className="w-3 h-3 text-blue-muted" />
        )}
        <h3 className="text-[10px] font-medium text-blue-muted tracking-wider uppercase">
          {label}
        </h3>
      </button>
      {isExpanded && (
        <div className="space-y-0.5">
          {items.map((item, index) => (
            <SidebarItemComponent key={index} item={item} tabKey={tabKey} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const location = useLocation();

  // Determine which sidebar config to use based on the current path
  const getActiveTab = () => {
    const path = location.pathname;

    if (path === '/') return '/';
    if (path.startsWith('/editor')) return '/editor';
    if (path.startsWith('/features')) return '/features';
    if (path.startsWith('/runtimes') || path.startsWith('/troubleshooting')) return '/runtimes';
    if (path.startsWith('/feature-support')) return '/feature-support';
    if (path.startsWith('/tutorials')) return '/tutorials';
    if (path.startsWith('/lite')) return '/lite';

    return '/';
  };

  const activeTab = getActiveTab();
  const config: SidebarConfig = sidebarConfigs[activeTab] || sidebarConfigs['/'];

  return (
    <aside className="py-8 pr-8">
      <div className="space-y-6">
        {config.iconItems && (
          <div className="space-y-0.5 pb-6 border-b border-navy-border">
            {config.iconItems.map((item, index) => (
              <IconItem key={index} item={item} />
            ))}
          </div>
        )}

        {config.sections?.map((section, index) => (
          <SidebarSection
            key={index}
            label={section.label}
            items={section.items}
            defaultExpanded={section.defaultExpanded}
            collapsible={section.collapsible}
            tabKey={activeTab}
          />
        ))}

        {config.items && (
          <div className="space-y-0.5">
            {config.items.map((item, index) => (
              <SidebarItemComponent key={index} item={item} tabKey={activeTab} />
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
