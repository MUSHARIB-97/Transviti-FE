import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  loading?: "lazy" | "eager";
}

function OptimizedImage({ src, alt, className = "", width, height, loading = "lazy" }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const element = imgRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const imageClass = `${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`;

  return (
    <div className="relative inline-block" style={{ width, height }}>
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />}
      <img
        ref={imgRef}
        src={isInView || loading === "eager" ? src : undefined}
        alt={alt}
        className={imageClass}
        width={width}
        height={height}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
    </div>
  );
}

export default OptimizedImage;