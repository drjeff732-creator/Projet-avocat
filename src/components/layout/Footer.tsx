import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground mt-16">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold mb-3">Hashtag Avocat</h3>
          <p className="text-sm text-footer-foreground/80">
            Cabinet d'avocats dédié au numérique et aux startups.
          </p>
          <div className="mt-4 text-sm space-y-1">
            <p>Paris, France</p>
            <p>
              <a href="mailto:contact@hashtagavocat.com" className="underline underline-offset-4">
                contact@hashtagavocat.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Liens rapides</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/a-propos" className="hover:underline">À propos</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/equipe" className="hover:underline">Équipe</Link></li>
            <li><Link to="/actualites" className="hover:underline">Actualités</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/mentions-legales" className="hover:underline">Mentions légales & CGU</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Suivez-nous</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-90">
              <Linkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:opacity-90">
              <Twitter />
            </a>
            <a href="mailto:contact@hashtagavocat.com" aria-label="Email" className="hover:opacity-90">
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-4 text-xs text-footer-foreground/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Hashtag Avocat. Tous droits réservés.</p>
          <p>Site par Hashtag Avocat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
