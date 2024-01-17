import React, { useState } from "react";
import "./LoginModal.scss";

function LoginModal() {
  const [isLoginFormVisible, setLoginFormVisible] = useState(true);

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className={`title ${isLoginFormVisible ? "login" : "signup"}`}>
          {isLoginFormVisible ? "Se connecter" : "S'inscrire"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLoginFormVisible}
            onChange={() => setLoginFormVisible(true)}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLoginFormVisible}
            onChange={() => setLoginFormVisible(false)}
          />
          <label htmlFor="login" className="slide login">
            Connexion
          </label>
          <label htmlFor="signup" className="slide signup">
            Inscription
          </label>
          <div className="slider-tab" />
        </div>
        <div className="form-inner">
          {isLoginFormVisible ? (
            <form action="#" className="login">
              <div className="field">
                <input type="text" placeholder="Adresse Email" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Mot de passe" required />
              </div>
              <div className="pass-link">
                <a href="/forgot-password">Mot de passe oublié ?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer" />
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Pas encore membre ? <a href="/signup">S'inscrire</a>
              </div>
            </form>
          ) : (
            <form action="#" className="signup">
              <div className="field">
                <input type="text" placeholder="Adresse Email" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Mot de passe" required />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirmer mot de passe"
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer" />
                <input type="submit" value="Signup" className="submit btn" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
