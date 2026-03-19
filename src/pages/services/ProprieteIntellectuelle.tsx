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

const ProprieteIntellectuelle = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Propriété intellectuelle");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en propriété intellectuelle.

--- Informations du formulaire ---
${formData}

Je souhaiterais obtenir plus d'informations sur vos services et éventuellement planifier un rendez-vous.

Cordialement`;
    
    window.location.href = `mailto:hashtag.avocat@proton.me?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(processForm)(event);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <SEO title="Avocat propriété intellectuelle | Hashtag Avocat" description="Protection des marques, brevets, dessins et modèles. Contrefaçon et valorisation de la PI." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat propriété intellectuelle</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat propriété intellectuelle</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en propriété intellectuelle" 
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
              La <strong>propriété intellectuelle</strong> constitue souvent l'actif le plus précieux de votre entreprise. Chez <strong>Hashtag Avocats</strong>, nous protégeons et valorisons votre patrimoine immatériel avec une expertise reconnue en <strong>marques</strong>, <strong>brevets</strong>, <strong>dessins et modèles</strong>, et <strong>droits d'auteur</strong>. Notre accompagnement couvre le dépôt, la protection, la défense et la valorisation de vos créations. Nous sécurisons votre avantage concurrentiel et transformons vos innovations en atouts stratégiques.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Protection des marques</h2>
            <p className="mb-6">
              Votre <strong>marque</strong> identifie et distingue vos produits ou services. Nous vous accompagnons dans le choix, la recherche d'antériorités, le dépôt et la protection de vos marques en France, en Europe et à l'international. Notre expertise couvre les marques verbales, figuratives, sonores et tridimensionnelles. Nous défendons vos droits contre les contrefaçons et gérons vos portefeuilles de marques. Cette protection renforce votre identité commerciale et sécurise vos investissements marketing.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Brevets d'invention</h2>
            <p className="mb-6">
              Le <strong>brevet</strong> protège vos innovations techniques et vous confère un monopole d'exploitation. Nous évaluons la brevetabilité de vos inventions, rédigeons vos demandes de brevet et gérons vos procédures de dépôt. Notre accompagnement couvre les brevets français, européens et internationaux. Nous négocions vos licences de brevet et défendons vos droits contre les contrefacteurs. Cette protection valorise votre R&D et génère des revenus de propriété industrielle.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dessins et modèles</h2>
            <p className="mb-6">
              Les <strong>dessins et modèles</strong> protègent l'apparence esthétique de vos produits. Nous sécurisons vos créations ornementales par des dépôts stratégiques en France, en Europe et à l'international. Notre expertise couvre les produits industriels, le packaging, les interfaces utilisateur et les créations textiles. Nous défendons vos droits exclusifs et valorisons vos investissements design. Cette protection différencie vos produits et renforce votre positionnement marché.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Droits d'auteur et logiciels</h2>
            <p className="mb-6">
              Les <strong>droits d'auteur</strong> protègent vos créations originales dès leur création. Nous sécurisons vos œuvres littéraires, artistiques, logiciels et bases de données. Notre accompagnement couvre la titularité des droits, les contrats de cession et de licence, et la défense contre les contrefaçons. Nous gérons également la protection spécifique des <strong>logiciels</strong> et des créations numériques. Cette protection valorise votre créativité et génère des revenus de propriété littéraire et artistique.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lutte contre la contrefaçon</h2>
            <p className="mb-6">
              La <strong>contrefaçon</strong> menace vos investissements et votre réputation. Nous déployons des stratégies efficaces de lutte anti-contrefaçon : surveillance, saisies-contrefaçon, actions en justice et négociations amiables. Notre expertise couvre les contrefaçons physiques et numériques, les noms de domaine litigieux et les réseaux sociaux. Nous obtenons des dommages-intérêts et des mesures d'interdiction. Cette défense active préserve vos parts de marché et dissuade les contrefacteurs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Valorisation et licensing</h2>
            <p className="mb-6">
              Vos droits de propriété intellectuelle génèrent de la valeur. Nous structurons vos stratégies de <strong>licensing</strong>, négocions vos contrats de licence et optimisons vos revenus de propriété industrielle. Notre accompagnement couvre les licences exclusives et non-exclusives, les franchises et les transferts de technologie. Nous évaluons vos portefeuilles PI et conseillons vos opérations de M&A. Cette valorisation transforme vos innovations en sources de revenus durables.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats en propriété intellectuelle ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise juridique et vision business pour maximiser la valeur de votre propriété intellectuelle. Nous comprenons les enjeux technologiques et commerciaux de l'innovation. Cette approche stratégique, associée à notre maîtrise des procédures de propriété industrielle, fait de nous le partenaire idéal pour protéger et valoriser vos créations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProprieteIntellectuelle;
