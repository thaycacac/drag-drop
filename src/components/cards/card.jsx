import React from 'react'
import styled from 'styled-components'

function Task ({ task, index, onDragStart }) {
  return (
    <WrapTask
      className="task"
      draggable="true"
      id={index}
      onDragStart={(e) => onDragStart(e)}
    >
      {task.content}
    </WrapTask>
  )
}

const WrapTask = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
  color: #172b4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export default Task
