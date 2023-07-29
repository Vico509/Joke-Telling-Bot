import { useState } from "react";
import "./App.css";
import Image from "./components/Image";
import axios from "axios";
import TheJoke from "./components/TheJoke";
import { VoiceSelect } from "./components/VoiceSelect";
import { useEffect } from "react";
import { useSpeechSynthesis } from "react-speech-kit";

function App() {
  const [joke, setJoke] = useState(null);
  const [voice, setVoice] = useState(null);
  const [select, setSelect] = useState("");
  const [text, setText] = useState("");
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);

  const { speak, voices } = useSpeechSynthesis({});

  const handleClick = () => {
    let theJoke = async () => {
      let res = await axios
        .get("https://official-joke-api.appspot.com/jokes/programming/random")
        .then((res) => {
          setJoke(res.data[0]);
          setText(res.data[0].setup + " " + res.data[0].punchline);
        })
        .finally(() => {});
    };
    theJoke();
  };

  useEffect(() => {
    speak({ text, voice, rate, pitch });
  }, [text]);

  return (
    <div className="App">
      <VoiceSelect voices={voices} voice={(e) => setVoice(e)} />
      <Image />
      <button className="button-19" onClick={handleClick}>
        Tell me a Joke
      </button>
     
      <br />
      <br />
      {joke ? <TheJoke joke={joke} viceList={select} /> : null}
    </div>
  );
}

export default App;
