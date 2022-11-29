import React from 'react';
import Restaurant from './Components/Basics/Restaurant';

const App = () => {
  return (
    <>
    {/* <MyName /> */}
    <Restaurant />
    </>
  );
};

// const MyName = () =>{
//     return <h1>Hello Jii</h1>
// }
//how React actually interpret the function

// const App = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1",{},"Hello World")
//   );
// };

export default App;

