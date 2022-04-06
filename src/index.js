import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function BookList() {

  return(
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
  <article className='book'>
    <Image/>
    <Title />
    <Author />
  </article>
  );
};

const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg' alt='' />
);

const Title = () => <h1>Half Baked Harvest</h1>;

const Author = () => <h4>Tieghan Gerard</h4>;


ReactDom.render(<BookList/>, document.getElementById('root'));