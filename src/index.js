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

function Greeting() {

  return(
    <div>
      <Person />
      <Msg />
    </div>
  );
}

const Person = () => <h2>Bita Bean</h2>;
const Msg = () => {
  return  <p>this is my page</p>;
};


ReactDom.render(<Greeting/>, document.getElementById('root'));