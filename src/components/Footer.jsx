import { Link } from 'react-router-dom';
import { Film, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="layout-wrap footer-inner">
        <div>
          <Link className="brand footer-brand" to="/"><span className="brand-mark"><Film size={19}/></span><span>REEL<span className="brand-light">HOUSE</span><span className="brand-dot">.</span></span></Link>
          <p className="footer-note">For the stories that stay with us.</p>
        </div>
        <div className="footer-right">
          <div className="footer-links"><Link to="/">Discover</Link><Link to="/about">About</Link><Link to="/register">Create account <ArrowUpRight size={13}/></Link></div>
          <p className="footer-caption">WAPE semester project · React prototype</p>
        </div>
      </div>
      <div className="layout-wrap copyright"><span>© {new Date().getFullYear()} REELHOUSE. A student film discovery project.</span><span>Made for people who love a good story.</span></div>
    </footer>
  );
}
