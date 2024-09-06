"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getTestimonials } from "../../../pages/api/auth";

interface Testimonials {
  id: number;
  rating: number;
  feedback: string;
  name: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await getTestimonials();
        console.log("testimonials sent!");
        setTestimonials(response.data);
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
    return <div className="text-red-500 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-black px-5 md:px-20 py-10 flex flex-col items-center">
      <h1 className="text-white font-bold text-lg mb-10">TESTIMONIALS</h1>

      <div className="flex flex-col md:flex-row justify-center items-center">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col mb-10 w-auto md:w-3/4"
          >
            <div className="flex flex-row gap-1 mb-2">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Image
                  key={i}
                  src="/icons/start.svg"
                  alt=""
                  width={10}
                  height={10}
                />
              ))}
            </div>

            <p className="text-white text-xs mb-4">
              &quot;{testimonial.feedback}&quot;
            </p>
            <p className="text-xs text-purple-600">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
