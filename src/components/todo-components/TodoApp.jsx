import './TodoApp.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ErrorComponent from './ErrorComponent';
import LoginComponent from './LoginComponent'; 
import LogoutComponent from './LogoutComponent';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import ListTodosComponent from './ListTodosComponent';
import WelcomeComponent from './WelcomeComponent';


export default function TodoApp(){
    return (
        <div className="TodoApp"> 
           <AuthProvider>
                <BrowserRouter>
                <HeaderComponent />
                <Routes>
                    <Route path='/' element={<LoginComponent />} />
                    <Route path='/login' element={<LoginComponent />} /> 
                    <Route path='/welcome/:username' element={<WelcomeComponent />} /> 
                    <Route path='/todos' element={<ListTodosComponent />} />
                    <Route path='/logout' element={<LogoutComponent />} />
                    <Route path='*' element={<ErrorComponent />} />
                </Routes>
                <FooterComponent />
            </BrowserRouter>
        </AuthProvider>
        </div>
    )
}

