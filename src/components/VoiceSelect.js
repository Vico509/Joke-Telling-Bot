import React, { useState } from "react";

export const VoiceSelect = ({ voices, voice }) => {
  const [voiceIndex, setVoiceIndex] = useState(null);
  voice(voices[voiceIndex] || null);

  console.log(voices);

  return (
    <div style={{ position: "fixed", left: "4rem", top: "2rem" }}>
      <h4 style={{ fontFamily: "unset" }}>Select a voice</h4>

      {/* <button onClick={() => speak({ text: " How are you " })}>NAN</button> */}
      <select
        className="select"
        id="voice"
        name="voice"
        value={voiceIndex || ""}
        onChange={(event) => {
          setVoiceIndex(event.target.value);
        }}
      >
        <option value="">Default</option>
        {voices.map((option, index) => (
          <option key={option.voiceURI} value={index}>
            {`${option.lang} - ${option.name}`}
          </option>
        ))}
      </select>
    </div>
  );
};
