import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LockKeyhole, Mail, UserRound, Clapperboard } from 'lucide-react';

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const matches = data.get('password') === data.get('confirmPassword');
    setPasswordsMatch(matches);
    setSubmitted(matches);
  };
  return (
    <section className="auth-section"><div className="layout-wrap auth-layout">
      <div className="auth-story"><span className="eyebrow"><span className="eyebrow-line"/> DISCOVER YOUR NEXT FAVOURITE</span><h1>Love films?<br/><em>You're in.</em></h1><p>The best conversations start with a film someone can't stop talking about.</p><div className="auth-art"><img src="/posters/after-the-rain.svg" alt="Original illustrated film scene"/></div></div>
      <div className="auth-card"><div className="auth-card-icon"><Clapperboard size={23}/></div><span className="section-kicker">JOIN THE COLLECTION</span><h2>Create an account</h2><p className="auth-subtitle">Your next great story begins here.</p><form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group"><label htmlFor="register-name">Full name</label><div className="form-input"><UserRound size={18}/><input id="register-name" name="name" type="text" placeholder="Your full name" autoComplete="name" minLength="2" required /></div></div>
        <div className="form-group"><label htmlFor="register-email">Email address</label><div className="form-input"><Mail size={18}/><input id="register-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></div></div>
        <div className="form-group"><label htmlFor="register-password">Password</label><div className="form-input"><LockKeyhole size={18}/><input id="register-password" name="password" type="password" placeholder="At least 6 characters" autoComplete="new-password" minLength="6" required /></div></div>
        <div className="form-group"><label htmlFor="register-confirm">Confirm password</label><div className="form-input"><LockKeyhole size={18}/><input id="register-confirm" name="confirmPassword" type="password" placeholder="Repeat your password" autoComplete="new-password" minLength="6" required /></div></div>
        <button className="button button-gold auth-submit" type="submit">Create account <ArrowRight size={18}/></button>
        {!passwordsMatch && <p className="form-message error" role="alert">Passwords do not match. Please check and try again.</p>}
        {submitted && <p className="form-message" role="status">This page is a front-end prototype. Account creation will become available in Milestone 2.</p>}
        <p className="demo-hint">Demo only · No account is created and nothing is submitted.</p>
      </form><p className="auth-switch">Already have an account? <Link to="/login">Sign in</Link></p></div>
    </div></section>
  );
}
