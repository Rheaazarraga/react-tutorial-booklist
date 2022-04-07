import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


function BookList() {

  return (
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

const title = 'Half Baked Harvest';
const author = 'Tieghan Gerard';
const img = 'https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg';

const Book = (props) => {
  console.log('props---', props);


  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <p>{title}</p>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));