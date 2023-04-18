import React, { useContext } from 'react'
import './Modal.css'
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom';


function Modal({closeModal}) {
    const {user} = useContext(AuthContext)
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()
    
    const handleLogout = () =>{
        firebase.auth().signOut();
            history.push('/login')
    }
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'> 
            <button onClick={()=>{
                closeModal(false)
            }}> X </button>
            </div>
           
           <div className="title">
              <h1>Are u sure u want to continue the action?</h1>
           </div>
           <div className="modalBody">
            <p></p>
           </div>
           <div className="footer">
            <button onClick={()=>{
                closeModal(false)
            }} id="cancelBtn">Cancel</button>
            <button onClick={()=>{
                handleLogout()
            }}>Continue</button>
           </div>
        </div>
        
    </div>
  )
}

export default Modal