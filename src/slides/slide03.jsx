import React from "react";

import { Heading, Image, Slide } from "spectacle";

import tweet1 from "../assets/tweet1.png";

const Slide3 = () => {
  return (
    <Slide>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Heading fontSize={30} textColor="secondary" caps>
          Alert 1: <br />
          this is a never ending topic!
        </Heading>
        <Image src={tweet1} height={600} />
      </div>
    </Slide>
  );
};

export default Slide3;
