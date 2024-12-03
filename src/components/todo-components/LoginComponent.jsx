import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function LoginComponent(){
    const [username, setUserName] = useState("Username")
    const [password, setPassword] = useState("")
    const [showSuccessMessage, setSuccessMessage] = useState(false)
    const [showFailedMessage, setFailedMessage] = useState(false)
    const navigate = useNavigate();


    function handleUserNameChange(event){
        setUserName(event.target.value)
    }
    function handlePasswordChange(event){
        setPassword(event.target.value)
    }
    function handleSubmit(){
        if(username==='user1' && password==="p"){
            setSuccessMessage(true) 
            setFailedMessage(false)
            navigate(`/welcome/${username}`)
        }
        else{
            setFailedMessage(true)
            setSuccessMessage(false)
        }
       
    }

    // function SuccessMessageComponent(){
    //     if(showSuccessMessage){
    //       return  <div className="successMessage"  >Authentication Successfully</div>
    //     }
    // }
    // function FailedMessageComponent(){
    //     if(showFailedMessage){
    //         return    <div className="errorMessage">Authentication failed.</div>
    //         }
    // }
    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage"  >Authentication Successfully </div> }
            {showFailedMessage && <div className="errorMessage">Authentication failed.</div> }
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value ={username} onChange={handleUserNameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Login</button>    
                </div>           
            </div>
        </div>
    )
}
