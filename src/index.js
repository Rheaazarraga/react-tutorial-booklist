import React from 'react';
import ReactDom from 'react-dom';
import {books} from './books';
import './index.css';



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