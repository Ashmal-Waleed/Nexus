import { useEffect, useRef, useState } from "react";


export default function VideoCall() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const startCall = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }

    setStream(mediaStream);
  };

  const endCall = () => {
    stream?.getTracks().forEach(track => track.stop());
    setStream(null);
  };

  const toggleVideo = () => {
    if (!stream) return;
    stream.getVideoTracks().forEach(track => {
      track.enabled = !track.enabled;
      setVideoEnabled(track.enabled);
    });
  };

  const toggleAudio = () => {
    if (!stream) return;
    stream.getAudioTracks().forEach(track => {
      track.enabled = !track.enabled;
      setAudioEnabled(track.enabled);
    });
  };

  const shareScreen = async () => {
    if (!videoRef.current) return;
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
    });
    videoRef.current.srcObject = screenStream;
  };

  return (
    <div className=" flex flex-col items-center gap-4 p-6">


      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="w-[600px] h-[350px] bg-black rounded-lg"
      />

      <div className="flex gap-3">
        {!stream ? (
          <button onClick={startCall} className="btn-primary">
            Start Call
          </button>
        ) : (
          <>
            <button onClick={endCall} className="btn-danger">
              End Call
            </button>
            <button onClick={toggleVideo} className="btn-secondary">
              {videoEnabled ? "Video Off" : "Video On"}
            </button>
            <button onClick={toggleAudio} className="btn-secondary">
              {audioEnabled ? "Mute" : "Unmute"}
            </button>
            <button onClick={shareScreen} className="btn-secondary">
              Share Screen
            </button>
          </>
        )}
      </div>
    </div>
  );
}
