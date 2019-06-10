import React from 'react';
import styled from 'styled-components'
import Board from './components/boards'

const WrapApp = styled.div`
`

function App() {
  return (
    <WrapApp>
      <Board />
    </WrapApp>
  );
}

export default App;