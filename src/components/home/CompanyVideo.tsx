"use client";

import { useState } from "react";
import VideoModal, { VideoThumbnail } from "@/components/ui/VideoModal";

export default function CompanyVideo() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setVideoOpen(true)}
        className="cursor-pointer w-full max-w-[480px] lg:max-w-[560px] flex-shrink-0"
      >
        <VideoThumbnail videoId="NWO_S1Kh6U0" />
      </div>
      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        videoId="NWO_S1Kh6U0"
      />
    </>
  );
}
