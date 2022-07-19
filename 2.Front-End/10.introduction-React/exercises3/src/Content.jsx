import { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends Component {
  render() {
    return (
      <div className="content">
        {conteudos.map(({ conteudo, bloco, status }) => (
          <div className="card" key={conteudo}>
            <h4>O conteúdo é: {conteudo}</h4>
            <h4>Status: {status}</h4>
            <h4>Status: {bloco}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;
