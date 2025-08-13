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

const LeveeDeFonds = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const processForm = (data: FormData) => {
    const subject = encodeURIComponent("Demande de consultation - Levée de fonds");
    const formData = `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || 'Non renseigné'}\nTéléphone: ${data.telephone || 'Non renseigné'}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
    
    const emailBody = `Bonjour Maître Philipot-AMF,

Je vous contacte concernant vos services en levée de fonds.

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
      <SEO title="Avocat pour votre levée de fonds | Hashtag Avocat" description="Accompagnement complet en levée de fonds: stratégie juridique & financière, accès aux investisseurs, valorisation." />
      
      {/* Section 1: Formulaire de contact */}
      <section className="pt-24 pb-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Formulaire à gauche */}
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">Hashtag Avocats Startup &gt; Avocat pour votre levée de fonds</p>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Avocat pour votre levée de fonds</h1>
                
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
                    <span>Stratégie juridique & financière</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Accès aux investisseurs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Valorisation</span>
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
                  alt="Équipe Hashtag Avocats - Spécialistes en levée de fonds" 
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
              Vous cherchez à réussir votre <strong>levée de fonds</strong> et à <strong>attirer des investisseurs</strong> alignés avec vos ambitions ? Chez <strong>Hashtag Avocats</strong>, nous vous accompagnons pour tirer le maximum de vos négociations grâce à une <strong>stratégie juridique et financière sur-mesure</strong>, adaptée à votre <strong>startup</strong>. Nous mobilisons en amont votre <strong>potentiel de croissance</strong> avec un dossier solide, convaincant et structuré, tout en identifiant les investisseurs les plus pertinents et en partageant votre vision. Avec notre accompagnement, vous sécurisez les <strong>conditions les plus avantageuses</strong> afin d'accélérer le <strong>développement</strong> de votre entreprise.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Stratégie juridique et financière pour optimiser votre levée de fonds</h2>
            <p className="mb-6">
              Réussir une <strong>levée de fonds</strong> nécessite une préparation minutieuse et une expertise pointue. Nos avocats spécialisés analysent votre modèle économique, évaluent vos besoins de financement et définissent une stratégie sur-mesure. Nous structurons votre dossier de présentation, optimisons votre valorisation et anticipons les questions des investisseurs. Cette approche méthodique vous permet d'aborder les négociations avec confiance et de maximiser vos chances de succès.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accès privilégié à un réseau d'investisseurs qualifiés</h2>
            <p className="mb-6">
              Notre cabinet dispose d'un réseau étendu d'investisseurs, business angels, fonds de capital-risque et family offices. Nous identifions les partenaires financiers les plus pertinents selon votre secteur d'activité, votre stade de développement et vos ambitions. Cette mise en relation ciblée accélère votre processus de levée et augmente significativement vos opportunités de financement.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Valorisation optimale et négociation des termes</h2>
            <p className="mb-6">
              La valorisation de votre entreprise constitue un enjeu crucial de votre levée de fonds. Nos experts vous accompagnent dans l'évaluation de votre startup, en tenant compte de vos actifs, de votre potentiel de croissance et des comparables du marché. Nous négocions ensuite les termes de l'investissement pour préserver vos intérêts tout en séduisant les investisseurs.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sécurisation juridique complète du processus</h2>
            <p className="mb-6">
              Chaque étape de votre levée de fonds est sécurisée juridiquement. Nous rédigeons et négocions les term sheets, pactes d'associés, contrats d'investissement et tous les documents juridiques nécessaires. Notre expertise vous protège des pièges contractuels et garantit la conformité de votre opération avec la réglementation en vigueur.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Due diligence et closing sécurisé</h2>
            <p className="mb-6">
              Nous vous préparons à la phase de due diligence en constituant un data room complet et en anticipant les questions des investisseurs. Notre équipe vous accompagne jusqu'au closing final, en gérant tous les aspects juridiques et administratifs pour garantir une finalisation rapide et sécurisée de votre levée de fonds.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi choisir Hashtag Avocats pour votre levée de fonds ?</h2>
            <p className="mb-6">
              Notre cabinet combine expertise juridique pointue et connaissance approfondie de l'écosystème startup. Nous comprenons les enjeux spécifiques des entrepreneurs et adaptons notre accompagnement à votre réalité. Notre approche pragmatique et notre réseau d'investisseurs font de nous le partenaire idéal pour réussir votre levée de fonds et accélérer votre croissance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeveeDeFonds;
