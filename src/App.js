import './App.css'
import Navbar from './container2/Navbar'
import Todo from './container2/Todo'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Logout from './container2/Logout'
import React,{Component} from 'react'
import Home from './container2/Home'
import Login from  './container2/Login'
// eslint-disable-next-line 
import app from './container2/firebaseConfig'
import {getAuth,onAuthStateChanged} from 'firebase/auth'
import Filenotfound from './container2/Filenotfound'

const auth=getAuth()

export default class App extends Component {
  state={
    user:{}
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>{
      if(user){
        this.setState({user:user})
      }
      else{
        this.setState({user:null})
      }
    })
  }
  render(){
    return (
      <div>
        {
          this.state.user?(
          
          <BrowserRouter>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/todo' element={<Todo/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='*' element={<Filenotfound/>} />
              </Routes>
            </BrowserRouter>
          
          ):<Login/>
          }
      </div>
    )
  }

}









// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Home from "./container/Home"
// import Signup from "./container/Signup"
// import Contact from "./container/Contact"
// import About from "./container/About"
// import Navbar from "./container/Navbar"
// import "./App.css"
//  function App(){
//   return(
//     <div>
//       <BrowserRouter>
//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/about" element={<About/>}/>
//           <Route path="/contact" element={<Contact/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="*" element={<NotFound/>}/>
//         </Routes> 
//       </BrowserRouter>
//     </div>
//   )
// }

// function NotFound(){
//   return(
//     <div>
//       <p>File Not Found</p>
//     </div>
//   )
// }
// import MessageList from "./components/MessageList"

// export default function App() {
//   return (
//     <div className="TakeMessage">
//       <p>Helo</p>
  
//       <MessageList/>
//     </div>
//   )
// }



//export default App