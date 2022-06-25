import React, { useEffect, useState } from 'react';
import { Title, Container, Alert,  Form, ContForm, Label, Input, Button, ContTittle, ButtonL, ButtonS } from './style';
import { Link, useParams } from 'react-router-dom';

export const Editar = () => {


    const { id } = useParams();
    const [tittle, setTittle] = useState('');
    const [genre, setGenre] = useState('');
    const [topcast, setTopCast] = useState('');
    const [pov, setPov] = useState('');

    const [status, setStatus] = useState({
        type: '',
        msg: ''
    });

    const editMovie = async e => {
        e.preventDefault();

        await fetch("http://localhost/nextcrud/editar.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, tittle, genre, topcast, pov })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.error)
                    setStatus({
                        type: 'error',
                        msg: responseJson.alert
                    });
                else
                    setStatus({
                        type: 'success',
                        msg: responseJson.alert
                    });

            }).catch(() => {
                setStatus({
                    type: 'error',
                    msg: "Falha ao editar o produto tente mais tarde"
                });
            });
    }

    useEffect(() => {
        const getMovie = async () => {
            await fetch("http://localhost/dbfilmes/visualizar.php?id=" + id)
                .then((response) => response.json())
                .then((responseJson) => {
                    setTittle(responseJson.movie.tittle);
                    setGenre(responseJson.movie.genre);
                    setTopCast(responseJson.movie.topcast);
                    setPov(responseJson.movie.pov);
                });
        }
        getMovie();
    }, [id]);
    return (
        <Container>
            <ContForm>
                <ContTittle>
                    <Title>Editar</Title>
                    <ButtonS>
                        <Link to="/">
                            <ButtonL>Lista</ButtonL>
                        </Link>
                    </ButtonS>
                </ContTittle>
                {status.type === 'error' ? <Alert>{status.msg}</Alert> : ""}
                {status.type === 'success' ? <Alert>{status.msg}</Alert> : ""}
                <Form onSubmit={editMovie}>
                    <Label>Título:</Label>
                    <Input type="text" name="tittle" placeholder="Nome do filme" value={tittle} onChange={e => setTittle(e.target.value)} />
                    <Label>Gênero:</Label>
                    <Input type="text" name="genre" placeholder="Gênero do filme" value={genre} onChange={e => setGenre(e.target.value)} />
                    <Label>Elenco:</Label>
                    <Input type="text" name="topcast" placeholder="Elenco do filme" value={topcast} onChange={e => setTopCast(e.target.value)} />
                    <Label>Opinião</Label>
                    <Input type="text" name="pov" placeholder="Seu ponto de vista sobre o filme" value={pov} onChange={e => setPov(e.target.value)} />
                    <Button type="submit">Editar</Button>
                </Form>
            </ContForm>
        </Container>

    );
}