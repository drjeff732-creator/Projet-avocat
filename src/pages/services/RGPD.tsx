import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const RGPD = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit du RGPD | Hashtag Avocat" description="Conformité RGPD: audits, registre, DPA, transferts, sécurité, DPO externalisé et relation sous-traitants." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit du RGPD</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Construisez une conformité utile à votre produit: privacy by design, documentation, sécurité et gouvernance data.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Audit et registre des traitements</li>
        <li>Contrats DPA, transferts et sécurité</li>
        <li>Gestion des droits, violations et CNIL</li>
        <li>DPO externalisé</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Obtenir un devis</Link></Button>
    </div>
  );
};

export default RGPD;
