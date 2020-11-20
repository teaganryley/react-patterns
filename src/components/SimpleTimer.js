import React, { useState, useEffect } from "react";

export default function Timer(props) {
  const [timer, setTimer] = useState(props.initialValue);

  useEffect(() => {
    let id = setInterval(() => {
      setTimer((c) => c + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return <div>{timer}</div>;
}