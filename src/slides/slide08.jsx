import React from "react";

import { Heading, Image, Slide } from "spectacle";

import compare1 from "../assets/compare1.png";

const Slide8 = () => {
  return (
    <Slide>
      <Heading size={4} textColor="secondary" caps>
        Comparison with CSS!
      </Heading>
      <div className="w-full h-full flex items-center flex-col justify-center">
        <Image src={compare1} width={800} />
      </div>
    </Slide>
  );
};

export default Slide8;
