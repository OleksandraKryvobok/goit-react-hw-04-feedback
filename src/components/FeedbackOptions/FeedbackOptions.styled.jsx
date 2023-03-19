import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 200px;
`;

export const Item = styled.li`
`;

export const Button = styled.button`
    padding: 4px 8px;
    font-size: 12px;
    text-transform: capitalize;
    background-color: #ffffff;
    border: 1px solid #7c7b7b;
    border-radius: 6px;
    cursor: pointer;

    &:hover, 
    &:focus {
        color: #ffffff;
        background-color: #7f96e1;
        border: 1px solid #7f96e1;
    }
`;