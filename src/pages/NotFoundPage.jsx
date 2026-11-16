import { Link } from 'react-router-dom';
import { ArrowRight, Clapperboard } from 'lucide-react';

export default function NotFoundPage() {
  return <section className="detail-missing layout-wrap"><Clapperboard size={44}/><span className="section-kicker">404 · NOT FOUND</span><h1>Wrong scene.</h1><p>This page isn't in our story. Let's get you back to the films.</p><Link to="/" className="button button-gold">Back to discovery <ArrowRight size={18}/></Link></section>;
}
