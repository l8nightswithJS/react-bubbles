import React, { useState } from "react";
import axios from 'axios'
const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
       console.log(res);
       localStorage.setItem('token', res.data.payload);
       props.history.push('/protected')
      })
      .catch(err => {console.log(err)})
      
};

  const handleChange = e => {
    setCredentials({
      ...credentials,
            [e.target.name]: e.target.value
    })
  }




  return (
    <>
      <div>
        <form onSubmit={handleSubmit}> 
              <label>username</label>
              <input  
                type="text" 
                name="username" 
                value={credentials.username} 
                onChange={handleChange}
              />    
              <label>password</label>
              <input  
                type="password" 
                name="password" 
                value={credentials.password} 
                onChange={handleChange}
              />
              
            <button type="submit">Add</button>
          </form>
      </div>
    </>
  );
};

export default Login;
