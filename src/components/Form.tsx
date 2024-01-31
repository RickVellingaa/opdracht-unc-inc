import { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {};

  return (
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
  );
}

export default Form;
