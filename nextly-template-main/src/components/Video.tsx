"use client";
import { useState, useEffect } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  // Automatically play the video when the component is mounted
  useEffect(() => {
    setPlayVideo(true); // Set to true on mount to autoplay the video
  }, []);

  if (!videoId) return null;

  return (
    <Container>
      <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl bg-indigo-300 cursor-pointer bg-gradient-to-tr from-purple-400 to-indigo-700">
        {playVideo && (
          <video autoPlay muted loop controls preload="auto" className="w-full h-full">
            <source src="/img/vid.mp4" type="video/mp4" />
            <track
              src="/img/vid.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </Container>
  );
}
