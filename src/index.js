import React from 'react';
import ReactDom from 'react-dom';


function BookList() {

  return(
    <section>
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (<article>
    <Image/>
    <Title />
    <Author />
  </article>
  );
};

const Image = () => (<img src='https://images-na.ssl-images-amazon.com/images/I/51xiuHJv5DL._SX398_BO1,204,203,200_.jpg' alt='' />
);

const Title = () => <h1>Half Baked Harvest</h1>;
const Author = () => <h1>Tieghan Gerard</h1>;


ReactDom.render(<BookList/>, document.getElementById('root'));