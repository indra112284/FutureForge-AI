import { useState } from "react";

function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  const skillsList = [
    "Python","Java","React","ML","SQL","Cloud"
  ];

  const toggleSkill = (skill) => {
    if (skills.includes(skill)) {
      setSkills(skills.filter((s) => s !== skill));
    } else {
      setSkills([...skills, skill]);
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleRegister = () => {
    setError("");

    if (!name || !email || !password) {
      return setError("All fields are required.");
    }

    if (!validateEmail(email)) {
      return setError("Invalid email format.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters.");
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find((u) => u.email === email)) {
      return setError("Email already registered.");
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      password,
      skills,
      scores: []
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location.href = "/";
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Create Account</h1>

        {error && <p style={{color:"red"}}>{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <h4>Select Skills</h4>
        <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
          {skillsList.map((skill) => (
            <div
              key={skill}
              style={{
                padding:"6px 10px",
                border:"1px solid #3f5efb",
                borderRadius:"6px",
                cursor:"pointer",
                background: skills.includes(skill) ? "#3f5efb" : "white",
                color: skills.includes(skill) ? "white" : "black"
              }}
              onClick={() => toggleSkill(skill)}
            >
              {skill}
            </div>
          ))}
        </div>

        <button className="primary-btn" onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default CreateAccount;
