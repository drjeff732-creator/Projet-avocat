import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProprieteIntellectuelle = () => {
  return (
    <div className="container py-12">
      <SEO title="Propriété intellectuelle | Hashtag Avocat" description="Protection des logiciels, marques, droits d'auteur et stratégie de valorisation pour les entreprises innovantes." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit de la propriété intellectuelle</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Sécurisez vos actifs: logiciels, bases de données, marques, créations et savoir-faire. Contrats, cessions et licences.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Dépôt et protection des marques et œuvres</li>
        <li>Contrats de licence, cession et copropriété</li>
        <li>Contentieux et défense de vos droits</li>
        <li>Stratégie de valorisation IP</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Parler à un avocat</Link></Button>
    </div>
  );
};

export default ProprieteIntellectuelle;
