import './TodoApp.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'

export default function TodoApp(){
    return (
        <div className="TodoApp"> 
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginComponent />}> </Route>
                <Route path='/login' element={<LoginComponent />}> </Route>
                <Route path='/welcome' element={<WelcomeComponent />}> </Route> 
                <Route path='*' element={<ErrorComponent />}> </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

function LoginComponent(){
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
        if(username==='user1' && password==="password1"){
            setSuccessMessage(true) 
            setFailedMessage(false)
            navigate('/welcome')
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

function WelcomeComponent(){
    return(
        <div className="Welcome">
            Welcome Component
        </div>
    )
}
function ErrorComponent(){
    return(
        <div className="ErrorComponent">
            <h1> We are working really hard. </h1>
            Appologies for the 404. Reach out to our team at dkajsdkfs@gkak.com
        </div>
    )
}