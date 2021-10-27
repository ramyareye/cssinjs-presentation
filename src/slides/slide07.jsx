import React from "react";

import { Heading, OrderedList, ListItem, Slide } from "spectacle";

const Slide7 = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Why CSS IN JS?
      </Heading>
      <OrderedList>
        <ListItem margin="20px 0 20px" style={{ fontSize: 30 }}>
          Confidence:
          <p style={{ fontSize: 20 }}>
            Add, change and delete CSS without any unexpected consequences and
            avoid dead code.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 30 }}>
          Painless Maintenance:
          <p style={{ fontSize: 20 }}>
            Never go on a hunt for CSS affecting your components ever again.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 30 }}>
          Enhanced Teamwork:
          <p style={{ fontSize: 20 }}>
            Avoid common CSS frustrations to keep a neat codebase and moving
            quickly, regardless of experience levels.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 30 }}>
          Fast Performance:
          <p style={{ fontSize: 20 }}>
            Send only the critical CSS to the user for a rapid first paint.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" style={{ fontSize: 30 }}>
          Dynamic Styling:
          <p style={{ fontSize: 20 }}>
            Simply style your components with a global theme or based on
            different states.
          </p>
        </ListItem>
      </OrderedList>
    </Slide>
  );
};

export default Slide7;
