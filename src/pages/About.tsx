import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="container py-12">
      <SEO title="À propos | Hashtag Avocat" description="Histoire, valeurs et équipe de Hashtag Avocat, cabinet spécialisé en droit du numérique et startups." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">À propos</h1>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Né au cœur de l'écosystème startup, Hashtag Avocat accompagne les entrepreneurs, scale-ups et acteurs du numérique sur l'ensemble de leurs enjeux juridiques. Notre mission : sécuriser votre croissance, sans freiner l'innovation.
          </p>
          <p>
            Nous intervenons en droit des affaires, propriété intellectuelle, data privacy (RGPD), contrats et levées de fonds. Notre approche allie expertise pointue et pragmatisme opérationnel.
          </p>
          <p>
            Engagés, pédagogues et réactifs, nous faisons de la collaboration et de la transparence les piliers de notre accompagnement.
          </p>
        </div>
        <Card className="p-6 space-y-4">
          <h2 className="font-semibold">Nos valeurs</h2>
          <div className="flex flex-wrap gap-2">
            <Badge>Intégrité</Badge>
            <Badge>Innovation</Badge>
            <Badge>Écoute</Badge>
            <Badge>Transparence</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            Nous mettons l'humain et l'efficacité au cœur de chaque collaboration.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default About;
