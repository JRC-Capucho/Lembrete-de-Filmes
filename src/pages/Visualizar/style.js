import styled from 'styled-components';

export const Container = styled.section`
    max-width: 960px;
    margin: 20px auto;
    box-shadow: 0 0 1em #6c757d;
    padding: 20px;
    background-color:#FFF8DC ;
`;

export const ContTittle = styled.h1`
    display: flex;
    justify-content: space-between;
`;

export const ButtonS = styled.section`
    margin: 30px 0px;
`;

export const Title = styled.h1`
   font-size: 40px;
   color: black; 
   font-family:  Helvetica, Arial, sans-serif;

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

export const ContMovie = styled.p`
    color: black;
    font-size: 14px;
    font-family:  Helvetica, Arial, sans-serif;
    border: 1px solid black;
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    background-color:#DCDCDC ;

`;