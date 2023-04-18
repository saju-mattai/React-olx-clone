import React, { useState,useContext } from 'react';
import { useHistory } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import { Form,Button } from 'semantic-ui-react';
import {useForm} from 'react-hook-form'

export default function Signup() {
  const history=useHistory()
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone]=useState('')
  const [password,setPassword]=useState('')
  
  const {firebase}=useContext(FirebaseContext)
  const {register,handleSubmit,formState:{errors}} = useForm()

  const onSubmit =(e)=>{
    // e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({
        displayName:username
      }).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
          history.push("/login")
        })
      })
    })

  }
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
       
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Field>
          <label htmlFor="fname">Username</label>
         
          <input
          {...register('name',{
            required:true
          })}
            className="input"
            type="text"
            // value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="name"
            name="name"
            placeholder="John"
          />
         
          </Form.Field>
          {errors.name && <p style={{color:'red'}}>Please check the name</p>}
          <Form.Field>
          <label htmlFor="fname">Email</label>
         
          <input
          {...register('email',{
            required:true
          }
          )}
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder="john@gmail.com"
          />
        
          </Form.Field>
          {errors.email && <p style={{color:'red'}}>Please check the email</p>}
          <Form.Field>
          <label htmlFor="lname">Phone</label>
          
          <input
          {...register('phone',{
            required:true
          })}
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            placeholder="9999999999"
          />
         
          </Form.Field>
          {errors.phone && <p style={{color:'red'}}>Please check the mobile no</p>}
          <Form.Field>
          <label htmlFor="lname">Password</label>
          
          <input
          {...register('password',{
            required:true
          })}
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder="****"
          />
          </Form.Field>
          {errors.password && <p style={{color:'red'}}>Please check the password</p>}
          
          <Button type='submit'>Signup</Button>
          {/* <button >Signup</button> */}
          </Form>
        
        
        <a onClick={()=>{
          history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
