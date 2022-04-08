import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg',
    author: 'Tieghan Gerard',
    title: 'Half Baked Harvest'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/512SbYYGaWL._SX402_BO1,204,203,200_.jpg',
    author: 'Joshua Weissman',
    title: 'Joshua Weissman: An Unapologetic Cookbook'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51hS7eLW65L._SX444_BO1,204,203,200_.jpg',
    author: 'Andrew Rea',
    title: 'Binging With Babish: 100 Recipes Recreated from Your Favorite Movies and TV Shows'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51eU8l7A9oL._SX400_BO1,204,203,200_.jpg',
    author: 'Matty Matheson',
    title: 'Home Style Cookery: A Home Cookbook'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51jEmzNkNVL._SX398_BO1,204,203,200_.jpg',
    author: 'Samin Nosrat',
    title: ' Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51fFkBSa5UL._SX402_BO1,204,203,200_.jpg',
    author: 'Stanley Tucci',
    title: ' The Tucci Table: Cooking With Family and Friends'
  },
];


function BookList() {

  return (
    <section className='booklist'>
      {books.map((book)=> {
        const {img, title, author} = book;
        console.log(book);
        return (
         <Book book={book}></Book>
        );
      })}

    </section>
  );
}



// another way to pass props - destructured
const Book = (props) => {
  console.log(props);
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));