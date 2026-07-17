import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">

      {/* Left Section */}

      <div className="left-panel">

        <div className="logo-circle">
          <FaRobot />
        </div>

        <h1>Industrial Brain AI</h1>

        <p>
          AI Powered Industrial Knowledge Intelligence Platform
        </p>

        <div className="features">

          <div className="feature-card">
            📄 Intelligent Document Search
          </div>

          <div className="feature-card">
            🤖 AI Knowledge Assistant
          </div>

          <div className="feature-card">
            ⚙ Maintenance Intelligence
          </div>

          <div className="feature-card">
            🛡 Compliance Monitoring
          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="right-panel">

        <div className="glass-card">

          <h2>
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>

          <p>
            {isLogin
              ? "Login to continue"
              : "Register to start using Industrial Brain"}
          </p>

          {!isLogin && (
            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="input-box">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input-box">

            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </span>

          </div>

          {!isLogin && (
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm Password"
              />
            </div>
          )}

          {isLogin && (
            <div className="remember">

              <label>

                <input type="checkbox" />

                Remember Me

              </label>

              <a href="/">Forgot Password?</a>

            </div>
          )}

          <button className="login-btn">

            {isLogin ? "Login" : "Create Account"}

          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <button className="google-btn">

            Continue with Google

          </button>

          <div className="switch">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <span onClick={toggleMode}>
              {isLogin ? " Register" : " Login"}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default LoginPage;