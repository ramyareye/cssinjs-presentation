import React from "react";

import { Heading, Image, Slide, Text } from "spectacle";

import team1 from "../assets/team1.png";

const Slide4 = () => {
  return (
    <Slide>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Heading fontSize={30} textColor="secondary" caps>
          Alert 2: <br />
          it's hard to find people with same interest!
        </Heading>
        <div>
          <Image src={team1} width={600} />
          <Text fontSize={16} textAlign="center">
            (anyway these are not CSSINJS!)
          </Text>
        </div>
      </div>
    </Slide>
  );
};

export default Slide4;
