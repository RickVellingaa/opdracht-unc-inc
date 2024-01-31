import { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function Form() {
  const { loggedIn, handleLogin, handleLogout } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const success = handleLogin(username, password);
    if (success) {
      navigate("/dashboard");
    } else {
      alert(
        "De combinatie van gebruikersnaam en wachtwoord is niet correct. Probeer het opnieuw!"
      );
    }
  };

  const logoutBtn = () => {
    handleLogout();
  };

  return (
    <>
      {loggedIn ? (
        <div className="logout-form">
          {/* als gebruiker ingelogd is geef optie om weer voor uitloggen */}
          <p>Je bent momenteel al ingelogd. Wil je uitloggen?</p>
          <button onClick={logoutBtn}>Uitloggen</button>
        </div>
      ) : (
        <section className="login-form">
          <h2>Login bij UNC INC</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="gebruikersnaam">Gebruikersnaam</label>
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              id="gebruikersnaam"
              required
            />
            <label htmlFor="wachtwoord">Wachtwoord</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              id="wachtwoord"
              required
            />
            <input type="submit" value="Login" />
          </form>
        </section>
      )}
    </>
  );
}

export default Form;
