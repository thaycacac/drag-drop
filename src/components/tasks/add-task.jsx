import React, { useState } from 'react'
import styled from 'styled-components'
import { TButton } from '../common/'

function AddTask ({ addTask }) {
  const [newTask, updateNewTask] = useState('')
  const [isAdd, updateIsAdd] = useState(false)

  const showAdd = () => {
    updateIsAdd(!isAdd)
  }

  const addMoreTask = (event) => {
    event.preventDefault();
    const col = event.target.closest('.col')
    addTask({
      indexColumn: col.dataset.list,
      content: newTask
    })
  }

  return (
    !isAdd ? (
      <WrapButtonAdd onClick={() => showAdd()}>
        <i className="fas fa-plus-circle" />
        Addtask
      </WrapButtonAdd>
    ) : (
        <WrapForm
        onSubmit={(event) => addMoreTask(event)}>
        <textarea
          className="input-card"
          cols="35"
          rows="4"
          placeholder="Enter a title for this card..."
          onChange={(event) => updateNewTask(event.target.value)}
          />
          <div className="wrap-button">
            <TButton primary>Add Card</TButton>
            <i className="far fa-times-circle icon"
              onClick={() => showAdd()} />
          </div>
      </WrapForm>
    )
  )
}

const WrapButtonAdd = styled.div`
  padding: 0.5rem;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  background: rgba(255, 255, 255, 0.3);
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    cursor: pointer;
  }
`

const WrapForm = styled.form`
  .input-card {
    border: none;
    resize: none;
    font-size: 0.8rem;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
    padding: 10px;
    &:focus {
      outline:none;
    }
  }
  .wrap-button {
    display: flex;
    justify-items: center;
    align-items: center;
    .icon {
      cursor: pointer;
      font-size: 1.6rem;
      color: #48bdbf;
      margin-left: 5px;
    }
  }
`

export default AddTask
