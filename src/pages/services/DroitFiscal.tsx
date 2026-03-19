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

const DroitFiscal = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit fiscal");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en droit fiscal.

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
      <SEO title="Avocat droit fiscal | Hashtag Avocat" description="Optimisation fiscale, restructurations, contrôles fiscaux et contentieux fiscal." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat droit fiscal</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat droit fiscal</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en droit fiscal" 
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
              Le <strong>droit fiscal</strong> impacte directement la rentabilité de votre entreprise. Chez <strong>Hashtag Avocats</strong>, nous optimisons votre fiscalité pour maximiser vos performances économiques tout en respectant la réglementation. Notre expertise couvre l'<strong>optimisation fiscale</strong>, les <strong>restructurations</strong>, les <strong>contrôles fiscaux</strong> et le <strong>contentieux fiscal</strong>. Nous transformons la complexité fiscale en avantage concurrentiel pour sécuriser et développer votre activité.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimisation fiscale des entreprises</h2>
            <p className="mb-6">
              L'<strong>optimisation fiscale</strong> améliore la performance de votre entreprise. Nous analysons votre situation pour identifier les dispositifs fiscaux les plus avantageux : crédit d'impôt recherche, jeune entreprise innovante, zones franches urbaines et régimes spéciaux. Notre accompagnement couvre le choix du statut fiscal optimal, l'organisation des flux financiers et la planification des opérations. Cette optimisation légale réduit votre charge fiscale et libère des ressources pour votre développement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Fiscalité des dirigeants</h2>
            <p className="mb-6">
              La <strong>fiscalité personnelle</strong> des dirigeants nécessite une approche spécialisée. Nous optimisons votre rémunération en arbitrant entre salaires, dividendes, avantages en nature et stock-options. Notre expertise couvre l'ISF, l'IFI, les plus-values de cession et la transmission d'entreprise. Nous structurons vos investissements personnels et votre patrimoine professionnel. Cette optimisation globale maximise votre rémunération nette et prépare votre retraite.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Restructurations fiscales</h2>
            <p className="mb-6">
              Les <strong>restructurations</strong> accompagnent l'évolution de votre entreprise. Nous sécurisons vos opérations de fusion, scission, apport partiel d'actif et transmission universelle de patrimoine. Notre accompagnement couvre l'analyse des impacts fiscaux, l'optimisation des structures et la gestion des régimes de faveur. Nous anticipons les conséquences fiscales et organisons vos opérations pour préserver la neutralité fiscale. Cette expertise facilite vos projets de croissance externe.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contrôles et vérifications fiscales</h2>
            <p className="mb-6">
              Les <strong>contrôles fiscaux</strong> représentent un risque majeur pour votre entreprise. Nous vous assistons dans toutes les procédures de vérification : vérification de comptabilité, examen contradictoire de situation fiscale personnelle et contrôles sur pièces. Notre accompagnement couvre la préparation du contrôle, l'assistance lors des opérations de vérification et la négociation avec l'administration. Cette défense active limite les redressements et préserve vos intérêts.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contentieux fiscal</h2>
            <p className="mb-6">
              Le <strong>contentieux fiscal</strong> nécessite une expertise technique pointue. Nous contestons les redressements injustifiés devant les tribunaux administratifs et la Cour administrative d'appel. Notre stratégie contentieuse couvre l'analyse juridique des positions de l'administration, la constitution des dossiers de défense et la plaidoirie. Nous obtenons régulièrement des annulations ou réductions significatives de redressements. Cette défense spécialisée protège votre trésorerie et votre réputation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats en droit fiscal ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise fiscale technique et vision business pour optimiser votre situation dans le respect de la légalité. Nous comprenons les enjeux économiques de la fiscalité et adaptons nos conseils à votre stratégie d'entreprise. Cette approche pragmatique, associée à notre maîtrise du droit fiscal, fait de nous le partenaire idéal pour sécuriser et optimiser votre fiscalité.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitFiscal;
