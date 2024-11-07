import { useState, useRef } from "react";
export default function Player() {
  const player = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick(){
    setEnteredPlayerName(player.current.value);
    player.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName??'unknown entity'}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
