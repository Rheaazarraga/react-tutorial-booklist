import React from 'react'

// passing destructured props
const Book = ({img, title, author}) => {

  // attribute, eventHandler
  // onClick, onMouseOver
  
  //reference function:
  const clickHandler = (e) => {
    alert('You chose this book');
  }

  const authorInfo = (author) => {
    alert('Please google for the author for other titles by them')
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


export default Book