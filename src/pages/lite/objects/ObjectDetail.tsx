import Layout from '../../../components/Layout';
import SEO from '../../../components/SEO';
import { TableOfContentsItem } from '../../../data/navigation';

interface ObjectDetailProps {
  name: string;
  description: string;
  addStep: string;
  moveStep: string;
  properties: string[][];
  tableOfContents?: TableOfContentsItem[];
}

export default function ObjectDetail({
  name,
  description,
  addStep,
  moveStep,
  properties,
  tableOfContents = [],
}: ObjectDetailProps) {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title={`FlashFX Lite, ${name}`}
        description={description}
        keywords={`FlashFX Lite, ${name.toLowerCase()}, objects, shapes`}
      />

      <div className="space-y-8">
        <div>
          <p className="text-xs text-white/30 uppercase tracking-widest mb-2">Objects</p>
          <h1 className="text-4xl font-semibold text-white">{name}</h1>
          <p className="text-sm text-blue-muted mt-2">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 bg-navy-border/20 border border-navy-border rounded-lg">
            <p className="text-[11px] uppercase tracking-widest text-white/30 font-semibold mb-2">How to Add</p>
            <p className="text-sm text-white leading-relaxed">{addStep}</p>
          </div>
          <div className="p-4 bg-navy-border/20 border border-navy-border rounded-lg">
            <p className="text-[11px] uppercase tracking-widest text-white/30 font-semibold mb-2">How to Move</p>
            <p className="text-sm text-white leading-relaxed">{moveStep}</p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-3">Properties</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-yellow-accent/10">
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Property</th>
                  <th className="border border-navy-border px-4 py-2 text-left text-sm font-semibold text-white">Description</th>
                </tr>
              </thead>
              <tbody>
                {properties.map(([prop, desc]) => (
                  <tr key={prop}>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white font-mono">{prop}</td>
                    <td className="border border-navy-border px-4 py-2 text-sm text-white">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
