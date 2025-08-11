import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LeveeDeFonds = () => {
  return (
    <div className="container py-12">
      <SEO title="Levée de fonds | Hashtag Avocat" description="Accompagnement complet pour vos levées de fonds: term sheet, pacte d'associés, data room, due diligence et closing sécurisé." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Levée de fonds</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        De la préparation à la signature, nous sécurisons chaque étape: structuration, term sheet, audit, négociation et closing. Protection des fondateurs et gouvernance équilibrée.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Structuration capitalistique et gouvernance</li>
        <li>Data room et due diligence investisseurs</li>
        <li>Term sheet, pacte d'associés, BSA/OC</li>
        <li>Négociation et sécurisation du closing</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Prendre rendez-vous</Link></Button>
    </div>
  );
};

export default LeveeDeFonds;
