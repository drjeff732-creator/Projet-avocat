import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const DroitDesSocietes = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit des sociétés | Hashtag Avocat" description="Création, pactes, gouvernance, opérations sur capital et secrétariat juridique pour startup et PME." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit des sociétés</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Nous accompagnons la vie de votre société: création, pactes, levées, management packages, transformation et cessions.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Création de société et statuts</li>
        <li>Pactes d'associés et gouvernance</li>
        <li>Management packages (BSPCE, AGA)</li>
        <li>Opérations sur capital, fusions, cessions</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Parler à un avocat</Link></Button>
    </div>
  );
};

export default DroitDesSocietes;
