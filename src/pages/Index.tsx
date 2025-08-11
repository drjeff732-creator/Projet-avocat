import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-hashtag-avocat.jpg";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Lock, Scale, FileSignature, Database } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

const features = [
  { icon: ShieldCheck, title: "Expertise", text: "Droit du numérique et des startups, maîtrise technique et réglementaire." },
  { icon: Zap, title: "Réactivité", text: "Des conseils rapides et pragmatiques, adaptés à votre rythme." },
  { icon: Lock, title: "Confidentialité", text: "Sécurité et confidentialité garanties à chaque étape." },
];

const services = [
  { icon: FileSignature, title: "Conseil juridique pour startups", text: "Structuration, pactes d'associés, contrats commerciaux, conditions générales et conformité." },
  { icon: Scale, title: "Accompagnement levée de fonds", text: "Préparation, due diligence, term sheet, négociation et closing en sécurité." },
  { icon: Database, title: "Propriété intellectuelle & RGPD", text: "Protection des actifs, marques, licences, privacy by design et conformité data." },
];

const Index = () => {
  return (
    <div>
      <SEO title="Hashtag Avocat | Avocats du numérique & startups" description="Cabinet d'avocats dédié au numérique et aux startups. Conseil, levées de fonds, contrats, RGPD & propriété intellectuelle." />

      {/* Hero with signature gradient aura */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40" style={{ backgroundImage: "var(--gradient-primary)" }} />
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold font-display text-primary">
              Cabinet d'avocats dédié au numérique et startup
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Une équipe experte à votre service
            </p>
            <div className="mt-6 flex gap-3">
              <Button asChild variant="cta" size="wide"><Link to="/contact">Prendre rendez-vous</Link></Button>
              <Button asChild variant="outline"><Link to="/services">Découvrir nos services</Link></Button>
            </div>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Cabinet d'avocats moderne spécialisé en numérique" className="rounded-lg border shadow" loading="eager" />
          </div>
        </div>
      </section>

      {/* Quick features */}
      <section className="container py-12 grid md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="flex gap-4 items-start">
            <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
              <f.icon />
            </div>
            <div>
              <h3 className="font-semibold text-primary">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Services cards */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-display text-primary">Nos services clés</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="p-6 hover:shadow-lg transition-shadow">
                <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center mb-3">
                  <s.icon />
                </div>
                <h3 className="font-medium mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.text}</p>
                <Button asChild variant="link"><Link to="/services">En savoir plus</Link></Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />
    </div>
  );
};

export default Index;
