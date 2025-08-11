import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DroitSocialTravailParis = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit social & travail à Paris | Hashtag Avocat" description="Conseil et contentieux en droit social: contrats de travail, relations collectives, licenciements et CSE." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit social & droit du travail à Paris</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Sécurisez vos relations de travail: embauches, politiques internes, négociations collectives et ruptures.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Contrats, clauses sensibles et politique RH</li>
        <li>Relations collectives, CSE et accords</li>
        <li>Gestion des litiges et départs</li>
        <li>Accompagnement dirigeants et cadres</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Parler à un avocat</Link></Button>
    </div>
  );
};

export default DroitSocialTravailParis;
