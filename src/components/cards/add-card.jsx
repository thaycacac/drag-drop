import React, { useState } from 'react'
import styled from 'styled-components'
import { NotificationManager } from 'react-notifications';
import { TButton } from '../common'

function AddCard ({ addCard }) {
  const [newTask, updateNewTask] = useState('')
  const [isAdd, updateIsAdd] = useState(false)

  const showAdd = () => {
    updateIsAdd(!isAdd)
  }

  const addMoreTask = (event) => {
    event.preventDefault();
    if (!newTask) {
      NotificationManager.error('Input invalid')
    } else {
      const col = event.target.closest('.col')
      addCard({
        indexColumn: col.dataset.list,
        content: newTask
      })
      updateNewTask('')
      updateIsAdd(false)
    }
  }

  return (
    !isAdd ? (
      <WrapButtonAdd onClick={() => showAdd()}>
        <i className="fas fa-plus-circle icon" />
        Add Card
      </WrapButtonAdd>
    ) : (
        <WrapForm
        onSubmit={(event) => addMoreTask(event)}>
        <input
          className="input-card"
          type="text"
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
  .icon {
    margin-right: 5px;
  }
`

const WrapForm = styled.form`
  .input-card {
    border: none;
    resize: none;
    font-size: 0.8rem;
    border-radius: 5px;
    padding: 10px;
    height: 40px;
    width: 225px;
    margin-bottom: 10px;
    vertical-align: text-top;
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

export default AddCard
