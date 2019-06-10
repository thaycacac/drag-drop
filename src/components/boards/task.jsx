import React from 'react'
import styled from 'styled-components'

const WrapTask = styled.div`
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background: white;
  color: #172b4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

function Task ({ task, onDragStart }) {
  return (
    <WrapTask
      className="task"
      draggable="true"
      id={task.id}
      onDragStart={(e) => onDragStart(e)}
    >{task.content}</WrapTask>
  )
}

export default Task
