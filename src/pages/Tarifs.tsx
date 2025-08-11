import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Tarifs = () => {
  return (
    <div className="container py-12">
      <SEO title="Tarifs | Hashtag Avocat" description="Découvrez nos tarifs transparents et adaptés aux besoins des startups et entreprises du numérique." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Tarifs</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Des offres claires et adaptées à votre stade de développement. Contactez-nous pour un devis personnalisé selon votre projet.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-2">Consultation</h2>
          <p className="text-sm text-muted-foreground mb-4">Point stratégique, analyse de risque, plan d'action.</p>
          <p className="font-medium mb-4">à partir de 180€ HT</p>
          <Button asChild variant="cta"><Link to="/contact">Prendre rendez-vous</Link></Button>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-2">Pack RGPD</h2>
          <p className="text-sm text-muted-foreground mb-4">Audit, registre, DPA, mentions légales et process.</p>
          <p className="font-medium mb-4">sur devis</p>
          <Button asChild variant="cta"><Link to="/contact">Obtenir un devis</Link></Button>
        </div>
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-2">Levée de fonds</h2>
          <p className="text-sm text-muted-foreground mb-4">Term sheet, pacte, data room, négociation & closing.</p>
          <p className="font-medium mb-4">sur devis</p>
          <Button asChild variant="cta"><Link to="/contact">Parler à un avocat</Link></Button>
        </div>
      </div>
    </div>
  );
};

export default Tarifs;
