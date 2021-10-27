import React from "react";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

import { Heading, Slide, Text, CodePane } from "spectacle";

const Slide3 = () => {
  return (
    <Slide>
      <Heading textColor="secondary" caps>
        Tailwind CSS
      </Heading>
      <Text fontSize={35} textAlign="center">
        Rapidly build modern websites without ever leaving your HTML.
      </Text>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "space-evenly",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "1000px", margin: 25, overflow: "hidden" }}>
          <CodePane language="jsx" theme={tomorrow} highlightRanges={[1, 3]}>
            {`
            <figure class="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
              <img class="w-32 h-32" src="/sarah-dayan.jpg" alt="" width="384" height="512">
              <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p class="text-lg font-semibold">
                    “Tailwind CSS is the only framework that I've seen scale
                    on large teams. It’s easy to customize, adapts to any design,
                    and the build size is tiny.”
                  </p>
                </blockquote>
                <figcaption class="font-medium">
                  <div class="text-cyan-600">
                    Sarah Dayan
                  </div>
                </figcaption>
              </div>
            </figure>
            `}
          </CodePane>
        </div>
      </div>
    </Slide>
  );
};

export default Slide3;
