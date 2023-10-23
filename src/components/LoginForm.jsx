import { useState } from "react";
import axios from "axios";

const projectID="10a64f5c-8007-49e6-9d5e-fe70f2451532"


const LoginForm =()=>{


const [username , setUserName]=useState('');
const [password , setPassword]= useState('');
const[error , setError]=useState('')


const handleSubmit = async (e)=>{
    e.preventDefault();
    const authObject = { 'Project-ID':projectID , 'User-Name':username , 'User-Secret':password};


    try{
        await axios.get('https://api.chatengine.io/chats' ,{headers:authObject});
        localStorage.setItem("user",JSON.stringify({
            username,password,isLogged : true
        }))

        window.location.reload();
        setError('');

    }
    catch(err){
        setError('oops , incorrect credentials');
    }
};

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> chat app</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input-style" type="text" value={username} 
                        onChange={(e)=>setUserName(e.target.value)}
                         placeholder="username" required />
                         <input className="input-style" type="password" value={password} 
                        onChange={(e)=>setPassword(e.target.value)}
                         placeholder="password" required />
                         <div align="center">
                             <button type="submit"className="button">
                                <span>start chatting</span>
                             </button>
                         </div>
                </form>
                  <h1>{error}</h1>
            </div>
        </div>
    )
}
export default LoginForm;