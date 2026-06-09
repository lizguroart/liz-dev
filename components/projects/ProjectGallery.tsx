"use client";

import { useState } from "react";
import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({
  images,
  title,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] =
    useState(images[0]);

  return (
    <div className="mt-12">
      {/* Imagen principal */}

      <div
        className="
          relative
          aspect-video
          overflow-hidden
          rounded-3xl
          border
          border-white/10
        "
      >
        <Image
          src={selectedImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Miniaturas */}

      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto">
          {images.map((image) => (
            <button
              key={image}
              onClick={() =>
                setSelectedImage(image)
              }
              className={`
                relative
                h-20
                w-32
                flex-shrink-0
                overflow-hidden
                rounded-xl
                border
                ${
                  selectedImage === image
                    ? "border-pink-400"
                    : "border-white/10"
                }
              `}
            >
              <Image
                src={image}
                alt=""
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}