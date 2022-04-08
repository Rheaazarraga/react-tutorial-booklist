import React from 'react';
import ReactDom from 'react-dom';
import {books} from './books';
import Book from './Book';
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

ReactDom.render(<BookList />, document.getElementById('root'));