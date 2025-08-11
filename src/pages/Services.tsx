import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Droit du numérique",
    desc: "Conformité services numériques, plateformes, e-commerce, responsabilité des contenus, KYC/AML et cybersécurité.",
  },
  {
    title: "Levée de fonds",
    desc: "Term sheet, pactes d'associés, data room, due diligence, structuration, négociation et sécurisation du closing.",
  },
  {
    title: "Contrats",
    desc: "CGV/CGU, contrats SaaS, prestations, partenariats, licences, distribution, avec une vision produit et business.",
  },
  {
    title: "Propriété intellectuelle",
    desc: "Marques, droits d'auteur, logiciels, cession/licence IP, stratégies de protection et valorisation des actifs.",
  },
  {
    title: "Data privacy & RGPD",
    desc: "Privacy by design, DPA, registre, audits, DPO externalisé, transferts, sécurité et relations sous-traitants.",
  },
];

const Services = () => {
  return (
    <div className="py-12">
      <SEO title="Services | Hashtag Avocat" description="Nos services en droit du numérique, levée de fonds, contrats, propriété intellectuelle et RGPD." />
      <div className="container">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-8">Services</h1>
        <div className="space-y-8">
          {sections.map((s) => (
            <section key={s.title} className="bg-muted/40 rounded-lg p-6 md:p-10">
              <div className="grid md:grid-cols-3 gap-6 items-center">
                <h2 className="text-xl font-semibold text-primary md:col-span-1">{s.title}</h2>
                <p className="text-muted-foreground md:col-span-2 leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-4">
                <Button variant="cta" size="wide">Demander un devis</Button>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
