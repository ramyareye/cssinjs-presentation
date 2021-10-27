// Import React
import React from "react";

import { Heading, Slide, Text } from "spectacle";

import { ReactComponent as TailwindLogo } from "../assets/tailwind.svg";

const Slide2 = () => {
  return (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading
        margin="200px 0 100px"
        size={1}
        fit
        caps
        lineHeight={1}
        textColor="secondary"
      >
        CSSINJS
      </Heading>
      <Text
        margin="10px 0 100px"
        textColor="tertiary"
        textAlign="center"
        fit
        bold
      >
        Why would anybody write CSS in JavaScript?!
      </Text>
    </Slide>
  );
};

export default Slide2;
