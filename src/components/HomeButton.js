import { useState, useRef } from "react";

export default function HomeButton({ children, text, color, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex p-2 items-center rounded-lg text-black ${
        color || "bg-gray-600"
      }`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
}
