import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DroitDesContrats = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit des contrats | Hashtag Avocat" description="Rédaction et négociation de contrats commerciaux, SaaS, partenariats, distribution et CGV/CGU." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit des contrats</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Des contrats clairs et protecteurs pour accélérer votre business tout en réduisant vos risques juridiques.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>CGV/CGU, contrats SaaS et prestations</li>
        <li>Partenariats, distribution et intégration</li>
        <li>Clauses sensibles: responsabilité, SLA, IP</li>
        <li>Négociation orientée produit et business</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Demander un devis</Link></Button>
    </div>
  );
};

export default DroitDesContrats;
