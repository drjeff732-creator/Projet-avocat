import { Link } from "react-router-dom";
import { Linkedin, Twitter, Mail, Phone, MapPin, CalendarDays } from "lucide-react";

const services = [
  { to: "/services/levee-de-fonds", label: "Levée de fonds" },
  { to: "/services/droit-des-societes", label: "Droit des sociétés" },
  { to: "/services/nouvelles-technologies", label: "Droit des nouvelles technologies" },
  { to: "/services/propriete-intellectuelle", label: "Droit de la propriété intellectuelle" },
  { to: "/services/droit-des-contrats", label: "Droit des contrats" },
  { to: "/services/droit-fiscal", label: "Droit fiscal" },
  { to: "/services/rgpd", label: "Droit du RGPD" },
  { to: "/services/droit-social-travail", label: "Droit social & travail" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground mt-16">
      <div className="container grid gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold mb-3">Hashtag Avocat</h3>
          <ul className="text-sm text-footer-foreground/80 space-y-2">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href="tel:+33185735666">01 85 73 56 66</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:contact@hashtagavocat.com" className="underline underline-offset-4">contact@hashtagavocat.com</a></li>
            <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> <Link to="/contact" className="underline underline-offset-4">Rendez-vous</Link></li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 51 Av. Franklin D. Roosevelt, 75008 Paris</li>
          </ul>
          <div className="mt-4 flex items-center gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:opacity-90"><Linkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:opacity-90"><Twitter /></a>
            <a href="mailto:contact@hashtagavocat.com" aria-label="Email" className="hover:opacity-90"><Mail /></a>
          </div>
        </div>

        <div>
          <h4 className="font-medium mb-3">Horaires d'ouverture</h4>
          <ul className="text-sm space-y-1 text-footer-foreground/80">
            <li>lundi : 8h–20h</li>
            <li>mardi : 8h–20h</li>
            <li>mercredi : 8h–20h</li>
            <li>jeudi : 8h–20h</li>
            <li>vendredi : 8h–20h</li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.to}><Link to={s.to} className="hover:underline">{s.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-3">Liens utiles</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/tarifs" className="hover:underline">Tarifs</Link></li>
            <li><Link to="/a-propos" className="hover:underline">Qui sommes-nous?</Link></li>
            <li><Link to="/actualites" className="hover:underline">Blog</Link></li>
            <li><Link to="/mentions-legales" className="hover:underline">Mentions légales & CGU</Link></li>
          </ul>
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
