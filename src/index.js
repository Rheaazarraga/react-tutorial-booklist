import React from 'react';
import ReactDom from 'react-dom';
import './index.css';


const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg',
    author: 'Tieghan Gerard',
    title: 'Half Baked Harvest'
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/512SbYYGaWL._SX402_BO1,204,203,200_.jpg',
    author: 'Joshua Weissman',
    title: 'Joshua Weissman: An Unapologetic Cookbook'
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51hS7eLW65L._SX444_BO1,204,203,200_.jpg',
    author: 'Andrew Rea',
    title: 'Binging With Babish: 100 Recipes Recreated from Your Favorite Movies and TV Shows'
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51eU8l7A9oL._SX400_BO1,204,203,200_.jpg',
    author: 'Matty Matheson',
    title: 'Home Style Cookery: A Home Cookbook'
  },
  {
    id: 5,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51jEmzNkNVL._SX398_BO1,204,203,200_.jpg',
    author: 'Samin Nosrat',
    title: ' Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking'
  },
  {
    id:6,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51fFkBSa5UL._SX402_BO1,204,203,200_.jpg',
    author: 'Stanley Tucci',
    title: ' The Tucci Table: Cooking With Family and Friends'
  }
];


function BookList() {

  return (
    <section className='booklist'>
      {/* implement map method so we don't have to manually input img, title author.
      book param always points back to an item/single obj in the array */}
      {books.map((book)=> {
        return (
         <Book key={book.id} 
         {...book}></Book>
        );
      })}

    </section>
  );
}


// passing destructured props
const Book = ({img, title, author}) => {

  // attribute, eventHandler
  // onClick, onMouseOver
  
  //reference function:
  const clickHandler = (e) => {
    alert('You chose this book');
  }

  const authorInfo = (author) => {
    console.log(author);
  };

  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt='' />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Look inside</button>
      <button type='button' onClick={() => authorInfo(author)}>More by this author</button>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));