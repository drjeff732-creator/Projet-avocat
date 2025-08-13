import SEO from "@/components/SEO";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const featuredPost = {
  id: 1,
  title: "Quelles sanctions encourt une personne coupable de contrefaçon ? Comprendre les risques juridiques",
  excerpt: "La contrefaçon représente un risque juridique majeur pour toute activité créative ou innovante. Aujourd'hui, la propriété intellectuelle occupe une place centrale dans la protection des œuvres et des innovations, rendant essentiel de bien comprendre les conséquences qui pèsent sur les personnes reconnues coupables d'un tel délit pénal. Les sanctions applicables...",
  image: "https://hashtagavocats.com/wp-content/uploads/2025/08/quelles_sanctions_encourt_une_personne_coupable_de_contrefa_on_comprendre_les_risques_juridiques.webp",
  date: "août 11, 2024",
  category: "Propriété intellectuelle"
};

const allPosts = [
  {
    id: 1,
    title: "Quelles sanctions encourt une personne coupable de contrefaçon ? Comprendre les risques juridiques",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Découvrez les conséquences juridiques de la contrefaçon et comment protéger vos droits de propriété intellectuelle.",
    date: "août 11, 2024",
    category: "Propriété intellectuelle"
  },
  {
    id: 2,
    title: "Qui contrôle la blockchain ? Analyse de la décentralisation et des mécanismes de régulation",
    image: "https://hashtagavocats.com/wp-content/uploads/2025/08/qui_contr_le_la_blockchain_analyse_de_la_gouvernance_et_des_m_canismes_de_r_gulation-768x439.webp",
    excerpt: "Plongez dans l'univers de la blockchain et comprenez ses mécanismes de gouvernance et de régulation.",
    date: "août 10, 2024",
    category: "Nouvelles technologies"
  },
  {
    id: 3,
    title: "Différences juridiques entre propriété intellectuelle et propriété industrielle",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Un guide complet pour comprendre les distinctions clés entre ces deux domaines du droit.",
    date: "août 10, 2024",
    category: "Propriété intellectuelle"
  },
  {
    id: 4,
    title: "L'impact du RGPD sur les entreprises en 2024",
    image: "https://hashtagavocats.com/wp-content/uploads/2025/06/dpa_guide_complet_pour_la_conformit_rgpd_des_accords_de_traitement_des_donn_es.webp",
    excerpt: "Les dernières évolutions réglementaires et comment les entreprises doivent s'adapter pour être conformes.",
    date: "août 9, 2024",
    category: "RGPD"
  },
  {
    id: 5,
    title: "Les contrats de travail en télétravail : ce qui change en 2024",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    excerpt: "Tout ce qu'il faut savoir sur les nouvelles réglementations du télétravail et leurs implications.",
    date: "août 8, 2024",
    category: "Droit social"
  },
  {
    id: 6,
    title: "Optimisation fiscale pour les startups : les stratégies à connaître",
    image: "https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1465&q=80",
    excerpt: "Découvrez les meilleures pratiques pour optimiser la fiscalité de votre entreprise en démarrage.",
    date: "août 7, 2024",
    category: "Fiscalité"
  }
];

const Blog = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO title="Blog du cabinet et actualités juridiques | Hashtag Avocat" description="Le blog de #Hashtag Avocats est votre source d'inspiration et d'information. Nous tentons d'offrir des analyses éclairées et des conseils pratiques sur les dernières tendances et évolutions en droit des affaires, destinés à équiper les entrepreneurs et les innovateurs pour relever les défis juridiques de demain." />
      
      {/* Header Section */}
      <section className="bg-white py-12 md:py-16 mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Blog du cabinet et actualités juridiques
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Le blog de <strong>#Hashtag Avocats</strong> est votre source d'inspiration et d'information. Nous tentons d'offrir des analyses éclairées et des conseils pratiques sur les dernières tendances et évolutions en droit des affaires, destinés à équiper les entrepreneurs et les innovateurs pour relever les défis juridiques de demain.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 right-4 bg-white text-gray-800 hover:bg-white/90">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
