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

const DroitContrats = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit des contrats");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en droit des contrats.

--- Informations du formulaire ---
${formData}

Je souhaiterais obtenir plus d'informations sur vos services et éventuellement planifier un rendez-vous.

Cordialement`;
    
    const mailtoLink = `mailto:hashtag.avocat@proton.me?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
    const a = document.createElement('a');
    a.href = mailtoLink;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(processForm)(event);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SEO title="Avocat droit des contrats | Hashtag Avocat" description="Rédaction, négociation et exécution des contrats commerciaux, partenariats et accords." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat droit des contrats</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat droit des contrats</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en droit des contrats" 
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
              Le <strong>droit des contrats</strong> structure toutes vos relations d'affaires. Chez <strong>Hashtag Avocats</strong>, nous maîtrisons l'art de la rédaction contractuelle pour sécuriser vos opérations et prévenir les litiges. Notre expertise couvre les <strong>contrats commerciaux</strong>, les <strong>partenariats stratégiques</strong>, les <strong>accords de distribution</strong> et tous les contrats d'entreprise. Nous transformons vos intentions commerciales en instruments juridiques solides qui protègent vos intérêts et facilitent vos affaires.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rédaction de contrats sur-mesure</h2>
            <p className="mb-6">
              Chaque <strong>contrat</strong> doit refléter la spécificité de votre activité et de vos objectifs. Nous rédigeons des contrats sur-mesure qui équilibrent protection juridique et flexibilité opérationnelle. Notre approche couvre l'analyse de vos besoins, la structuration des clauses essentielles et l'anticipation des risques. Nous adaptons notre rédaction à votre secteur d'activité et à vos contraintes business. Cette personnalisation garantit des contrats efficaces et adaptés à votre réalité.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Négociation contractuelle</h2>
            <p className="mb-6">
              La <strong>négociation contractuelle</strong> détermine l'équilibre de vos relations d'affaires. Nous vous accompagnons dans toutes vos négociations pour obtenir les meilleures conditions. Notre expertise couvre l'analyse des propositions, l'identification des points de négociation et la recherche de solutions équilibrées. Nous défendons vos intérêts tout en préservant vos relations commerciales. Cette approche stratégique optimise vos accords et renforce votre position concurrentielle.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrats de partenariat et distribution</h2>
            <p className="mb-6">
              Les <strong>partenariats</strong> et <strong>accords de distribution</strong> structurent votre développement commercial. Nous sécurisons vos alliances stratégiques par des contrats qui définissent clairement les rôles, responsabilités et objectifs de chaque partie. Notre accompagnement couvre les joint-ventures, franchises, concessions et accords de distribution. Nous organisons la gouvernance, les mécanismes de contrôle et les conditions de sortie. Cette structuration favorise des partenariats durables et performants.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrats de prestation et services</h2>
            <p className="mb-6">
              Les <strong>contrats de prestation</strong> encadrent vos relations avec vos clients et fournisseurs. Nous rédigeons des contrats qui définissent précisément les prestations, les délais, les modalités de paiement et les garanties. Notre expertise couvre les contrats de services, de maintenance, de conseil et d'assistance technique. Nous intégrons les clauses de propriété intellectuelle, de confidentialité et de responsabilité. Cette précision contractuelle sécurise vos prestations et facilite leur exécution.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gestion des litiges contractuels</h2>
            <p className="mb-6">
              Les <strong>litiges contractuels</strong> peuvent compromettre vos relations d'affaires. Nous privilégions la résolution amiable par la négociation et la médiation. Notre accompagnement couvre l'analyse des manquements, l'évaluation des préjudices et la recherche de solutions pragmatiques. En cas d'échec de la négociation, nous défendons vos droits devant les tribunaux. Cette gestion proactive des conflits préserve vos intérêts et maintient vos relations commerciales.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Audit et optimisation contractuelle</h2>
            <p className="mb-6">
              Vos <strong>contrats existants</strong> peuvent nécessiter des adaptations. Nous réalisons des audits contractuels pour identifier les risques et opportunités d'amélioration. Notre analyse couvre la conformité réglementaire, l'équilibre des prestations et l'efficacité des clauses. Nous proposons des amendements et renouvellements optimisés. Cette démarche d'amélioration continue renforce la sécurité juridique de vos opérations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats en droit des contrats ?</h2>
            <p className="mb-6">
              Notre cabinet allie rigueur juridique et pragmatisme business pour créer des contrats qui servent vraiment vos intérêts. Nous comprenons vos enjeux commerciaux et traduisons vos objectifs en clauses contractuelles efficaces. Cette approche opérationnelle, combinée à notre expertise juridique, fait de nous le partenaire idéal pour sécuriser et optimiser tous vos contrats.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitContrats;
