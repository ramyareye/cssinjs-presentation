import React from "react";

import { Heading, Slide, Text } from "spectacle";

const Slide6 = () => {
  return (
    <Slide transition={["zoom"]} bgColor="primary">
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
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          “CSS-in-JS”
        </Heading>
        <Text
          margin="10px 0 100px"
          textColor="tertiary"
          fit
          bold
          textAlign="center"
          fontSize={25}
        >
          refers to a pattern where CSS is composed using JavaScript instead of
          defined in external files.
        </Text>
        <Text
          margin="10px 0 100px"
          textColor="tertiary"
          fit
          bold
          textAlign="center"
          fontSize={18}
        >
          Thousands of companies use CSS-in-JS in production, including Reddit,
          Patreon, Target, Atlassian, Vogue, GitHub, Coinbase, and many more.
        </Text>
      </div>
    </Slide>
  );
};

export default Slide6;
