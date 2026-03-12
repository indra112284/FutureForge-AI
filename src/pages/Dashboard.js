import { useEffect, useState } from "react";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!storedUser) {
      window.location.href = "/";
    } else {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    window.location.href = "/";
  };

  if (!user) return null;

  return (
    <>
      {/* NAVBAR */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 40px",
        background: "#ffffff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
      }}>
        <h2>FutureForge AI</h2>

        <button
          onClick={handleLogout}
          style={{
            padding: "8px 18px",
            background: "#ff4d4d",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      {/* CONTENT */}
      <div style={{ width: "65%", margin: "40px auto" }}>
        <h1>Welcome, {user.name} 👋</h1>

        {/* Skills */}
        <div style={{ marginTop: "30px" }}>
          <h3>Your Skills</h3>
          {user.skills.map((skill, i) => (
            <div key={i} style={{
              display: "inline-block",
              padding: "6px 14px",
              marginRight: "10px",
              marginTop: "10px",
              background: "#e0e7ff",
              borderRadius: "20px"
            }}>
              {skill}
            </div>
          ))}
        </div>

        {/* History */}
        <div style={{ marginTop: "40px" }}>
          <h3>Your Assessment History</h3>

          {user.scores && user.scores.length === 0 ? (
            <p>No attempts yet.</p>
          ) : (
            user.scores.map((attempt, i) => (
              <div key={i} style={{ marginBottom: "8px" }}>
                Score: {attempt.score}/{attempt.total} | Date: {attempt.date}
              </div>
            ))
          )}
        </div>

        {/* Start Quiz */}
        <div style={{ marginTop: "40px" }}>
          <button
            className="primary-btn"
            onClick={() => (window.location.href = "/quiz")}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
