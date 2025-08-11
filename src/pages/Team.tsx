import SEO from "@/components/SEO";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { useMemo, useState } from "react";
import lawyer1 from "@/assets/team-lawyer-1.jpg";
import lawyer2 from "@/assets/team-lawyer-2.jpg";
import lawyer3 from "@/assets/team-lawyer-3.jpg";

const team = [
  { name: "Maître Alexandre Martin", specialty: "Levée de fonds", img: lawyer1, bio: "10 ans d'expérience en M&A et venture capital." },
  { name: "Maître Sophie Laurent", specialty: "Data privacy & RGPD", img: lawyer2, bio: "DPO certifiée, spécialiste compliance data et SaaS." },
  { name: "Maître Henri Dubois", specialty: "Propriété intellectuelle", img: lawyer3, bio: "Protection des logiciels, marques et licences." },
];

const specialties = ["Toutes", "Levée de fonds", "Data privacy & RGPD", "Propriété intellectuelle"];

const Team = () => {
  const [filter, setFilter] = useState("Toutes");
  const filtered = useMemo(() => (filter === "Toutes" ? team : team.filter(t => t.specialty === filter)), [filter]);

  return (
    <div className="container py-12">
      <SEO title="Équipe | Hashtag Avocat" description="Découvrez l'équipe d'avocats spécialisés en numérique et startups." />
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary">Équipe</h1>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-56">
            <SelectValue placeholder="Filtrer par spécialité" />
          </SelectTrigger>
          <SelectContent>
            {specialties.map(s => (
              <SelectItem key={s} value={s}>{s}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map(m => (
          <Card key={m.name} className="p-4">
            <img src={m.img} alt={m.name} className="w-full h-52 object-cover rounded-md border" loading="lazy" />
            <h3 className="mt-3 font-medium">{m.name}</h3>
            <p className="text-sm text-primary">{m.specialty}</p>
            <p className="text-sm text-muted-foreground mt-1">{m.bio}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Team;
