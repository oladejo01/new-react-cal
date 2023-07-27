import React from 'react';
import Calculator from './component/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

export default App;





// // import React, { Component } from 'react'
// // import { BrowserRouter } from 'react-router-dom';
// // import './App.css';
// // import Main from './component/Main';
// // import UserInput from './component/UserInput';
// // import UserOutput from './component/UserOutput';


// // export class App extends Component {
// //   // state = {
// //   //   persons: [
// //   //     {name: "Bola", age:40},
// //   //     {name: "Lola", age:50},
// //   //     {name: "Tola", age:60},
// //   //     {username: "Oladejo"}
      
// //   // ]
// //   // }
// //   //   changeHandler = (e) => {
// //   //   this.setState({
// //   //     persons: [
// //   //       {name: e.target.value, age:40},
// //   //       {name: e.target.value},
// //   //       {name: e.target.value, age:60},
// //   //       {username: e.target.value}
       
// //   //   ]
// //   //   })
  
// //   // }
// //   render() {
// //     return (
// //       // <div>
// //       //  <Main 
// //       //  changeName = {this.changeHandler}
// //       //  name ={this.state.persons[0].name} age ={this.state.persons[0].age}/>
// //       //  <Main 
       
// //       //  name ={this.state.persons[1].name} age ={this.state.persons[1].age}/>
// //       //  <Main 
// //       //  changeName = {this.changeHandler}
// //       //  name ={this.state.persons[2].name} age ={this.state.persons[2].age}/>
       
// //       //  <UserInput ChangeUsername = {this.changeHandler} />
// //       //  <UserOutput   NewUserName = "Opeyemi" 
// //       //  newname= {this.state.persons[3].username}/>
// //       // </div>
// //       <BrowserRouter>
      
// //       <BrowserRouter/>
// //     )
// //   }
// // }

// // export default App

// import React from 'react'
// import Navbar from './component/Navbar'
// import Home from './component/Home'
// import About from './component/About'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// function App() {
//   return (
//         <div>
//            <Navbar/>
//         <Routes>
         
//           <Route path='/Home' element = {<Home/>}></Route>
//           <Route path='/About' element = {<About/>}></Route>
//         </Routes>
//         </div>
//   )
// }

// export default App

