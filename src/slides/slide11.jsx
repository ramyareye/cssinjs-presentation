import React from "react";
import tomorrow from "react-syntax-highlighter/dist/cjs/styles/prism/tomorrow";

import { Heading, Slide, Text, CodePane } from "spectacle";

const Slide3 = () => {
  return (
    <Slide>
      <Heading fontSize={35} textColor="secondary" caps>
        Some Examples
      </Heading>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "space-evenly",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "600px", margin: 25, overflow: "hidden" }}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            @emotion
          </Text>
          <CodePane
            language="javascript"
            theme={tomorrow}
            highlightRanges={[1, 3]}
          >
            {`
                import styled from '@emotion/styled'

                const Button = styled.button\`
                  padding: 32px;
                  background-color: hotpink;
                  font-size: 24px;
                  border-radius: 4px;
                  color: black;
                  font-weight: bold;
                  &:hover {
                    color: white;
                  }
                \`
                render(<Button>component.</Button>)
              `}
          </CodePane>
        </div>
        <div style={{ width: "600px", margin: 25, overflow: "hidden" }}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            styled-jsx
          </Text>
          <CodePane language="jsx" theme={tomorrow} highlightRanges={[1, 3]}>
            {`
            <style jsx>{\`
              p {
                color: red;
              }
            \`}</style>
            
            <style jsx global>{\`
              body {
                background: red
              }
            \`}</style>
            `}
          </CodePane>
        </div>
      </div>
    </Slide>
  );
};

export default Slide3;
