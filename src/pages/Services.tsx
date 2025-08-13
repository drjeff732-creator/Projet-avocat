import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceCategories = [
    {
      title: "Droit des Affaires & Sociétés",
      services: [
        "Actionnariat salarié",
        "Augmentation de capital", 
        "Création entreprise",
        "Rachat entreprise",
        "Fusion acquisition",
        "Pacte d'associés",
        "Pacte actionnaire",
        "Start-up",
        "Levée de fonds",
        "Investissement",
        "Droit des entreprises",
        "Droit des entreprises PME",
        "Droit des affaires",
        "Droit international des affaires",
        "Responsabilité sociétale entreprises",
        "Commissaire aux comptes",
        "Dépôt des comptes",
        "Dissolution entreprise société",
        "Clause légitime",
        "Audit juridique"
      ]
    },
    {
      title: "Contentieux & Litiges",
      services: [
        "Conflit entre associés",
        "Litige commercial",
        "Litige salarié employeur",
        "Contentieux informatique",
        "Diffamation",
        "Concurrence déloyale",
        "Concurrence parasitaire",
        "Facture impayée",
        "Financier",
        "Procédure collective à Paris",
        "Liquidation judiciaire",
        "Entreprise en difficulté",
        "Contentieux IT",
        "Contentieux cyber",
        "Litiges informatiques"
      ]
    },
    {
      title: "Droit du Travail & Social",
      services: [
        "Droit du travail",
        "Contrat de travail",
        "Licenciement faute grave",
        "Rupture du contrat de travail",
        "Santé harcèlement et conditions de travail",
        "Relations collectives et CSE",
        "Droit social des dirigeants et cadres",
        "Contrôles et contentieux sociale",
        "Contentieux sociaux et prud'hommes",
        "Rémunération primes et avantages",
        "Contrats de travail et clauses spéciales",
        "Temps de travail et organisation du travail",
        "Contrôles et conformité sociale"
      ]
    },
    {
      title: "Propriété Intellectuelle",
      services: [
        "Propriété intellectuelle marques",
        "Dépôt marque propriété intellectuelle",
        "Droit propriété intellectuelle",
        "Droit d'auteur",
        "Propriété industrielle",
        "Secret des affaires",
        "Contrefaçon savoir-faire",
        "Exploitation",
        "Droit de presse",
        "Droit audiovisuel",
        "NFT droits d'auteur"
      ]
    },
    {
      title: "Nouvelles Technologies & Numérique",
      services: [
        "RGPD",
        "Données personnelles",
        "Data protection",
        "Intelligence artificielle",
        "IA",
        "Blockchain ICO",
        "Législation blockchain",
        "Web3",
        "Bitcoin",
        "Crypto actif",
        "Cybersécurité",
        "Cybercriminalité",
        "E-commerce",
        "Contrats informatiques",
        "Informatique Paris",
        "Droit numérique",
        "Chaîne informatique",
        "Marketplace",
        "Informatique Paris",
        "Fintech",
        "E-santé",
        "CGU",
        "Plateformes numériques",
        "Rédaction CGV",
        "Dropshipping",
        "Influence commerciale"
      ]
    },
    {
      title: "Droit Fiscal",
      services: [
        "Fiscalité",
        "Fiscalité à Paris",
        "Fiscalité internationale",
        "Fraude fiscale",
        "Contentieux fiscal entreprise"
      ]
    },
    {
      title: "Contrats & Partenariats",
      services: [
        "Contrat de partenariat",
        "Contrats commerciaux",
        "Formation juridique",
        "DGCCRF"
      ]
    },
    {
      title: "Arnaques & Fraudes",
      services: [
        "Arnaque crypto monnaie",
        "Arnaque au chantage affectif live scam",
        "Arnaque au remboursement de taxes ou d'impôts",
        "Arnaque au compte personnel de formation CPF",
        "Fraude aux faux placements financiers",
        "Arnaque aux faux sites de vente en ligne",
        "Phishing",
        "Vishing spoofing"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <SEO title="Services | Hashtag Avocat" description="Découvrez tous nos services juridiques spécialisés pour accompagner votre entreprise." />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 mt-20">
          <div className="text-center ">
            <h1 className="text-4xl font-bold text-gray-900">Services</h1>
          </div>
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    to="/contact"
                    className="flex items-center text-gray-600 hover:text-black hover:no-underline transition-colors duration-200 py-1"
                  >
                    <span className="text-sm">• {service}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
