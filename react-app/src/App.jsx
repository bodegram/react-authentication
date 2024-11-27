import { useState, Fragment, useContext } from "react";
import "./App.css";
import {AuthContext} from './context/AuthContext'



function App() {
  const [email, setEmail] = useState(""); // State to store the username input from the user
  const [password, setPassword] = useState("");  // State to store the password input from the user
  // State to store error message if authentication fails
  const [error, setError] = useState("");
  const {login} = useContext(AuthContext) //call login from auth context
 
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      // If authentication is successful, user is logged in
      login()
      setError(""); // Clear the error message if login is successful
    } else {
      // If authentication fails, display an error message
      setError("Invalid email address or password");
    }
  };

  return (
    <Fragment>
      <div className="container">
         {/* Display error message if authentication fails */}
      {error && <p className="message-box">{error}</p>}
        <div>
          <div className="header-text">Login into your account</div>
          <div className="card">
             {/* The login form */}
            <form action="" method="post" onSubmit={handleSubmit}>
              {/* Input field for email address */}
              <div className="field">
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  name=""
                  className="form-control"
                  id=""
                  required
                />
              </div>
               {/* Input field for password */}
              <div className="field">
                <label htmlFor="">Password</label>
                <br />
                <input
                  type="password"
                  name=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id=""
                  required
                />
              </div>
              {/* Submit button to log in */}
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
