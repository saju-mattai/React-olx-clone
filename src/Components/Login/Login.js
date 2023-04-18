import React, { useState,useContext } from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import { Form,Button } from 'semantic-ui-react';
import {useForm} from 'react-hook-form'

function Login() {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {firebase}=useContext(FirebaseContext)
  const history=useHistory()

  const {register,handleSubmit,formState:{errors}} = useForm()
  
  // const handleLogin = (e)=>{
  //   e.preventDefault() 
  //   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
  //     history.push('/')
  //   }).catch((error)=>{
  //     alert(error.message)
  //   })
  // }

  console.log('email',email);

  const onSubmit = (data) =>{
    console.log(data);
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      
      history.push('/')
    }).catch((error)=>{
      console.log(error);
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <Form onSubmit={handleSubmit(onSubmit)}>
       
          <Form.Field>
          <label htmlFor="fname">Email</label>
          
          <input
           {...register('email',{
              required:true
            })}
            className="input"
            type="email"
             //value={email}
            onChange={(e)=>{setEmail(e.target.value)
              console.log("ON CHNAGE IS CALLED")}}
             id="email"
             name="email"
            placeholder="John"
           
            
          />
          </Form.Field>
          {errors.email && <p style={{color:'red'}}>Please check the email</p>}
          
          <Form.Field>
          <label htmlFor="lname">Password</label>
         
          <input
           {...register('password',{
            required:true
          })}
            className="input"
            type="password"
             //value={password}
            onChange={(e)=>setPassword(e.target.value)}
             id="lname"
             name="password"
            placeholder="******"
           
          />
         
          </Form.Field>
          {errors.password && <p style={{color:'red'}}>Please check the password</p>}
          <Button type='submit'>Login</Button>
          
        </Form>
        <a onClick={()=>{
          history.push('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
