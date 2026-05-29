
import { useState } from "react";
function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username:"",password:""
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let newErrors = {
            username:"", 
            password:""
    };

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Login Successful");

      console.log("Form Data:", formData);

      // API call can be added here
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        {/* Username */}
        <div style={styles.inputGroup}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter username"
          />
          {errors.username && (
            <p style={styles.error}>{errors.username}</p>
          )}
        </div>

        {/* Password */}
        <div style={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            placeholder="Enter password"
          />
          {errors.password && (
            <p style={styles.error}>{errors.password}</p>
          )}
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f4",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default LoginForm;