import Button from '@atlaskit/button'
import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
    margin-top: 5px;
    text-align: left;
`;


const Todo = ({todo}) => {
    return (
            <ButtonStyled shouldFitContainer>{todo.name}</ButtonStyled>
    );
}

export default Todo;
