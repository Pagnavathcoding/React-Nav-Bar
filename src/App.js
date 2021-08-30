import React from 'react';
import Nav from './components/Nav';
import bar from './images/bar.svg';
import close from './images/close.svg';
function App() {
  return (
    <>
      <Nav logo="PagnavathJS" bar={bar} close={close} />
    </>
  )
}
export default App;
