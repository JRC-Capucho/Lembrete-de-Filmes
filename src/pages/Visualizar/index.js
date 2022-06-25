import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, ContTittle, Title, ButtonS, ButtonL, ContMovie } from './style';

export const Visualizar = () => {

    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            await fetch("http://localhost/dbfilmes/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setData(responseJson.movie);
                })
        }
        getMovie();
    }, [id]);
    return (
        <Container>
            <ContTittle>
                <Title>Visualizar</Title>
                <ButtonS>
                    <Link to="/">
                        <ButtonL>Listar</ButtonL>
                    </Link>
                </ButtonS>
            </ContTittle>
            <ContMovie>Título: {data.tittle}</ContMovie>
            <ContMovie>Gênero: {data.genre}</ContMovie>
            <ContMovie>Elenco:{data.topcast}</ContMovie>
            <ContMovie>Opinião:{data.pov}</ContMovie>
        </Container>
    );
}