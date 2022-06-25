import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    background-color:#FFF8DC ;

`;

export const Title = styled.h1`
   font-size: 40px;
   color: black; 
   font-family:  Helvetica, Arial, sans-serif;

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

export const Form = styled.form`
    margin: 0px auto;
`;

export const ContForm = styled.section`
    max-width: 960px;
    padding: 10px 30px 30px;
`;

export const Label = styled.label`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;    
    font-family:  Helvetica, Arial, sans-serif;
    font-size: 16px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    margin-top: 6px;
    margin-bottom: 16px;    
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    resize: vertical;
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

export const ContTittle = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ButtonL = styled.button`
    background-color: #fff;
    color: #0dcaf0;
    padding: 8px 12px;
    border: 1px solid black;
    border-radius: 4px;
    cursor:pointer;
    font-size: 18px;
    :hover{
        background-color: #31d2f2;
        color: #fff;
    }
`;

export const ButtonS = styled.section`
    margin: 30px 0px;
`;
