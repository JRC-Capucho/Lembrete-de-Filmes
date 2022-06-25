import React, { useState } from 'react';
import { Title, Alert, Container, Form, ContForm, Label, Input, Button, ContTittle, ButtonL, ButtonS } from './style';
import { Link } from 'react-router-dom';

export const Cadastrar = () => {

  const [movie, setMovie] = useState({
    tittle: '',
    genre: '',
    topcast: '',
    pov: ''
  });

  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });

  const value = e => setMovie({ ...movie, [e.target.name]: e.target.value });

  const cadMovie = async e => {
    e.preventDefault();

    await fetch("http://localhost/dbfilmes/cadastrar.php", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ movie })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.erro)
          setStatus({
            type: 'error',
            msg: responseJson.alert
          });
        else
          setStatus({
            type: 'success',
            msg: responseJson.alert
          });
      }
      ).catch(() => {
        setStatus({
          type: 'error',
          msg: "Falha ao cadastrar filme tente mais tarde"
        });
      });
  }
  return (
    <Container>
      <ContForm>
        <ContTittle>
          <Title>Cadastrar Filmes</Title>
          <ButtonS>
            <Link to="/">
              <ButtonL>Listar</ButtonL>
            </Link>
          </ButtonS>
        </ContTittle>
        {status.type === 'error' ? <Alert>{status.msg}</Alert> : ""}
        {status.type === 'success' ? <Alert>{status.msg}</Alert> : ""}
        <Form onSubmit={cadMovie}>
          <Label>Título:</Label>
          <Input type="text" name="tittle" placeholder="Nome do filme" onChange={value} />
          <Label>Gênero:</Label>
          <Input type="text" name="genre" placeholder="Gênero do filme" onChange={value} />
          <Label>Elenco:</Label>
          <Input type="text" name="topcast" placeholder="Elenco do filme" onChange={value} /> 
          <Label>Opinião</Label>
          <Input type="text" name="pov" placeholder="Seu ponto de vista sobre o filme" onChange={value} />
          <Button type="submit">Cadastrar</Button>
        </Form>
      </ContForm>
    </Container>
  );
}