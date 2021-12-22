import React, { useState } from "react";

const CurrentTime = () => {
  const [currTime, setCurrTime] = useState({
    date: new Date(),
  });

  const callMe = () => {
    setInterval(() => {
      setCurrTime({ ...currTime, date: new Date() });
    }, 1000);
  };

  return (
    <div>
      <p className='timer'>{currTime.date.toLocaleTimeString()}</p>
      {callMe()}
    </div>
  );
};

export default CurrentTime;
