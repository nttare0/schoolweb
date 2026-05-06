import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="serif-heading text-xl font-bold mb-1">
              G.S. APAGIE/<span className="text-accent">MUSHA</span>
            </div>
            <p className="text-xs text-background/60 mb-3 uppercase tracking-widest">School Code: 0501030</p>
            <p className="text-sm text-background/80 leading-relaxed">
              A centre of excellence promoting quality education, science, technology, and positive values in Rwamagana District, Eastern Province, Rwanda.
            </p>
          </div>

          <div>
            <h3 className="serif-heading text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="hover:text-accent transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-accent transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/student-life" className="hover:text-accent transition-colors">
                  Student Life
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="serif-heading text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>Musha Sector, Rwamagana District<br />Eastern Province, Rwanda</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                <span>info@gsapagiemusha.rw</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="serif-heading text-lg font-semibold mb-4">Official Links</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="https://www.reb.gov.rw" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Rwanda Education Board (REB)
              </a>
              <a href="https://www.nesa.gov.rw" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                NESA — National Examinations
              </a>
              <a href="https://apagiemusha.wordpress.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                School Blog
              </a>
              <a href="https://www.facebook.com/apagiemusha/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                Facebook Page
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <div className="text-center text-sm text-background/60">
            <p>&copy; {new Date().getFullYear()} G.S. Apagie/Musha — Rwamagana, Eastern Province, Rwanda. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
