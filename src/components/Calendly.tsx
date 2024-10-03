import React, { useEffect } from "react";

interface CalendlyProps {
  url: string;
}

export default function Calendly({ url }: CalendlyProps) {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");

    script.setAttribute(
      "src",
      "https://assets.calendly.com/assets/external/widget.js"
    );

    if (head) {
      head.appendChild(script);
    }
  }, []);
  return (
    <div
      // className="calendly-inline-widget"
      className="calendly-inline-widget h-10"
      data-url={url}
      style={{ minHeight: "700px", width: "100%" }}
    ></div>
  );
}
