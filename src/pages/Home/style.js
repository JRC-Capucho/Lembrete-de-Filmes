import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 0px 20px 20px;
    background-color:#FFF8DC ;
`;

export const ContTittle = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ButtonS = styled.section`
    margin: 30px 0px;
`;

export const Button = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 4px;
    cursor:pointer;
    font-size: 16px;
    :hover{
        background-color: #157347;
        color: #fff;
    }

`;

export const ButtonV = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 4px 7px;
    border: 1px solid black;
    border-radius: 4px;
    cursor:pointer;
    font-size: 14px;
    :hover{
        background-color: #0d6efd;
        color: #fff;
    }

`;

export const ButtonE = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 4px 7px;
    border: 1px solid black;
    border-radius: 4px;
    cursor:pointer;
    font-size: 14px;
    :hover{
        background-color: lightgreen;
        color: black;
    }

`;

export const ButtonA = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 4px 7px;
    border: 1px solid black;
    border-radius: 4px;
    cursor:pointer;
    font-size: 14px;
    :hover{
        background-color: red;
        color: #fff;
    }

`;

export const Title = styled.h1`
   font-size: 50px;
   color: black; 
   font-family:  Helvetica, Arial, sans-serif;

`;

export const Table = styled.table`
    width: 100%;
    th{
        background-color: lightblue;
        color: black;
        padding: 8px;
        font-size: 18px;
    }
    td{
        background-color:#DCDCDC ;
        color: black;
        padding: 5px;
        font-size: 16px;
    }
`;

export const Alert = styled.p`
    background-color: #F0FFFF;
    width: 30%;
    color: black;
    margin: 20px 0;
    border: 1px solid black;
    border-radius: 4px;
    padding: 4px;
    font-family:  Helvetica, Arial, sans-serif;
`;

