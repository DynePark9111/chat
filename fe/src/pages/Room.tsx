import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../components/Button";
import Video from "../components/Video";
import { AiFillAudio } from "react-icons/ai";
import { FaPhoneAlt, FaVideo } from "react-icons/fa";

export default function Room() {
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get("name");
  const [localStream, setLocalStream] = useState<MediaStream>();
  const [remoteStream, setRemoteStream] = useState<MediaStream>();
  const [audio, setAudio] = useState(true);
  const [video, setVideo] = useState(true);
  console.log(localStream);

  async function getLocalPermission(video: boolean, audio: boolean) {
    let stream = await navigator.mediaDevices.getUserMedia({
      video,
      audio,
    });
    setLocalStream(stream);
  }

  useEffect(() => {
    if (!audio && !video) {
      return localStream?.getVideoTracks().forEach((x) => x.stop());
    }
    getLocalPermission(video, audio);
  }, [video, audio]);

  function phone() {
    if (audio || video) {
      setVideo(false);
      setAudio(false);
    } else {
      setVideo(true);
      setAudio(true);
    }
  }
  return (
    <div className="Room">
      {/* <h1>Room</h1> */}
      {/* <div>{roomName}</div> */}
      <div className="videos">
        <Video mediaStream={localStream} type="my" />
        {/* <Video mediaStream={localStream} type="your" /> */}
      </div>
      <div className="buttons">
        <Button
          isActive={video}
          onClick={() => setVideo((prev) => !prev)}
          icon={<FaVideo />}
        />
        <Button
          isActive={audio}
          onClick={() => setAudio((prev) => !prev)}
          icon={<AiFillAudio />}
        />
        <Button
          isActive={video || audio}
          onClick={phone}
          icon={<FaPhoneAlt />}
          type="phone"
        />
      </div>
    </div>
  );
}
