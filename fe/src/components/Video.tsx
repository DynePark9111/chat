import { useRef, useEffect } from "react";

interface RTCVideoProps {
  mediaStream: MediaStream | undefined;
  type: "my" | "your";
}

export default function Video({ mediaStream, type }: RTCVideoProps) {
  const viewRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!viewRef.current) return;
    viewRef.current.srcObject = mediaStream ? mediaStream : null;
  }, [mediaStream]);

  return (
    <div className="Video">
      <video id={type} ref={viewRef} autoPlay playsInline />
    </div>
  );
}
