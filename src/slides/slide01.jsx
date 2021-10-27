import React from "react";

import { Slide, Text } from "spectacle";

import { ReactComponent as TailwindLogo } from "../assets/tailwind.svg";

const Slide1 = () => {
  return (
    <Slide transition={["zoom"]}>
      <Text margin="100px 0 200px" textColor="tertiary" fit bold>
        <TailwindLogo className="w-3/4" />
      </Text>
      <Text margin="40px 0 20px">Reza Babaei</Text>
      <Text margin="10px 0 100px">@Amity.co - October 2021</Text>
    </Slide>
  );
};

export default Slide1;
