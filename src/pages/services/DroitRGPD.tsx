import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import heroImage from "@/assets/hero-hashtag-avocat.jpg";

const schema = z.object({
  civilite: z.string().min(1, "Champ requis"),
  nom: z.string().min(1, "Champ requis"),
  societe: z.string().optional(),
  telephone: z.string().optional(),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});

type FormData = z.infer<typeof schema>;

const DroitRGPD = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

    const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit du RGPD");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en RGPD et protection des données.

--- Informations du formulaire ---
${formData}

Je souhaiterais obtenir plus d'informations sur vos services et éventuellement planifier un rendez-vous.

Cordialement`;
    
    window.location.href = `mailto:pierre.philipot-amf@proton.me?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(processForm)(event);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SEO title="Avocat RGPD | Hashtag Avocat" description="Conformité RGPD, protection des données personnelles, DPO externalisé et mise en conformité." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat RGPD</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat RGPD</h1>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-sm font-bold text-white bg-green-500 px-2 py-1 rounded">EXCELLENT</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">126 avis</span>
                  <span className="text-sm font-medium text-blue-600">Google</span>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-700 mb-6">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>À l'écoute</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Flexible</span>
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <select 
                      {...register("civilite")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Mme</option>
                      <option value="Mme">Mme</option>
                      <option value="M.">M.</option>
                    </select>
                    {errors.civilite && <p className="text-red-500 text-sm mt-1">{errors.civilite.message}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nom"
                      {...register("nom")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Société"
                      {...register("societe")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Numéro de téléphone"
                      {...register("telephone")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="E-mail"
                    {...register("email")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <textarea
                    placeholder="Parlez-nous de votre besoin. Nous vous recontacterons rapidement."
                    {...register("message")}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-black text-white py-3 px-6 rounded-lg font-medium transition-colors"
                >
                  Envoyer
                </button>
              </form>
            </div>

            {/* Image à droite */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Équipe Hashtag Avocats - Spécialistes en RGPD" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Description détaillée */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none text-gray-800">
            <p className="text-xl leading-relaxed mb-8">
              Le <strong>RGPD</strong> transforme la gestion des données personnelles en enjeu stratégique. Chez <strong>Hashtag Avocats</strong>, nous sécurisons votre conformité pour transformer cette contrainte réglementaire en avantage concurrentiel. Notre expertise couvre la <strong>mise en conformité RGPD</strong>, la <strong>gouvernance des données</strong>, les <strong>analyses d'impact</strong> et la <strong>gestion des incidents</strong>. Nous protégeons vos données et celles de vos clients tout en préservant votre agilité opérationnelle.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Audit et mise en conformité RGPD</h2>
            <p className="mb-6">
              La <strong>conformité RGPD</strong> nécessite une approche méthodique et personnalisée. Nous réalisons un audit complet de vos traitements de données pour identifier les écarts et définir un plan d'action prioritaire. Notre accompagnement couvre la cartographie des traitements, l'analyse des bases légales, la révision des contrats et la mise en place des procédures. Nous adaptons les exigences du RGPD à votre réalité business pour une conformité durable et opérationnelle.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">DPO externalisé et gouvernance</h2>
            <p className="mb-6">
              Le <strong>Délégué à la Protection des Données</strong> pilote votre conformité RGPD. Nous assurons cette mission en mode externalisé pour vous apporter expertise et objectivité. Notre accompagnement couvre le conseil, la formation de vos équipes, la veille réglementaire et les relations avec la CNIL. Nous structurons votre gouvernance des données et animons votre comité de pilotage RGPD. Cette externalisation vous garantit une expertise à jour et des coûts maîtrisés.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Analyses d'impact et Privacy by Design</h2>
            <p className="mb-6">
              Les <strong>analyses d'impact</strong> sécurisent vos projets impliquant des données personnelles. Nous évaluons les risques pour les droits et libertés des personnes et proposons des mesures de protection adaptées. Notre approche <strong>Privacy by Design</strong> intègre la protection des données dès la conception de vos produits et services. Nous accompagnons vos équipes techniques pour implémenter les principes de minimisation, de pseudonymisation et de chiffrement. Cette approche proactive prévient les risques et facilite vos innovations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrats et relations avec les tiers</h2>
            <p className="mb-6">
              Les <strong>relations contractuelles</strong> structurent votre écosystème de données. Nous rédigeons et négocions vos contrats de sous-traitance, accords de transfert et clauses de protection des données. Notre expertise couvre les transferts internationaux, les mécanismes de certification et les clauses contractuelles types. Nous sécurisons vos relations avec les prestataires cloud, les partenaires commerciaux et les sous-traitants. Cette sécurisation contractuelle protège vos données et engage vos partenaires.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gestion des droits et des incidents</h2>
            <p className="mb-6">
              La <strong>gestion des droits</strong> des personnes concernées nécessite des procédures efficaces. Nous mettons en place les processus pour traiter les demandes d'accès, de rectification, d'effacement et de portabilité. Notre accompagnement couvre également la gestion des <strong>violations de données</strong> : détection, évaluation, notification et communication. Nous préparons vos équipes à réagir rapidement et efficacement. Cette réactivité limite les impacts et préserve votre réputation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Formation et sensibilisation</h2>
            <p className="mb-6">
              La <strong>culture de la protection des données</strong> implique tous vos collaborateurs. Nous concevons et animons des formations adaptées à chaque public : dirigeants, équipes techniques, commerciales et RH. Notre approche pédagogique privilégie les cas pratiques et les mises en situation. Nous créons également vos supports de communication interne et vos guides de bonnes pratiques. Cette sensibilisation généralisée ancre la conformité dans votre organisation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats pour le RGPD ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise juridique et compréhension des enjeux technologiques pour vous proposer une conformité RGPD pragmatique et durable. Nous adaptons les exigences réglementaires à votre réalité business sans freiner votre innovation. Cette approche équilibrée, associée à notre maîtrise du droit des données, fait de nous le partenaire idéal pour transformer le RGPD en avantage concurrentiel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitRGPD;
