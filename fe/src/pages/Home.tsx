import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  console.log(inputRef);
  return (
    <div className="Home">
      <h1>Welcome to dyne chat</h1>
      <h2>create or join a room</h2>
      <input type="text" placeholder="enter a room name" ref={inputRef} />
      <button onClick={() => navigate(`room?name=${inputRef.current?.value}`)}>
        Join Room
      </button>
    </div>
  );
}
