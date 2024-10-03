"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "../../../pages/api/auth";

interface Testimonials {
  id: string;
  name: string;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await getTestimonials();
        console.log("API response:", res.data.content);
        setTestimonials(
          Array.isArray(res.data.content) ? res.data.content : []
        );
        setLoading(false);
      } catch (error) {
        setError("Failed to load Testimonials.");
        console.log("No testimonials");
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className="text-red-500 text-center text-2xl sm:text-5xl mb-20">
        Loading Testimonials...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center text-base sm:text-2xl">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-black px-5 md:px-20 py-10 flex flex-col items-center">
      <h1 className="text-white font-bold text-3xl md:text-4xl mb-16">
        HEAR FROM OUR ELITE ENTREPRENEURS
      </h1>

      <div className="grid md:grid-cols-3 justify-center items-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col mb-10 w-auto md:w-5/6"
          >
            <div className="flex flex-row gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/star.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              ))}
            </div>

            <p className="text-white text-base sm:text-2xl mb-4">
              &quot;{testimonial.content}&quot;
            </p>
            <p className="text-base sm:text-2xl font-bold text-purple-600">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
