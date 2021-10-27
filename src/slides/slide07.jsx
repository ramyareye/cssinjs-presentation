import React from "react";

import { Heading, OrderedList, ListItem, Slide } from "spectacle";

const Slide7 = () => {
  return (
    <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>
        Why CSS IN JS?
      </Heading>
      <OrderedList>
        <ListItem margin="20px 0 20px" className="text-3xl">
          Confidence:
          <p className="text-xl text-gray-500">
            Add, change and delete CSS without any unexpected consequences and
            avoid dead code.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-3xl">
          Painless Maintenance:
          <p className="text-xl text-gray-500">
            Never go on a hunt for CSS affecting your components ever again.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-3xl">
          Enhanced Teamwork:
          <p className="text-xl text-gray-500">
            Avoid common CSS frustrations to keep a neat codebase and moving
            quickly, regardless of experience levels.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-3xl">
          Fast Performance:
          <p className="text-xl text-gray-500">
            Send only the critical CSS to the user for a rapid first paint.
          </p>
        </ListItem>
        <ListItem margin="20px 0 20px" className="text-3xl">
          Dynamic Styling:
          <p className="text-xl text-gray-500">
            Simply style your components with a global theme or based on
            different states.
          </p>
        </ListItem>
      </OrderedList>
    </Slide>
  );
};

export default Slide7;
