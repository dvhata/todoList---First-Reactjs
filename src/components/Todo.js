import Button from "@atlaskit/button";
import React from "react";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check";

const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;

  &,&:hover {
    ${(p) =>
        p.isCompleted &&
        css`
          text-decoration: line-through;
        `}    
  }
 
  &:hover {
    .check-icon {
      display: inline-block;
      background-color:red;
    }
  }
  .check-icon {
    display: none;
  }
  &:hover {
    background-color: yellow;
    border-radius: 3px;
  }
`;

const Todo = ({ todo, onCheckButtonClick }) => {
  return (
    <ButtonStyled
      isCompleted={todo.isCompleted}
      shouldFitContainer
      iconAfter={
        !todo.isCompleted && 
        <span className="check-icon" onClick={() => onCheckButtonClick(todo.id)}>
          <CheckIcon primaryColor="green" />
        </span>
      }
    >
      {todo.name}{" "}
    </ButtonStyled>
  );
};

export default Todo;
