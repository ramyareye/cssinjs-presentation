// Import React
import React from "react";

import { Heading, Image, Slide } from "spectacle";

import chart1 from "../assets/chart1.png";

const Slide3 = () => {
  return (
    <Slide>
      <Heading fontSize={35} textColor="secondary" caps>
        What's up with libraries?
      </Heading>
      <div className="w-full h-full flex items-center flex-col justify-center">
        <Image src={chart1} width={1200} />
      </div>
    </Slide>
  );
};

export default Slide3;
