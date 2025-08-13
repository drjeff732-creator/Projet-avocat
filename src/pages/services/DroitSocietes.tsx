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

const DroitSocietes = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit des sociétés");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en droit des sociétés.

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
      <SEO title="Avocat droit des sociétés | Hashtag Avocat" description="Création, structuration, gouvernance et évolution des sociétés. Pactes d'associés et augmentations de capital." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat droit des sociétés</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat droit des sociétés</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en droit des sociétés" 
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
              Le <strong>droit des sociétés</strong> constitue le fondement juridique de votre entreprise. Chez <strong>Hashtag Avocats</strong>, nous maîtrisons toutes les subtilités du droit des sociétés pour vous accompagner de la création à l'évolution de votre structure. Notre expertise couvre la <strong>création d'entreprise</strong>, les <strong>pactes d'associés</strong>, les <strong>augmentations de capital</strong>, les <strong>restructurations</strong> et toutes les problématiques de gouvernance. Nous sécurisons votre développement avec des solutions juridiques adaptées à vos ambitions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Création et structuration d'entreprise</h2>
            <p className="mb-6">
              La <strong>création d'entreprise</strong> nécessite de choisir la forme juridique la plus adaptée à votre projet. Nos avocats vous conseillent sur le statut optimal (SAS, SARL, SA, SCI...) en tenant compte de vos objectifs, de votre fiscalité et de vos perspectives de développement. Nous rédigeons vos statuts sur-mesure, organisons votre gouvernance et sécurisons vos formalités de création. Cette structuration initiale conditionne le succès de votre entreprise.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pactes d'associés et gouvernance</h2>
            <p className="mb-6">
              Le <strong>pacte d'associés</strong> organise les relations entre actionnaires et prévient les conflits. Nous rédigeons des pactes sur-mesure qui définissent les droits et obligations de chacun, organisent la prise de décision et encadrent les cessions d'actions. Notre expertise couvre les clauses d'agrément, de préemption, d'exclusion et de sortie. Cette gouvernance claire sécurise votre développement et facilite l'entrée d'investisseurs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Augmentations de capital et financements</h2>
            <p className="mb-6">
              Les <strong>augmentations de capital</strong> accompagnent la croissance de votre entreprise. Nous sécurisons vos opérations de financement, qu'il s'agisse d'augmentations réservées, d'entrées d'investisseurs ou d'émissions d'actions gratuites. Notre accompagnement couvre la valorisation, la négociation des termes, la rédaction des actes et les formalités légales. Cette expertise vous permet de lever des fonds dans les meilleures conditions.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Restructurations et transmissions</h2>
            <p className="mb-6">
              Les <strong>restructurations</strong> accompagnent l'évolution de votre entreprise. Nous vous conseillons sur les fusions, acquisitions, scissions et apports partiels d'actifs. Notre expertise couvre également les transmissions d'entreprise, qu'elles soient familiales ou à des tiers. Nous optimisons les aspects juridiques, fiscaux et sociaux de ces opérations complexes pour sécuriser votre projet de transmission.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conformité et obligations légales</h2>
            <p className="mb-6">
              Le respect des <strong>obligations légales</strong> protège votre entreprise et ses dirigeants. Nous vous accompagnons dans la tenue de vos assemblées, la rédaction de vos procès-verbaux et le respect de vos obligations déclaratives. Notre veille juridique vous alerte sur les évolutions réglementaires et vous aide à maintenir votre conformité. Cette rigueur prévient les risques et renforce votre crédibilité.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats en droit des sociétés ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise technique et vision business pour vous proposer des solutions juridiques adaptées à vos enjeux. Nous comprenons les défis des entrepreneurs et adaptons notre conseil à votre réalité opérationnelle. Cette approche pragmatique, associée à notre maîtrise du droit des sociétés, fait de nous le partenaire idéal pour sécuriser et développer votre entreprise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitSocietes;
