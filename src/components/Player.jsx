import { useRef, useState } from "react";

export default function Player() {
  const inputRef = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("unknown entity");

  const handleButtonClick = () => {
    setEnteredPlayerName(inputRef.current.value);
    inputRef.current.value = "";
  };
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleButtonClick}>Set Name</button>
      </p>
    </section>
  );
}
