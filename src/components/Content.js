import React from "react";

const Content = ({ joke }) => {
  let question = joke?.punchline;
  let answer = joke?.setup;
  console.log(joke);
  console.log(question);
  console.log(question);
  return joke ? (
    <div>
      <h3>{question}</h3>
      <h4>{answer}</h4>
    </div>
  ) : null;
};

export default Content;
