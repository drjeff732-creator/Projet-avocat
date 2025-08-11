import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DroitFiscal = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit fiscal | Hashtag Avocat" description="Conseil fiscal pour startups et dirigeants: structuration, management packages, opérations et contrôles." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit fiscal</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Anticipez vos enjeux fiscaux: structuration, levées, BSPCE, stock-options et opérations exceptionnelles.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Structuration et optimisation des opérations</li>
        <li>Management packages: fiscalité des BSPCE</li>
        <li>Fiscalité internationale et TVA</li>
        <li>Assistance en contrôle et contentieux</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Parler à un avocat</Link></Button>
    </div>
  );
};

export default DroitFiscal;
