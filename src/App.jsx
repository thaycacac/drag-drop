import React from "react";
import styled from "styled-components";
import "react-notifications/lib/notifications.css";
import Board from "./components/boards";
import "./styles.css";

const WrapApp = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  overflow: scroll;
`;

function App() {
  return (
    <WrapApp>
      <h1>Example Drag/Drop</h1>
      <Board />
    </WrapApp>
  );
}

export default App;
