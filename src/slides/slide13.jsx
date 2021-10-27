import React from "react";

import { Heading, Image, Slide } from "spectacle";
import tweet1 from "../assets/mike.gif";

const Slide3 = () => {
  return (
    <Slide>
      <Heading textColor="secondary" caps>
        Tailwind CSS
      </Heading>
      <Image src={tweet1} style={{ height: "60%", margin: "auto" }} />
    </Slide>
  );
};

export default Slide3;
