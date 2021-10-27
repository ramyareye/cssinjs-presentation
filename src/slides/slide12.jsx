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
          <Text style={{ textAlign: "center", marginBottom: 20 }}>JSS</Text>
          <CodePane
            language="javascript"
            theme={tomorrow}
            highlightRanges={[1, 3]}
          >
            {`
            import { createUseStyles, useTheme } from "react-jss";

            const useStyles = createUseStyles({
              title: {
                font: {size: 40},
                color: ({ theme }) => theme.color
              },
            });

            const theme = {
              color: "#24292e"
            };

            const App = () => {
              const theme = useTheme();
              const classes = useStyles({ theme });
              return (<h1 className={classes.title}>Hello React-JSS!</h1>);
            };
              `}
          </CodePane>
        </div>
        <div style={{ width: "600px", margin: 25, overflow: "hidden" }}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>
            styled-components
          </Text>
          <CodePane language="jsx" theme={tomorrow} highlightRanges={[1, 3]}>
            {`
              import styled from 'styled-components'

              const Button = styled.a\`
                display: inline-block;
                border-radius: 3px;
                padding: 0.5rem 0;
              \`

              render(<div><Button href="#">GitHub</Button>)
            `}
          </CodePane>
        </div>
      </div>
    </Slide>
  );
};

export default Slide3;
