import "./App.css";
import AllBalls from "./Components/AllBalls";
import BallDiv from "./Components/BallDiv";
import TextInput from "./Components/TextInput";
import styled from "styled-components";

function App() {
  let Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-align: center;
  `;
  return (
    <div className="App">
      <h1>:: Shoot the Ball ::</h1>
      <Div>
        <BallDiv />
        <AllBalls />
        <TextInput />
      </Div>
    </div>
  );
}

export default App;
