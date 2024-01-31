function Form() {
  return (
    <section className="login-form">
      <h2>Login bij UNC INC</h2>
      <form action="">
        <label htmlFor="gebruikersnaam">Gebruikersnaam</label>
        <input type="text" id="gebruikersnaam" required />
        <label htmlFor="wachtwoord">Wachtwoord</label>
        <input type="password" id="wachtwoord" required />
        <input type="submit" value="Login" />
      </form>
    </section>
  );
}

export default Form;
