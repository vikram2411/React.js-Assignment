import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const initialValues = {username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container flex-row">
       <div className="flex-1 flex-row"  ><img src={require('./assets/image2.png')}/></div>
      
       <div className="flex-1 flex-row">
      <form className="gap"onSubmit={handleSubmit}>
        <h1>Create an account</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Your email address</label> <br></br>
            <input
              type="email"
              name="username"
          
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label>Your password</label> <br></br>
            <input
              type="password"
              name="password"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="field">
            <label>Confirm your password</label><br></br>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Your full name</label><br></br>
            <input
              type="text"
              name="text"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Your phone number</label><br></br>
            <input
              type="number"
              name="number"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          
          <div class="tacbox">
  <input id="checkbox" type="checkbox" />
  <label for="checkbox">&nbsp; I agree to these Terms and Conditions.</label>
</div> <br></br>

          
          
          
         <button class="btn btn-primary" type="submit" >Create account</button>
        
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;