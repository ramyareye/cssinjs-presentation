import React from "react";

import { Heading, UnorderedList, ListItem, Slide } from "spectacle";

const Slide9 = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Common CSS-in-JS features
      </Heading>
      <UnorderedList>
        <ListItem margin="0px 0 20px" className="text-xl">
          Scoped CSS
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          SSR (Server-Side Rendering)
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Automatic vendor prefixes
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          No inline styles
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Full CSS support
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Styles definition syntaxes
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Styles applying methods
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Styles output
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Atomic CSS
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Full power of the JavaScript
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-xl">
          Dead code elimination
        </ListItem>
      </UnorderedList>
    </Slide>
  );
};

export default Slide9;
