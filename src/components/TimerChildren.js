import React, { useState, useEffect } from "react";

const Boom = ({ data }) => <h3>{data / 2}</h3>;

function Timer({ initialValue, children }) {
  const [timer, setTimer] = useState(initialValue);
  
  useEffect(() => {
    let id = setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <React.Fragment>
      <h1>{timer}</h1>
      {children(timer)}
    </React.Fragment>
  );
}

export default function TimerChildren() {
  const initialValue = 0;

  return (
    <div className="App">
      <h2>This timer should increment every second:</h2>
      <Timer initialValue={initialValue}>
        {(data) => <Boom data={data} />}
      </Timer>
    </div>
  );
}