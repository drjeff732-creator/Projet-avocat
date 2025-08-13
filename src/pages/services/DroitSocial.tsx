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

const DroitSocial = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit social");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en droit social.

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
      <SEO title="Avocat droit social | Hashtag Avocat" description="Contrats de travail, licenciements, relations sociales et conformité sociale." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat droit social</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat droit social</h1>
                
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
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat droit social</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat droit social</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en droit social" 
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
              Le <strong>droit social</strong> régit les relations entre employeurs et salariés. Chez <strong>Hashtag Avocats</strong>, nous sécurisons votre politique RH et prévenons les risques sociaux. Notre expertise couvre les <strong>contrats de travail</strong>, les <strong>licenciements</strong>, les <strong>relations sociales</strong> et la <strong>conformité sociale</strong>. Nous transformons la complexité du droit du travail en avantage concurrentiel pour attirer et fidéliser vos talents tout en maîtrisant vos risques juridiques.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrats de travail et statuts</h2>
            <p className="mb-6">
              Les <strong>contrats de travail</strong> structurent vos relations avec vos collaborateurs. Nous rédigeons des contrats adaptés à chaque situation : CDI, CDD, contrats d'apprentissage, de professionnalisation et de stage. Notre expertise couvre les clauses spécifiques aux startups : mobilité, confidentialité, non-concurrence et intéressement. Nous organisons également les statuts des dirigeants et mandataires sociaux. Cette sécurisation contractuelle prévient les litiges et facilite la gestion RH.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Rémunération et avantages sociaux</h2>
            <p className="mb-6">
              La <strong>politique de rémunération</strong> attire et fidélise vos talents. Nous structurons vos packages de rémunération en optimisant l'équilibre entre salaire fixe, variable, avantages en nature et dispositifs d'intéressement. Notre accompagnement couvre les BSPCE, stock-options, actions gratuites et plans d'épargne entreprise. Nous gérons également les régimes de prévoyance et de retraite supplémentaire. Cette optimisation sociale renforce votre attractivité employeur.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Licenciements et ruptures</h2>
            <p className="mb-6">
              Les <strong>ruptures de contrat</strong> nécessitent une sécurisation juridique rigoureuse. Nous vous accompagnons dans tous les modes de rupture : licenciement pour motif personnel ou économique, rupture conventionnelle, démission et abandon de poste. Notre expertise couvre l'analyse des motifs, la procédure à respecter et le calcul des indemnités. Nous privilégions les solutions amiables pour préserver votre image employeur. Cette maîtrise des ruptures limite vos risques contentieux.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Relations sociales et représentation</h2>
            <p className="mb-6">
              Les <strong>relations sociales</strong> évoluent avec la croissance de votre entreprise. Nous vous accompagnons dans la mise en place des instances représentatives : CSE, délégués syndicaux et négociation collective. Notre expertise couvre les élections professionnelles, les négociations annuelles obligatoires et la gestion des conflits sociaux. Nous structurons le dialogue social pour maintenir un climat de confiance. Cette anticipation des enjeux sociaux facilite votre développement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conformité et obligations sociales</h2>
            <p className="mb-6">
              La <strong>conformité sociale</strong> protège votre entreprise des sanctions. Nous auditions vos pratiques RH pour identifier les risques et mettre en place les corrections nécessaires. Notre accompagnement couvre le respect du temps de travail, l'égalité professionnelle, la formation et la sécurité au travail. Nous gérons vos obligations déclaratives et votre veille réglementaire. Cette conformité prévient les contrôles et renforce votre réputation employeur.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contentieux prud'homal</h2>
            <p className="mb-6">
              Le <strong>contentieux prud'homal</strong> peut impacter significativement votre entreprise. Nous défendons vos intérêts devant les conseils de prud'hommes en privilégiant les solutions négociées. Notre stratégie contentieuse couvre l'analyse des dossiers, la constitution des moyens de défense et la représentation aux audiences. Nous obtenons régulièrement des décisions favorables ou des transactions équilibrées. Cette défense spécialisée protège votre trésorerie et votre image.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats en droit social ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise juridique et compréhension des enjeux RH des startups et PME. Nous adaptons le droit social à votre réalité opérationnelle pour créer un environnement de travail attractif et sécurisé. Cette approche pragmatique, associée à notre maîtrise du droit du travail, fait de nous le partenaire idéal pour développer votre capital humain en toute sécurité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitSocial;
