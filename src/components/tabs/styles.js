import styled from 'styled-components';

export const StyledButton = styled.button`
    background-color: ${({ active }) => (active ? "#4CAF50" : "#008CBA")};
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    width: 60px;
`;