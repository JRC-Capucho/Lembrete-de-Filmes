import React, { useState, useEffect } from 'react';
import {Alert, Table, Title, Container, ContTittle, ButtonS, Button, ButtonV, ButtonE, ButtonA } from './style';
import { Link } from 'react-router-dom';

export const Home = () => {

  const [data, setData] = useState([]);

  const [status, setStatus] = useState({
    type: '',
    msg: ''
  });

  const getListaFilmes = async () => {
    fetch("http://localhost/dbfilmes/index.php")
      .then((response) => response.json())
      .then((responseJson) => (
        setData(responseJson.register)
      ));

  }

  const deleteMovie = async (idMovie) => {

    await fetch("http://localhost/dbfilmes/delete.php?id=" + idMovie)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error)
          setStatus({
            type: 'error',
            msg: responseJson.alert
          });
        else{

          setStatus({
            type: 'success',
            msg: responseJson.alert
          });
          getListaFilmes();
        }
      }).catch(() => {
        setStatus({
          type: 'error',
          msg: "Erro: Falha me apagar o filme tente mais tarde"
        });
      });
  };



  useEffect(() => {
    getListaFilmes();
  }, [])

  return (
    <Container>
      <ContTittle>
        <Title>Filmes</Title>
        <ButtonS>
          <Link to="/cadastrar">
            <Button>Cadastrar</Button>
          </Link>
        </ButtonS>
      </ContTittle>
      {status.type === 'error' ? <Alert>{status.msg}</Alert> : ""}
      {status.type === 'success' ? <Alert>{status.msg}</Alert> : ""}
      <Table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Gênero</th>
            <th>Elenco</th>
            <th>Opinião</th>
          </tr>
        </thead>
        <tbody>
          {Object.values(data)
            .map(filmes => (
              <tr key={filmes.id}>
                <td>{filmes.tittle}</td>
                <td>{filmes.genre}</td>
                <td>{filmes.topcast}</td>
                <td>{filmes.pov}</td>
                <td>
                  <Link to={"/visualizar/" + filmes.id}>
                    <ButtonV>Visualizar</ButtonV>
                  </Link>
                  <Link to={"/editar/" + filmes.id}>
                    <ButtonE>Editar</ButtonE>
                  </Link>
                  <ButtonA onClick={() => deleteMovie(filmes.id)}>Apagar</ButtonA>
                </td>
              </tr>
            ))}
        </tbody>

      </Table>
    </Container>
  );
}