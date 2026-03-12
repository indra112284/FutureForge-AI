import { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const skillsList = [
    "Python","Java","React","ML","SQL","Cloud"
  ];

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      window.location.href = "/";
    } else {
      setUser(currentUser);
    }
  }, []);

  if (!user) return null;

  const toggleSkill = (skill) => {
    if (user.skills.includes(skill)) {
      setUser({
        ...user,
        skills: user.skills.filter((s) => s !== skill),
      });
    } else {
      setUser({
        ...user,
        skills: [...user.skills, skill],
      });
    }
  };

  const handleSave = () => {
    let users = JSON.parse(localStorage.getItem("users"));

    const updatedUsers = users.map((u) =>
      u.id === user.id ? user : u
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(user));

    setEditMode(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">FutureForge AI</div>
        <button
          className="logout-btn"
          onClick={() => {
            localStorage.removeItem("currentUser");
            window.location.href = "/";
          }}
        >
          Logout
        </button>
      </div>

      <div className="dashboard-container">
        <h1>Profile</h1>

        <div className="section">
          <label>Name</label>
          <input
            type="text"
            value={user.name}
            disabled={!editMode}
            onChange={(e) =>
              setUser({ ...user, name: e.target.value })
            }
          />

          <label>Email</label>
          <input type="text" value={user.email} disabled />

          <h4>Select Skills</h4>

          <div className="skill-grid">
            {skillsList.map((skill) => (
              <div
                key={skill}
                className="skill-chip"
                style={{
                  background: user.skills.includes(skill)
                    ? "#3f5efb"
                    : "#ddd",
                  cursor: editMode ? "pointer" : "default",
                }}
                onClick={() => editMode && toggleSkill(skill)}
              >
                {skill}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "20px" }}>
            {!editMode ? (
              <button
                className="primary-btn"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            ) : (
              <button
                className="primary-btn"
                onClick={handleSave}
              >
                Save Changes
              </button>
            )}
          </div>

          <div style={{ marginTop: "10px" }}>
            <button
              className="primary-btn"
              onClick={() =>
                (window.location.href = "/dashboard")
              }
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
