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

const DroitNouvellesTechnologies = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Droit des nouvelles technologies");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en droit des nouvelles technologies.

--- Informations du formulaire ---
${formData}

Je souhaiterais obtenir plus d'informations sur vos services et éventuellement planifier un rendez-vous.

Cordialement`;
    
    const mailtoLink = `mailto:pierre.philipot-amf@proton.me?subject=${subject}&body=${encodeURIComponent(emailBody)}`;
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
      <SEO title="Avocat nouvelles technologies | Hashtag Avocat" description="Expertise en droit du numérique, RGPD, blockchain, IA et cybersécurité pour accompagner votre transformation digitale." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat nouvelles technologies</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat nouvelles technologies</h1>
                
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
                  alt="Équipe Hashtag Avocats - Spécialistes en nouvelles technologies" 
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
              Les <strong>nouvelles technologies</strong> transforment notre société et créent de nouveaux défis juridiques. Chez <strong>Hashtag Avocats</strong>, nous maîtrisons le <strong>droit du numérique</strong> pour accompagner votre transformation digitale en toute sécurité. Notre expertise couvre la <strong>blockchain</strong>, l'<strong>intelligence artificielle</strong>, la <strong>cybersécurité</strong>, le <strong>RGPD</strong> et toutes les problématiques juridiques liées au digital. Nous sécurisons vos innovations technologiques tout en respectant le cadre réglementaire en constante évolution.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Expertise en blockchain et cryptoactifs</h2>
            <p className="mb-6">
              La <strong>blockchain</strong> révolutionne de nombreux secteurs mais soulève des questions juridiques complexes. Nos avocats spécialisés vous accompagnent dans vos projets blockchain, du développement de smart contracts à la création de tokens. Nous sécurisons vos ICO, analysons la conformité réglementaire de vos cryptoactifs et vous conseillons sur les aspects fiscaux. Notre expertise vous permet d'innover en toute sérénité dans l'univers des technologies décentralisées.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intelligence artificielle et éthique numérique</h2>
            <p className="mb-6">
              L'<strong>intelligence artificielle</strong> pose des défis juridiques inédits en matière de responsabilité, de propriété intellectuelle et d'éthique. Nous vous conseillons sur l'encadrement juridique de vos algorithmes, la protection de vos données d'entraînement et la conformité aux futures réglementations européennes. Notre approche anticipe les évolutions législatives pour sécuriser vos investissements en IA.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cybersécurité et protection des données</h2>
            <p className="mb-6">
              La <strong>cybersécurité</strong> est devenue un enjeu stratégique majeur. Nous vous aidons à mettre en place une gouvernance de la sécurité informatique conforme aux exigences légales. De l'audit de conformité à la gestion des incidents, nous sécurisons votre infrastructure numérique et protégeons vos données sensibles. Notre expertise couvre également la notification des violations de données et la gestion des crises cyber.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Conformité RGPD et privacy by design</h2>
            <p className="mb-6">
              Le <strong>RGPD</strong> impose des obligations strictes en matière de protection des données personnelles. Nous vous accompagnons dans votre mise en conformité avec une approche <strong>privacy by design</strong>. De l'analyse d'impact à la rédaction de vos politiques de confidentialité, nous sécurisons vos traitements de données. Notre expertise vous protège des sanctions et renforce la confiance de vos utilisateurs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">E-commerce et plateformes numériques</h2>
            <p className="mb-6">
              Le <strong>commerce électronique</strong> nécessite une expertise juridique spécialisée. Nous rédigeons vos conditions générales de vente et d'utilisation, sécurisons vos processus de paiement et vous conseillons sur la réglementation des plateformes. Notre accompagnement couvre également la gestion des avis clients, la lutte contre la contrefaçon en ligne et la conformité aux règles de consommation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats pour vos projets tech ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise juridique pointue et compréhension technique des innovations numériques. Nous parlons le langage des développeurs et des entrepreneurs tech tout en maîtrisant les subtilités du droit. Cette double compétence nous permet de vous proposer des solutions juridiques adaptées à vos enjeux technologiques et business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DroitNouvellesTechnologies;
