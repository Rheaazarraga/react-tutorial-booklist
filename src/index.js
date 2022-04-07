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

const fourthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51eU8l7A9oL._SX400_BO1,204,203,200_.jpg',
  author: 'Matty Matheson',
  title: 'Home Style Cookery: A Home Cookbook' 
}

const fifthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51jEmzNkNVL._SX398_BO1,204,203,200_.jpg',
  author: 'Samin Nosrat',
  title: ' Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking' 
}

const sixthBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51fFkBSa5UL._SX402_BO1,204,203,200_.jpg',
  author: 'Stanley Tucci',
  title: ' The Tucci Table: Cooking With Family and Friends' 
}

function BookList() {

  return (
    <section className='booklist'>
      <Book img={firstBook.img}
      title={firstBook.title}
      author={firstBook.author}
      />
      <Book img={secondBook.img}
      title={secondBook.title}
      author={secondBook.author}
      />
      <Book img={thirdBook.img}
      title={thirdBook.title}
      author={thirdBook.author}
      />
      <Book img={fourthBook.img}
      title={fourthBook.title}
      author={fourthBook.author}/>
      <Book img={fifthBook.img}
      title={fifthBook.title}
      author={fifthBook.author}/>
      <Book img={sixthBook.img}
      title={sixthBook.title}
      author={sixthBook.author}/>

    </section>
  );
}



// another way to pass props:
const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<BookList />, document.getElementById('root'));