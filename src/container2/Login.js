import React,{ Component} from "react"
import app from "./firebaseConfig"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth=getAuth()

 class Login extends Component {
    state={
        username:"",
        password:""
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    register=()=>{
        createUserWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((userCredentatials)=>{
            console.log("created user successfully",userCredentatials)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    signIn=()=>{
        signInWithEmailAndPassword(auth,this.state.username,this.state.password)
        .then((userCredentatials)=>{
            console.log("Logged in Successfully",userCredentatials)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <p><input name="username" onChange={this.handleChange} placeholder="Username"/></p>
                <p><input name="password" onChange={this.handleChange} placeholder="pws"/></p>
                <button onClick={this.signIn}>login</button>
                <p>
                <span>Don't have account</span>
                <button onClick={this.register}>Signup</button>Here
                </p>
            </div>
        )
    }
}

export default Login

























































































































































































































































// import React, { Component } from 'react'
// import app from './firebaseConfig'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

// import TextField from '@mui/material/TextField';
// const auth = getAuth()
// export default class Login extends Component {

//     state = {
//         username: "",
//         password: ""
//     }
//     handlechange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     signIn = () => {
//         signInWithEmailAndPassword(auth, this.state.username, this.state.password)
//             .then((userCredentials) => {
//                 console.log(userCredentials)
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }

//     signUp = () => {
//         createUserWithEmailAndPassword(auth, this.state.username, this.state.password)
//     }

//     render() {
//         return (
//             <div className='row'>
//                 <div className='col-6'>

//                 </div>
//                 <div className='col-6'>
//                     <center className='mt-5 pt-5'>
//                         <p>
//                             <TextField name="username" label="User Name" onChange={this.handlechange} />
//                         </p>
//                         <p>
//                             <TextField label="password" variant='outlined' name="password" onChange={this.handlechange} />
//                         </p>
//                         {/* <input name='username' onChange={this.handlechange} placeholder='user name' />
//                     <input name='password' onChange={this.handlechange} placeholder='passwor' /> */}
//                         <button className='btn bg-light m-2' onClick={this.signIn}>Login</button>
//                         <span>Don't have account</span>
//                         <button className='btn bg-light m-2' onClick={this.signUp}>Signup</button>
//                     </center>
//                 </div>

//             </div>
//        )
//     }
// }