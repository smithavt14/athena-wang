'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageContainer = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/cloudinary');
        const data = await response.json();
        const randomly_sorted_data = data.sort(() => Math.random() - 0.5);
        setImages(randomly_sorted_data);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p className="text-center py-4 text-gray-500 font-reenie-beanie">Loading...</p>;
  }

  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
      {images.map((image) => (
        <div key={image.public_id} className="break-inside-avoid mb-4 relative group">
          <Image
            src={image.secure_url}
            alt={image.public_id}
            width={image.width}
            height={image.height}
            className="w-full h-auto rounded-lg"
            style={{ width: '100%', height: 'auto' }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <p className="text-white text-center font-reenie-beanie text-2xl px-4">
              {image.context?.caption || 'Untitled'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
