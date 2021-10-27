import React from "react";

import { Heading, UnorderedList, ListItem, Slide } from "spectacle";

const Slide9 = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Common CSS-in-JS features
      </Heading>
      <UnorderedList>
        <ListItem margin="0px 0 20px" style={{ fontSize: 25 }}>
          Scoped CSS
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          SSR (Server-Side Rendering)
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Automatic vendor prefixes
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          No inline styles
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Full CSS support
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Styles definition syntaxes
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Styles applying methods
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Styles output
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Atomic CSS
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Full power of the JavaScript
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 25 }}>
          Dead code elimination
        </ListItem>
      </UnorderedList>
    </Slide>
  );
};

export default Slide9;
