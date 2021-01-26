import React, { useState } from "react";

export default function Form() {
  // Declare a new state variable, which we'll call "count"
  const [word, setWord] = useState("");

  const list = word.split("").map((a) => {
    return <span class={a}>{a}</span>;
  });

  return (
    <div className='flex-wrapper'>
      <label>
        Type a word:
        <form>
          <input value={word} onChange={(e) => setWord(e.target.value)}></input>
        </form>
        <div className='main-form'>{list}</div>
      </label>
    </div>
  );
}
