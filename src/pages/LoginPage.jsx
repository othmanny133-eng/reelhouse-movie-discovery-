import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LockKeyhole, Mail, Clapperboard } from 'lucide-react';

export default function LoginPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event) => { event.preventDefault(); setSubmitted(true); };
  return (
    <section className="auth-section"><div className="layout-wrap auth-layout">
      <div className="auth-story"><span className="eyebrow"><span className="eyebrow-line"/> EVERY STORY HAS A BEGINNING</span><h1>Welcome<br/><em>back.</em></h1><p>A place to discover something different every time you visit.</p><div className="auth-art"><img src="/posters/parallel-lines.jpg" alt="Original illustrated film scene"/></div></div>
      <div className="auth-card"><div className="auth-card-icon"><Clapperboard size={23}/></div><span className="section-kicker">THE REELHOUSE COMMUNITY</span><h2>Sign in to your account</h2><p className="auth-subtitle">Ready for another movie night?</p><form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group"><label htmlFor="login-email">Email address</label><div className="form-input"><Mail size={18}/><input id="login-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required /></div></div>
        <div className="form-group"><label htmlFor="login-password">Password</label><div className="form-input"><LockKeyhole size={18}/><input id="login-password" name="password" type="password" placeholder="Enter your password" autoComplete="current-password" minLength="6" required /></div></div>
        <button className="button button-gold auth-submit" type="submit">Sign in <ArrowRight size={18}/></button>
        {submitted && <p className="form-message" role="status">This page is a front-end prototype. Sign-in will become available when authentication is added in Milestone 2.</p>}
        <p className="demo-hint">Demo only · No credentials are stored or sent.</p>
      </form><p className="auth-switch">New to REELHOUSE? <Link to="/register">Create an account</Link></p></div>
    </div></section>
  );
}
