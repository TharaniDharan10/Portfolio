import React from "react";
import Typewriter from "typewriter-effect";

function Typename() {
  return (
    <Typewriter
      options={{
        strings: [
          "I am Tharani Dharan"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 60,
      }}
    />
  );
}

export default Typename;
