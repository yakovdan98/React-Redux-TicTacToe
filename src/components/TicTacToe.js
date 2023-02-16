import React, { useState } from 'react';

const Box = () => { 
  const [mark, setMark] = useState("");

  return (
    <div onClick={() => setMark(
      mark = "x"
    )}>
      <h1>{mark}</h1>
    </div>
  );
}
const TicTacToe = () => {
   
  return ( 
    <div>
      <Box/>
      <Box/>
      <Box/>
      <br/>
      <Box/>
      <Box/>
      <Box/>
      <br/>
      <Box/>
      <Box/>
      <Box/>
    </div>
   );
}
 
export default TicTacToe;