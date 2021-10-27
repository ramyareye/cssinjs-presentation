import React from "react";
import { Deck, Box } from "spectacle";

import Slide1 from "./slides/slide01";
import Slide2 from "./slides/slide02";
import Slide3 from "./slides/slide03";
import Slide4 from "./slides/slide04";
import Slide5 from "./slides/slide05";
import Slide6 from "./slides/slide06";
import Slide7 from "./slides/slide07";
import Slide8 from "./slides/slide08";
import Slide9 from "./slides/slide09";
import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import Slide12 from "./slides/slide12";
import Slide13 from "./slides/slide13";
import Slide14 from "./slides/slide14";
require("normalize.css");

const theme = {
  colors: {
    primary: "white",
    secondary: "#1ac497",
    tertiary: "black",
    quaternary: "#CECECE",
  },
  space: [0],
};

const App = () => {
  return (
    <Deck transitionDuration={500} theme={theme}>
      <Box>
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
      </Box>
    </Deck>
  );
};

export default App;
