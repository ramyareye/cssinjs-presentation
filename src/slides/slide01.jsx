import React from "react";

import { Heading, Slide, Text } from "spectacle";

import { ReactComponent as TailwindLogo } from "../assets/tailwind.svg";

const Slide1 = () => {
  return (
    <Slide transition={["zoom"]}>
      <Text margin="100px 0 200px" textColor="tertiary" fit bold>
        <TailwindLogo />
      </Text>
      <Text margin="40px 0 20px" textSize={25}>
        Reza Babaei
      </Text>
      <Text margin="10px 0 100px" textSize={20}>
        @Amity.co - October 2021
      </Text>
    </Slide>
  );
};

export default Slide1;
