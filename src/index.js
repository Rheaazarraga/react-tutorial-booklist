import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// set up vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg',
  author: 'Tieghan Gerard',
  title: 'Half Baked Harvest'
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/512SbYYGaWL._SX402_BO1,204,203,200_.jpg',
  author: 'Joshua Weissman',
  title: 'Joshua Weissman: An Unapologetic Cookbook'
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51hS7eLW65L._SX444_BO1,204,203,200_.jpg',
  author: 'Andrew Rea',
  title: 'Binging With Babish: 100 Recipes Recreated from Your Favorite Movies and TV Shows' 
}
function BookList() {

  return (
    <section className='booklist'>
      <Book img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}/>
      <Book img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}/>
      <Book img={thirdBook.img}
      title={thirdBook.title}
      author={thirdBook.author}/>

    </section>
  );
}




const Book = (props) => {


  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));