import { useEffect, useRef, useState } from "react";

function GalleryRail({ items = [] }) {
  const railRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateArrows = () => {
    const rail = railRef.current;

    if (!rail) return;

    const { scrollLeft, scrollWidth, clientWidth } = rail;

    setCanScrollLeft(scrollLeft > 4);

    setCanScrollRight(
      scrollLeft + clientWidth < scrollWidth - 4
    );
  };

  useEffect(() => {
    updateArrows();

    const rail = railRef.current;

    if (!rail) return;

    rail.addEventListener("scroll", updateArrows);
    window.addEventListener("resize", updateArrows);

    return () => {
      rail.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [items]);

  if (!items.length) return null;

  const scrollRail = (direction) => {
    const rail = railRef.current;

    if (!rail) return;

    const amount = rail.clientWidth * 0.75;

    rail.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="gallery-rail-section">

      {canScrollLeft && (
        <button
        type="button"
        className={`gallery-arrow gallery-arrow-left ${
          canScrollLeft ? "is-visible" : "is-hidden"
        }`}
        onClick={() => scrollRail("left")}
        aria-label="Previous images"
        disabled={!canScrollLeft}
      >
        ←
      </button>
      )}

      <div
        className="gallery-rail"
        ref={railRef}
      >
        {items.map((item, index) => (
          <figure
            className="gallery-rail-item"
            key={item.src || index}
          >
            <img
              src={item.src}
              alt={item.alt || ""}
              loading="lazy"
            />

            {item.caption && (
              <figcaption>
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {canScrollRight && (
        <button
        type="button"
        className={`gallery-arrow gallery-arrow-right ${
          canScrollRight ? "is-visible" : "is-hidden"
        }`}
        onClick={() => scrollRail("right")}
        aria-label="Next images"
        disabled={!canScrollRight}
      >
        →
      </button>
      )}

    </section>
  );
}

export default GalleryRail;