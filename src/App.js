import "./App.css";
import Form from "./Components/Form";

function App() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  const list = alphabet.map((a) => {
    return (
      <div class='letter-wrapper'>
        <h1 class={a}>{a}</h1>
      </div>
    );
  });
  return (
    <div className='App'>
      <Form />
      {list}
    </div>
  );
}

export default App;
