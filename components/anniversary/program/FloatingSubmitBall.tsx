"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const SIZE = 80;
const BOUNCE = 0.82;
const FRICTION = 0.985;
const STOP_SPEED = 0.05;

export default function FloatingSubmitBall() {
  const ballRef = useRef<HTMLAnchorElement>(null);

  const position = useRef({
    x: 0,
    y: 0,
  });

  const velocity = useRef({
    x: 0,
    y: 0,
  });

  const dragging = useRef(false);
  const moved = useRef(false);

  const pointer = useRef({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
  });

  const animation = useRef<number | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return;

    const ball = ballRef.current;

    if (!ball) return;

    position.current.x = window.innerWidth - SIZE - 20;
    position.current.y = window.innerHeight - SIZE - 120;

    const render = () => {
      ball.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px,0)`;
    };

    render();

    const update = () => {
      if (!dragging.current) {
        position.current.x += velocity.current.x;
        position.current.y += velocity.current.y;

        velocity.current.x *= FRICTION;
        velocity.current.y *= FRICTION;

        if (Math.abs(velocity.current.x) < STOP_SPEED)
          velocity.current.x = 0;

        if (Math.abs(velocity.current.y) < STOP_SPEED)
          velocity.current.y = 0;

        const maxX = window.innerWidth - SIZE;
        const maxY = window.innerHeight - SIZE;

        if (position.current.x <= 0) {
          position.current.x = 0;
          velocity.current.x *= -BOUNCE;
        }

        if (position.current.x >= maxX) {
          position.current.x = maxX;
          velocity.current.x *= -BOUNCE;
        }

        if (position.current.y <= 0) {
          position.current.y = 0;
          velocity.current.y *= -BOUNCE;
        }

        if (position.current.y >= maxY) {
          position.current.y = maxY;
          velocity.current.y *= -BOUNCE;
        }
      }

      render();

      animation.current = requestAnimationFrame(update);
    };

    animation.current = requestAnimationFrame(update);
        const onPointerDown = (e: PointerEvent) => {
      dragging.current = true;
      moved.current = false;

      pointer.current.x = e.clientX;
      pointer.current.y = e.clientY;
      pointer.current.lastX = e.clientX;
      pointer.current.lastY = e.clientY;
      pointer.current.lastTime = performance.now();

      velocity.current.x = 0;
      velocity.current.y = 0;

      ball.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current) return;

      const now = performance.now();

      const dx = e.clientX - pointer.current.lastX;
      const dy = e.clientY - pointer.current.lastY;

      if (Math.abs(dx) > 2 || Math.abs(dy) > 2) {
        moved.current = true;
      }

      position.current.x += dx;
      position.current.y += dy;

      const dt = Math.max(now - pointer.current.lastTime, 1);

      velocity.current.x = (dx / dt) * 16;
      velocity.current.y = (dy / dt) * 16;

      pointer.current.lastX = e.clientX;
      pointer.current.lastY = e.clientY;
      pointer.current.lastTime = now;

      render();
    };

    const onPointerUp = (e: PointerEvent) => {
      dragging.current = false;

      ball.releasePointerCapture(e.pointerId);
    };

    ball.addEventListener("pointerdown", onPointerDown);
    ball.addEventListener("pointermove", onPointerMove);
    ball.addEventListener("pointerup", onPointerUp);
    ball.addEventListener("pointercancel", onPointerUp);
        return () => {
      ball.removeEventListener("pointerdown", onPointerDown);
      ball.removeEventListener("pointermove", onPointerMove);
      ball.removeEventListener("pointerup", onPointerUp);
      ball.removeEventListener("pointercancel", onPointerUp);

      if (animation.current !== null) {
        cancelAnimationFrame(animation.current);
      }
    };
  }, []);
    return (
    <Link
      ref={ballRef}
      href="/submit"
      onClick={(e) => {
        if (moved.current) {
          e.preventDefault();
        }
      }}
      className="
        md:hidden

        fixed
        left-0
        top-0

        z-[9999]

        flex
        h-20
        w-20
        flex-col
        items-center
        justify-center

        rounded-full

        border
        border-white/25

        bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,.45),rgba(147,129,229,.42)_40%,rgba(118,101,214,.58)_100%)]

        backdrop-blur-xl

        shadow-[0_10px_35px_rgba(110,90,220,.35)]

        select-none
        touch-none

        will-change-transform
      "
    >
      <div
        className="
          absolute
          left-4
          top-4

          h-5
          w-5

          rounded-full

          bg-white/35

          blur-sm
        "
      />

      <div
        className="
          absolute
          inset-0

          rounded-full

          border
          border-white/20

          opacity-20
        "
      />

      <span className="text-[9px] tracking-[0.28em] text-white/70">
        IDOL
      </span>

      <span className="mt-1 text-sm font-bold text-white">
        投稿
      </span>
    </Link>
  );
}