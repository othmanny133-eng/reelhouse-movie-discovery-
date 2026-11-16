import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Film, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner layout-wrap">
        <Link className="brand" to="/" onClick={closeMenu} aria-label="Reelhouse home">
          <span className="brand-mark"><Film size={21} strokeWidth={2.4} /></span>
          <span>REEL<span className="brand-light">HOUSE</span><span className="brand-dot">.</span></span>
        </Link>
        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`} aria-label="Main navigation">
          <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Discover</NavLink>
          <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our story</NavLink>
          <NavLink to="/login" onClick={closeMenu} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sign in</NavLink>
          <Link className="nav-join" to="/register" onClick={closeMenu}>Join us <ArrowUpRight size={16}/></Link>
        </nav>
        <button className="mobile-menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {menuOpen && <button className="nav-scrim" aria-label="Close menu" onClick={closeMenu} />}
    </header>
  );
}
