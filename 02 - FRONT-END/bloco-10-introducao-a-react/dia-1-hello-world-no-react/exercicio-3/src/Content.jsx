import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const setContents = () => {
  return conteudos.map((content) => {
    return <section key={content.conteudo} className='content'>
      <p className='content-name'>O conteúdo é: {content.conteudo}</p>
      <p className='content-status'>Status: {content.status}</p>
      <p className='block-number'>Bloco: {content.bloco}</p>
    </section>
  });
};

class Content extends Component {
  render() {
    return (
      <article className='contents'>
        {setContents()}
      </article>
    )
  }
}

export default Content;