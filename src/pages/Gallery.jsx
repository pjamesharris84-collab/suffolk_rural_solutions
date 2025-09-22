import { useState, useEffect, useRef } from "react";

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const scrollRef = useRef(null);

  const showPrev = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : images.length - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const showNext = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => {
      const newIndex = prev < images.length - 1 ? prev + 1 : 0;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const child = scrollRef.current.children[index];
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") showPrev(e);
      if (e.key === "ArrowRight") showNext(e);
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      scrollToIndex(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <section className="bg-khaki-light py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-military font-bold mb-4">
          Our Work
        </h2>
        <div className="w-20 h-[2px] bg-khaki-light/80 rounded-full mx-auto mb-8"></div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer"
              onClick={() => setSelectedIndex(idx)}
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Lightbox (unchanged) */}
        {selectedIndex !== null && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              ref={scrollRef}
              className="relative max-w-5xl w-full h-full flex overflow-x-auto snap-x snap-mandatory"
              onClick={(e) => e.stopPropagation()}
            >
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full h-full flex items-center justify-center snap-center px-4"
                >
                  <img
                    src={src}
                    alt={`Large view ${idx + 1}`}
                    className="max-h-[80vh] md:max-h-[90vh] rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Controls */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 bg-white text-military px-4 py-2 rounded-lg shadow hover:bg-khaki-light transition z-50 text-sm md:text-base"
            >
              Close
            </button>
            <button
              onClick={showPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 text-military px-3 py-2 rounded-full shadow hover:bg-white transition z-50 text-lg md:text-xl"
            >
              ◀
            </button>
            <button
              onClick={showNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 text-military px-3 py-2 rounded-full shadow hover:bg-white transition z-50 text-lg md:text-xl"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
