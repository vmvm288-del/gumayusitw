"use client";

import { useEffect, useState } from "react";

export default function AnniversaryEntrance() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setFinished(true);
      document.body.style.overflow = previousOverflow;
    }, 3200);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  if (finished) return null;

  return (
    <div
      className="anniversary-entrance fixed inset-0 z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {/* 黑色遮罩 */}
      <div className="entrance-darkness" />

      {/* 地平線 */}
      <div className="entrance-sunrise-line" />

      {/* 中央光源 */}
      <div className="entrance-sunrise-point" />
    </div>
  );
}