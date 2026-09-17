import React from "react";

interface  LinkPreview {
  /** Number of skeleton list rows to render below the header */
  rows?: number;
  /** Toggle the pulsing loading animation */
  animate?: boolean;
  className?: string;
}

/**
 * SkeletonProfileCard
 * A phone-frame loading placeholder: a device outline with a notch,
 * a circular avatar, a short title bar, and a stack of row bars.
 */
const  LinkPreview: React.FC< LinkPreview> = ({
  rows = 5,
  animate = true,
  className = "",
}) => {
  const pulse = animate ? "animate-pulse" : "";

  return (
 <div className="bg-[#ffff] sm:bg-red-950 w-[560px] rounded-[12px] p-[20px]">
     <div
      role="status"
      aria-busy={animate}
      aria-label="Loading profile"
      className={`relative mx-auto h-[520px] w-[260px] rounded-[2.5rem] border border-gray-300 bg-white px-4 pt-8 pb-6 ${className}`}
    >
      {/* Notch */}
      <div className="absolute left-1/2 top-0 h-6 w-28 -translate-x-1/2 rounded-b-2xl border border-t-0 border-gray-300 bg-white" />

      <div className={`flex h-full flex-col items-center ${pulse}`}>
        {/* Avatar */}
        <div className="h-16 w-16 rounded-full bg-gray-200" />

        {/* Title / name line */}
        <div className="mt-4 h-2.5 w-20 rounded-full bg-gray-200" />

        {/* List rows */}
        <div className="mt-8 w-full space-y-3">
          {Array.from({ length: rows }).map((_, i) => (
            <div key={i} className="h-9 w-full rounded-md bg-gray-100" />
          ))}
        </div>
      </div>

      <span className="sr-only">Loading…</span>
    </div>
 </div>
  );
};

export default  LinkPreview;