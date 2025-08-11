import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProprieteIntellectuellePage = () => {
  return (
    <div className="container py-12">
      <SEO title="Propriété intellectuelle | Hashtag Avocat" description="Protection des marques, logiciels et créations. Contrats de licences, cession et défense de vos droits." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Propriété intellectuelle</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Nous aidons les entreprises à protéger et valoriser leurs actifs immatériels avec une approche pragmatique et business.
      </p>
      <Button asChild variant="cta"><Link to="/contact">Prendre rendez-vous</Link></Button>
    </div>
  );
};

export default ProprieteIntellectuellePage;
