import ReactDom from 'react-dom';

function Greeting() {


  return(
    <h1>This is Bita, and this is my 1st component!!!</h1>
  );
}

ReactDom.render(<Greeting/>, document.getElementById('root'));