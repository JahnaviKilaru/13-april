import React, { Component } from 'react'
import app from "./firebaseConfig"
import { getAuth, signOut } from 'firebase/auth'

const auth=getAuth()

export default class Home extends Component {
    logout=()=>{
        signOut(auth)
          .then(()=>console.log("Signed Out Successfully"))
          .catch((err)=>console.log(err))
    }
  render() {
    return (
      <div>
       
        You are Logged in  Successfully
        <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}
