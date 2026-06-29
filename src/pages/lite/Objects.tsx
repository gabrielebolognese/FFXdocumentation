import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const tableOfContents = [
  { label: 'Supported Objects', id: 'supported-objects' },
];

const objects = [
  {
    name: 'Square',
    path: '/lite/objects/square',
    desc: 'Rectangle with width, height, fill, corner radius, and rotation.',
  },
  {
    name: 'Circle',
    path: '/lite/objects/circle',
    desc: 'Perfect circle with uniform diameter and fill color.',
  },
  {
    name: 'Line',
    path: '/lite/objects/line',
    desc: 'Straight line with configurable stroke color, width, and rotation.',
  },
  {
    name: 'Text',
    path: '/lite/objects/text',
    desc: 'Text box with font size, weight, fill color, and alignment.',
  },
];

export default function LiteObjects() {
  return (
    <Layout tableOfContents={tableOfContents}>
      <SEO
        title="FlashFX Lite, Objects"
        description="Supported objects in FlashFX Lite: square, circle, line, and text."
        keywords="FlashFX Lite, objects, shapes, text, square, circle, line"
      />

      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-semibold text-white">Objects</h1>
          <p className="text-sm text-blue-muted mt-2">FlashFX Lite supports four object types</p>
        </div>

        <div id="supported-objects" className="scroll-mt-32 space-y-3">
          <h2 className="text-3xl font-semibold text-white">Supported Objects</h2>
          <p className="text-sm text-white/60">Select an object type for full details on how to add, move, and configure it.</p>

          <div className="space-y-2 mt-4">
            {objects.map(({ name, path, desc }) => (
              <Link
                key={name}
                to={path}
                className="flex items-center justify-between p-4 bg-navy-border/20 border border-navy-border rounded-lg hover:border-yellow-accent/40 hover:bg-yellow-accent/5 transition-colors group no-underline"
              >
                <div>
                  <p className="text-sm font-semibold text-white group-hover:text-yellow-accent transition-colors">{name}</p>
                  <p className="text-sm text-white/50 mt-0.5">{desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-yellow-accent transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
