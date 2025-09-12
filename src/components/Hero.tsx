import React from 'react';

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center pt-20">
      <div className="mx-6 max-w-5xl rounded-2xl p-8 text-center">
        <h1 className="mb-9 font-mono text-9xl font-extrabold leading-tight tracking-normal text-white drop-shadow md:text-7xl">
          Make Attendance, Flowing Effortlessly
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/85 drop-shadow-sm md:text-xl">
          Streamline check-ins and insights with speed, security, and ease.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 font-mono text-base font-extrabold text-gray-900 shadow-sm ring-1 ring-white/60 transition-colors duration-200 hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get Started
          </button>
          <button
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-md bg-transparent px-6 font-mono text-base font-extrabold text-white ring-1 ring-white/70 backdrop-blur-sm transition-colors duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
} 