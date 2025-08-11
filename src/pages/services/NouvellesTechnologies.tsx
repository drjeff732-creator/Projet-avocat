import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NouvellesTechnologies = () => {
  return (
    <div className="container py-12">
      <SEO title="Droit des nouvelles technologies | Hashtag Avocat" description="Contrats IT, plateformes, IA, blockchain, cybersécurité: conformité et gestion des risques." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Droit des nouvelles technologies</h1>
      <p className="text-muted-foreground max-w-3xl mb-6">
        Nous maîtrisons les enjeux tech: IA, blockchain, plateformes, API et sécurité. Contrats, conformité et responsabilité.
      </p>
      <ul className="list-disc pl-6 space-y-2 text-sm text-muted-foreground mb-6">
        <li>Contrats IT, SaaS, licences et partenariats</li>
        <li>Conformité plateformes, e-commerce et contenus</li>
        <li>Cybersécurité, incident response, obligations</li>
        <li>Web3, tokenomics, NFT: cadre légal</li>
      </ul>
      <Button asChild variant="cta"><Link to="/contact">Obtenir un devis</Link></Button>
    </div>
  );
};

export default NouvellesTechnologies;
