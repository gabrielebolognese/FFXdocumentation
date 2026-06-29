import { useRef, useState } from 'react';
import { Volume2, VolumeX, ExternalLink } from 'lucide-react';

interface VideoEmbedProps {
  videoId: string;
  youtubeUrl: string;
}

export default function VideoEmbed({ videoId, youtubeUrl }: VideoEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleSound = () => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const func = muted ? 'unMute' : 'mute';
    win.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*');
    setMuted((prev) => !prev);
  };

  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0&modestbranding=1&enablejsapi=1`;

  return (
    <div>
      <div className="relative w-full rounded-xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
        <iframe
          ref={iframeRef}
          src={src}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          title="Tutorial video"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={toggleSound}
          className="flex items-center justify-center gap-2 w-1/2 px-4 py-2.5 text-sm font-medium rounded-lg bg-navy-darker border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors"
        >
          {muted ? (
            <>
              <Volume2 className="w-4 h-4 shrink-0" />
              Enable Sound
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 shrink-0" />
              Mute
            </>
          )}
        </button>

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-1/2 px-4 py-2.5 text-sm font-medium rounded-lg bg-navy-darker border border-white/10 text-white/70 hover:text-white hover:border-white/20 transition-colors"
        >
          <ExternalLink className="w-4 h-4 shrink-0" />
          Watch on YouTube
        </a>
      </div>
    </div>
  );
}
