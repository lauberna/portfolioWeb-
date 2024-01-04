import React, { useEffect, useState } from 'react'

const Hashtag = () => {
  const textArray = ["Musico", "Deportista", "Estudiante", "Desarrollador"];
  const [text, setText] = useState(textArray[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = textArray.indexOf(text);
      const nextIndex = (currentIndex + 1) % textArray.length;
      setText(textArray[nextIndex]);
    }, 1400);

    return () => clearInterval(interval);
  }, [text]);
  return (
    <div style={{marginTop: "px", fontSize: "20px", fontWeight: 700}}># {text}</div>
  )

}

export default Hashtag