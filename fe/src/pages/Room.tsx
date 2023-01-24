import { useLocation, useSearchParams } from "react-router-dom";

export default function Room() {
  const [searchParams] = useSearchParams();
  const roomName = searchParams.get("name");
  return (
    <div className="Room">
      <h1>Room</h1>
      <div>{roomName}</div>
      <video id="my-video" autoPlay={true} />
      <video id="your-video" autoPlay={true} />
    </div>
  );
}
