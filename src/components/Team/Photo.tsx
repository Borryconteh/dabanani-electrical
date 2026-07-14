// src/components/Team/Photo.tsx
import React, { useState } from 'react';

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
}

const Photo: React.FC<PhotoProps> = ({ src, alt, className = '' }) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleError = () => {
    // Fallback image based on the alt text (name) if the original fails to load
    setImgSrc(`https://ui-avatars.com/api/?background=0f172a&color=ffffff&name=${encodeURIComponent(alt)}&size=400`);
  };

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Skeleton loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-slate-200" />
      )}
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        onLoad={() => setIsLoaded(true)}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default Photo;