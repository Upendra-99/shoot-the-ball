import "./App.css";
import AllBalls, { Ball } from "./Components/AllBalls";
import BallDiv from "./Components/BallContainer";
import TextInput from "./Components/TextInput";
import styled from "styled-components";
import { useSelector } from "react-redux";

function App() {
  // fetched all balls to show initial positions as Hint;
  const originalPosition = useSelector((state) => state.source);

  let Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  `;
  let Hint = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.5vw;
    col-gap: 5px;
  `;

  return (
    <div className="App">
      <h1>:: Shoot the Ball ::</h1>
      <Hint>
        <h4> Hint : &nbsp;</h4> Initial positions of balls
        {originalPosition.map((item, i) => (
          <Ball
            style={{
              height: "40px",
              width: "40px",
              color: "white",
              margin: "5px",
              backgroundColor: item.color,
            }}
            key={item.id}
          >
            {i + 1}
          </Ball>
        ))}
      </Hint>
      <Div>
        <BallDiv />
        <AllBalls />
        <TextInput />
      </Div>
    </div>
  );
}

export default App;
