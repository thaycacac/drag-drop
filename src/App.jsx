import React from 'react';
import styled from 'styled-components'
import 'react-notifications/lib/notifications.css';
import Board from './components/boards'
import './styles.css'

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