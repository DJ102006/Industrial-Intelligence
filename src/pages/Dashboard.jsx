import "./Dashboard.css";
import {
  FaBars,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaHome,
  FaFileAlt,
  FaRobot,
  FaProjectDiagram,
  FaChartLine,
  FaTools,
  FaShieldAlt,
  FaCog,
} from "react-icons/fa";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const menuItems = [
    {
      icon: <FaHome />,
      name: "Dashboard",
    },
    {
      icon: <FaFileAlt />,
      name: "Documents",
    },
    {
      icon: <FaRobot />,
      name: "AI Assistant",
    },
    {
      icon: <FaProjectDiagram />,
      name: "Knowledge Graph",
    },
    {
      icon: <FaChartLine />,
      name: "Analytics",
    },
    {
      icon: <FaTools />,
      name: "Maintenance",
    },
    {
      icon: <FaShieldAlt />,
      name: "Compliance",
    },
    {
      icon: <FaCog />,
      name: "Settings",
    },
  ];

  return (
    <div className="dashboard">
      {/* ================= Sidebar ================= */}

      <aside className="sidebar">
        <div className="logo">
          <FaRobot className="logo-icon" />

          <div>
            <h2>Industrial</h2>

            <span>Brain AI</span>
          </div>
        </div>

        <div className="menu">
          {menuItems.map((item, index) => (
            <div
              className={`menu-item ${index === 0 ? "active" : ""}`}
              key={index}
            >
              {item.icon}

              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </aside>

      {/* ================= Main Content ================= */}

      <main className="main-content">
        {/* Navbar */}

        <nav className="navbar">
          <div className="left-nav">
            <FaBars className="menu-toggle" />

            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                placeholder="Search documents, AI, equipment..."
              />
            </div>
          </div>

          <div className="right-nav">
            <div className="notification">
              <FaBell />

              <span className="badge">5</span>
            </div>

            <div className="profile">
              <FaUserCircle className="profile-icon" />

              <div>
                <h4>{user?.name || "Guest"}</h4>

                <span>Administrator</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Welcome Section */}

        <section className="welcome-section">
          <div>
            <h1>
              Good Afternoon,
              <span> {user?.name || "User"} 👋</span>
            </h1>

            <p>
              Welcome to Industrial Brain AI. Your industrial systems are
              performing normally. You currently have
              <strong> 5 Pending Alerts </strong>
              and
              <strong> 3 New Documents </strong>
              waiting for AI indexing.
            </p>
          </div>
        </section>

        {/* ================= Statistics Cards ================= */}

        <section className="stats-grid">
          <div className="stat-card">
            <div className="stat-top">
              <FaFileAlt className="stat-icon blue" />
              <span>+12%</span>
            </div>

            <h2>128</h2>

            <p>Documents Uploaded</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FaRobot className="stat-icon cyan" />
              <span>+18%</span>
            </div>

            <h2>54</h2>

            <p>AI Queries Today</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FaShieldAlt className="stat-icon green" />
              <span>94%</span>
            </div>

            <h2>Excellent</h2>

            <p>Compliance Score</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FaTools className="stat-icon orange" />
              <span>36</span>
            </div>

            <h2>Running</h2>

            <p>Equipment</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FaBell className="stat-icon red" />
              <span>5</span>
            </div>

            <h2>Pending</h2>

            <p>Alerts</p>
          </div>

          <div className="stat-card">
            <div className="stat-top">
              <FaProjectDiagram className="stat-icon purple" />
              <span>892</span>
            </div>

            <h2>Knowledge</h2>

            <p>Nodes</p>
          </div>
        </section>

        {/* ================= Bottom Section ================= */}

        <section className="bottom-grid">
          {/* Recent Activity */}

          <div className="activity-card">
            <h2>Recent Activity</h2>

            <div className="activity">
              <div className="activity-item">
                📄 Pump A Maintenance Manual uploaded.
              </div>

              <div className="activity-item">
                🤖 AI answered inspection query.
              </div>

              <div className="activity-item">
                🛡 Compliance report generated.
              </div>

              <div className="activity-item">⚙ Equipment Health updated.</div>

              <div className="activity-item">
                📊 Knowledge Graph synchronized.
              </div>
            </div>
          </div>

          {/* AI Assistant */}

          <div className="assistant-card">
            <div className="assistant-header">
              <FaRobot className="assistant-icon" />

              <h2>AI Assistant</h2>
            </div>

            <p>
              Hello <strong>{user?.name || "User"}</strong>, your industrial
              systems are operating normally.
            </p>

            <div className="assistant-status">
              <div>
                <h3>System Health</h3>

                <span>98%</span>
              </div>

              <div className="progress">
                <div className="progress-fill"></div>
              </div>
            </div>

            <button className="assistant-btn">Ask AI Assistant</button>
          </div>
        </section>

        {/* ================= Quick Actions ================= */}

        <section className="quick-actions">
          <h2>Quick Actions</h2>

          <div className="action-grid">
            <button className="action-btn">📂 Upload Document</button>

            <button className="action-btn">🤖 Ask AI</button>

            <button className="action-btn">🕸 View Knowledge Graph</button>

            <button className="action-btn">📊 Generate Report</button>
          </div>
        </section>

        {/* ================= Footer ================= */}

        <footer className="footer">© 2026 Industrial Brain AI</footer>
      </main>
    </div>
  );
};

export default Dashboard;
