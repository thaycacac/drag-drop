import React, { useState } from "react";
import styled from "styled-components";
import { validateInput } from "../../utils";
import { TButton } from "../common";

function AddBoard({ addBoard }) {
  const [newBoard, updateNewBoard] = useState("");
  const [isAdd, updateIsAdd] = useState(false);

  const showAdd = () => {
    updateIsAdd(!isAdd);
  };

  const addMoreBoard = event => {
    event.preventDefault();
    if (validateInput(newBoard)) {
      addBoard({
        name: newBoard
      });
      updateNewBoard("");
      updateIsAdd(false);
    }
  };

  return !isAdd ? (
    <WrapButtonAdd onClick={() => showAdd()}>
      <i className="fas fa-plus-circle icon" />
      Add Card
    </WrapButtonAdd>
  ) : (
    <WrapForm onSubmit={event => addMoreBoard(event)}>
      <input
        className="input-card"
        type="text"
        placeholder="Enter a title for this card..."
        onChange={event => updateNewBoard(event.target.value)}
      />
      <div className="wrap-button">
        <TButton primary>Add Card</TButton>
        <i className="far fa-times-circle icon" onClick={() => showAdd()} />
      </div>
    </WrapForm>
  );
}

const WrapButtonAdd = styled.div`
  background: rgba(255, 255, 255, 0.5);
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: 5px;
  min-width: 250px;
  max-width: 250px;
  height: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background: rgba(255, 255, 255, 0.7);
    text-decoration: underline;
    cursor: pointer;
  }
  .icon {
    margin-right: 5px;
  }
`;

const WrapForm = styled.form`
  background: rgba(255, 255, 255, 0.5);
  margin: 0.5rem 1rem;
  padding: 1rem;
  border-radius: 5px;
  width: 250px;
  height: 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
      outline: none;
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
`;

export default AddBoard;
