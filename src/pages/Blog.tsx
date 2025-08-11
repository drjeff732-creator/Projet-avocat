import SEO from "@/components/SEO";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const allPosts = [
  { id: 1, title: "RGPD: check-list pour les startups", date: "2025-06-01", category: "RGPD", excerpt: "Les indispensables pour se mettre en conformité sans ralentir le produit.", tags: ["rgpd", "privacy", "startup"] },
  { id: 2, title: "Term sheet: 7 clauses à surveiller", date: "2025-05-20", category: "Levée de fonds", excerpt: "Comprendre les enjeux pour négocier efficacement avec les investisseurs.", tags: ["vc", "term sheet"] },
  { id: 3, title: "CGU/CGV: éviter 5 pièges courants", date: "2025-04-10", category: "Contrats", excerpt: "Les erreurs qui coûtent cher et comment les corriger.", tags: ["contrats", "saas"] },
  { id: 4, title: "Marque et logo: protéger ses actifs", date: "2025-03-15", category: "Propriété intellectuelle", excerpt: "Processus et conseils pratiques pour protéger votre identité.", tags: ["ip", "marque"] },
];

const categories = ["Toutes", "RGPD", "Levée de fonds", "Contrats", "Propriété intellectuelle"];

const Blog = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Toutes");

  const posts = useMemo(() => {
    return allPosts.filter(p => {
      const inCat = cat === "Toutes" || p.category === cat;
      const inQuery = [p.title, p.excerpt, p.tags.join(" ")].join(" ").toLowerCase().includes(q.toLowerCase());
      return inCat && inQuery;
    });
  }, [q, cat]);

  return (
    <div className="container py-12">
      <SEO title="Actualités | Hashtag Avocat" description="Analyses juridiques, guides pratiques et interviews autour du droit du numérique et des startups." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Actualités</h1>

      <div className="grid gap-8 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          {posts.map(p => (
            <Card key={p.id} className="p-4 flex gap-4 items-start">
              <div className="size-24 rounded-md bg-muted shrink-0" aria-hidden />
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">{p.title}</h2>
                <div className="text-xs text-muted-foreground">{new Date(p.date).toLocaleDateString()}</div>
                <p className="text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tags.map(t => <Badge key={t} variant="secondary">{t}</Badge>)}
                </div>
                <Button variant="link" asChild><Link to="#">Lire la suite</Link></Button>
              </div>
            </Card>
          ))}
        </div>

        <aside className="space-y-4">
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Rechercher..." />
          <div className="space-y-2">
            <h3 className="font-medium">Catégories</h3>
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <Button key={c} variant={cat === c ? "default" : "outline"} size="sm" onClick={() => setCat(c)}>
                  {c}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;
