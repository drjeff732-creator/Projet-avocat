import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Tarifs = () => (
  <div className="py-12 bg-gray-50 min-h-screen">
    <SEO title="Tarifs | Hashtag Avocat" description="Nos modalités d'intervention et de facturation claires et adaptées à vos besoins." />
    
    <div className="container mx-auto mt-20 px-4 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Les offres Hashtag adaptées à votre projet
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nous avons développé 4 systèmes de tarification de manière à répondre au mieux à votre besoin
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        {/* À la Carte */}
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">À la Carte</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Choisissez parmi une gamme de services standardisés, du contrôle fiscal à la{' '}
            <span className="text-blue-600 underline">levée de fonds</span>, pour une flexibilité maximale et une tarification transparente.
          </p>
        </div>

        {/* Crédit Temps */}
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Crédit Temps</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Optez pour des packs d'heures prépayées (5, 10, 30 heures) adaptés à la complexité et à la durée de vos besoins juridiques, avec possibilité de remboursement ou de transfert si le crédit est surdimensionné.
          </p>
        </div>

        {/* Abonnements */}
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,13.85 4.63,15.55 5.68,16.91L16.91,5.68C15.55,4.63 13.85,4 12,4M12,20A8,8 0 0,0 20,12C20,10.15 19.37,8.45 18.32,7.09L7.09,18.32C8.45,19.37 10.15,20 12,20Z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Abonnements</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Bénéficiez d'un accompagnement juridique continu avec nos formules d'abonnement, offrant une prise en charge illimitée pour vos actes juridiques, conseils, et audits à partir de 1000€/mois (HT).
          </p>
        </div>

        {/* Offre Personnalisée */}
        <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-6 mx-auto">
            <svg className="w-8 h-8 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Offre Personnalisée</h3>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Une réponse sur-mesure aux besoins uniques de chaque client, garantissant clarté et la compréhension grâce au{' '}
            <span className="text-blue-600">'legal design'</span>.
          </p>
        </div>
      </div>

      {/* Notice */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm">
          Une convention d'honoraires sera signée avant le début de vos diligences.
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <Link to="/contact">
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
            Prendre rendez-vous
          </button>
        </Link>
      </div>
    </div>
  </div>
);

export default Tarifs;