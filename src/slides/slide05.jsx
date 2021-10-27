import React from "react";

import { Heading, Slide, Text } from "spectacle";

const Slide5 = () => {
  return (
    <Slide transition={["zoom"]} bgColor="primary">
      <Heading margin="200px 0 100px" textColor="tertiary" fit bold>
        I think that CSS in JS is almost always the wrong answer to a question
        nobody really asked.
        <Text margin="60px 0 0px">- A wise man once said!</Text>
      </Heading>
    </Slide>
  );
};

export default Slide5;
