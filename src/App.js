import React from 'react';

import './global.css';

import Routes from './routes';
//JSX -  Javascript e XML
//Componente - funcão que retorna XML/HTML
//Propriedades == Retorna um atributo para o componente
//Estado =  Informação que vai ser mantida pelo componente
//Imutabilidade = Sobrepõe o valor do estado

function App() {
  //Array [valor, funçãoDeAtualização]

  return (
    <Routes />
  );
}

export default App;
