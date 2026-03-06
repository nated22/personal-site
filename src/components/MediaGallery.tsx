"use client";

import { useState, useEffect } from "react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  caption: string;
};

export function MediaGallery({
  images,
  videos,
}: {
  images?: { src: string; caption: string }[];
  videos?: { src: string; caption: string }[];
}) {
  const [lightbox, setLightbox] = useState<MediaItem | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <>
      {videos && videos.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 place-items-center">
          {videos.map((vid) => (
            <figure key={vid.src} className="space-y-0">
              <div
                className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-video cursor-pointer"
                onClick={() => setLightbox({ type: "video", src: vid.src, caption: vid.caption })}
              >
                <video
                  src={vid.src}
                  controls
                  muted
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mx-auto mt-2 w-fit max-w-full rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-300 text-center">
                {vid.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {images && images.length > 0 && (
        <div className={`grid gap-6 sm:grid-cols-2 place-items-center${videos?.length ? " mt-6" : ""}`}>
          {images.map((img) => (
            <figure key={img.src} className="space-y-0">
              <div
                className="relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 aspect-[4/3] cursor-pointer"
                onClick={() => setLightbox({ type: "image", src: img.src, caption: img.caption })}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mx-auto mt-2 w-fit max-w-full rounded-lg bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 px-3 py-1.5 text-[11px] leading-snug text-slate-500 dark:text-slate-300 text-center">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      )}

      {!images?.length && !videos?.length && (
        <p className="text-sm text-slate-400 dark:text-slate-500">
          No media yet.
        </p>
      )}

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl font-light hover:text-slate-300 transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            &times;
          </button>
          <div
            className="max-w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === "image" ? (
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={lightbox.src}
                controls
                muted
                autoPlay
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
            <p className="mt-3 text-sm text-white/80 text-center">
              {lightbox.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
