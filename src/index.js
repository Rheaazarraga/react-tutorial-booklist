import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX

/* JSX rules: 
return single element
div / section / article or Fragment
use camelCase for html attribute
className instead of class
close every element
formatting
*/

// nested components, react tools

function BookList() {

  return(
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article>
    this is a book
  </article>
};

ReactDom.render(<BookList/>, document.getElementById('root'));