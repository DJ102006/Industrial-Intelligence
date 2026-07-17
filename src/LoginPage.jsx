import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaUser,
  FaEye,
  FaEyeSlash,
  FaRobot,
} from "react-icons/fa";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleRegister = () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");

      return;
    }

    const user = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

    setIsLogin(true);

    setName("");

    setEmail("");

    setPassword("");
  };

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please Register First");

      return;
    }

    if (user.email === email && user.password === password) {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      {/* Left Section */}
      <div className="left-panel">
        <div className="logo-circle">
          <FaRobot />
        </div>

        <h1>Industrial Brain AI</h1>

        <p>AI Powered Industrial Knowledge Intelligence Platform</p>

        <div className="features">
          <div className="feature-card">📄 Intelligent Document Search</div>

          <div className="feature-card">🤖 AI Knowledge Assistant</div>

          <div className="feature-card">⚙ Maintenance Intelligence</div>

          <div className="feature-card">🛡 Compliance Monitoring</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-panel">
        <div className="glass-card">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          <p>
            {isLogin
              ? "Login to continue"
              : "Register to start using Industrial Brain"}
          </p>

          {/* Name */}
          {!isLogin && (
            <div className="input-box">
              <FaUser className="icon" />

              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}

          {/* Email */}
          <div className="input-box">
            <FaEnvelope className="icon" />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-box">
            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div className="input-box">
              <FaLock className="icon" />

              <input type="password" placeholder="Confirm Password" />
            </div>
          )}

          {/* Remember Me */}
          {isLogin && (
            <div className="remember">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#" onClick={(e) => e.preventDefault()}>
                Forgot Password?
              </a>
            </div>
          )}

          {/* Login/Register Button */}
          <button
            className="login-btn"
            onClick={isLogin ? handleLogin : handleRegister}
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">Continue with Google</button>

          <div className="switch">
            {isLogin ? "Don't have an account?" : "Already have an account?"}

            <span onClick={toggleMode}>{isLogin ? " Register" : " Login"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
