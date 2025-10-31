import React from "react";

export default function KouchingVideo() {
  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-white py-20 px-6 sm:px-12 flex justify-center items-center">
      <div className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <div className="relative pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/KqLDM4IDUio"
            className="absolute top-0 left-0 w-full h-full rounded-3xl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title="Kouching video"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
