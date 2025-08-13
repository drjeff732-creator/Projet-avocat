import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-hashtag-avocat.jpg";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Zap, Lock, Scale, FileSignature, Database, Users, Building, Briefcase, Gavel, Shield, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

// Import des logos média
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo8 from "@/assets/logo8.png";
import logo9 from "@/assets/logo9.png";
import logo10 from "@/assets/logo10.png";

const features = [
  { icon: ShieldCheck, title: "Expertise", text: "Droit du numérique et des startups, maîtrise technique et réglementaire." },
  { icon: Zap, title: "Réactivité", text: "Des conseils rapides et pragmatiques, adaptés à votre rythme." },
  { icon: Lock, title: "Confidentialité", text: "Sécurité et confidentialité garanties à chaque étape." },
];

const services = [
  { icon: FileSignature, title: "Conseil juridique pour startups", text: "Structuration, pactes d'associés, contrats commerciaux, conditions générales et conformité." },
  { icon: Scale, title: "Accompagnement levée de fonds", text: "Préparation, due diligence, term sheet, négociation et closing en sécurité." },
  { icon: Database, title: "Propriété intellectuelle & RGPD", text: "Protection des actifs, marques, licences, privacy by design et conformité data." },
];

const expertiseDomains = [
  {
    icon: Users,
    title: "Droit des start-up",
    description: "Nous accompagnons les innovateurs et entrepreneurs dans le labyrinthe juridique des débuts d'entreprise, offrant un soutien solide pour transformer les idées en succès.",
    image: "startup-team.jpg"
  },
  {
    icon: Building,
    title: "Droit des sociétés", 
    description: "Notre équipe fournit des conseils stratégiques pour la création, la gestion et l'évolution des entreprises, assurant une fondation juridique solide à chaque étape.",
    image: "business-meeting.jpg"
  },
  {
    icon: Shield,
    title: "Droit des nouvelles technologies",
    description: "Nous sommes à l'avant-garde du conseil juridique dans l'univers des nouvelles technologies, assurant la protection et la valorisation des innovations numériques.",
    image: "tech-innovation.jpg"
  },
  {
    icon: Lock,
    title: "Droit de la propriété intellectuelle",
    description: "Nous défendons et valorisons les créations de l'esprit, offrant une protection robuste des droits d'auteur, des marques et des brevets pour sécuriser et capitaliser sur l'innovation.",
    image: "ip-protection.jpg"
  },
  {
    icon: FileText,
    title: "Fiscalité",
    description: "Notre expertise en fiscalité vise à optimiser les obligations fiscales de nos clients tout en garantissant le respect total des lois en vigueur.",
    image: "tax-documents.jpg"
  },
  {
    icon: Briefcase,
    title: "Droit des contrats",
    description: "Notre maîtrise du droit des contrats assure la sécurité et la clarté des accords commerciaux, protégeant les intérêts de nos clients dans toutes leurs transactions.",
    image: "contract-signing.jpg"
  }
];

const clientTypes = [
  { name: "Startups", hashtag: "#" },
  { name: "E.T.I", hashtag: "#" },
  { name: "PME & PMI", hashtag: "#" },
  { name: "Grands Groupes", hashtag: "#" }
];

const mediaLogos = [
  "Le Monde du Droit",
  "Journal du Coin", 
  "Finyear",
  "LesEchos",
  "JDN"
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Hashtag Avocat | Avocats du numérique & startups" description="Cabinet d'avocats dédié au numérique et aux startups. Conseil, levées de fonds, contrats, RGPD & propriété intellectuelle." />

      {/* Hero Section */}
      <section className="bg-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-3xl lg:text-3xl font-bold text-gray-900 leading-tight">
                  Cabinet d'avocats dédié au <span className="text-gray-900">numérique, blockchain & startup</span>
                </h1>
                
                {/* Google Reviews */}
                <div className="flex items-center space-x-2 my-6">
                  <span className="text-sm font-semibold text-gray-900 text-black px-2 py-1 rounded">EXCELLENT</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">126 avis</span>
                  <span className="text-sm font-medium text-blue-600">Google</span>
                </div>

                {/* Features avec icônes */}
                <div className="flex items-center space-x-8 text-sm text-gray-700 my-6">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">À l'écoute</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Disponible</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Flexible</span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Hashtag Avocats vous accompagne en <strong>droit des Start up</strong>, <Link to="/services/droit-des-nouvelles-technologies" className="text-gray-600 underline hover:no-underline">nouvelles technologies</Link>, <Link to="/services/droit-des-nouvelles-technologies" className="text-gray-600 underline hover:no-underline">blockchain</Link>, <strong>Web 3 propriété intellectuelle</strong>, <strong>RGPD</strong>, <strong>fiscalité</strong> et <strong>entrepreneuriat</strong>. Nous proposons des solutions juridiques personnalisées pour sécuriser vos projets et stimuler votre croissance.
                </p>
              </div>
              
              <div className="pt-4">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-gray-800 hover:bg-black text-white px-8 py-4 text-base font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Équipe Hashtag Avocats - Cabinet d'avocats spécialisé en numérique et startups" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-16 bg-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">Retrouver nos chroniques dans les médias:</h2>
          
          {/* Logos défilants */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* Premier set de logos */}
              <div className="flex items-center justify-center gap-8 min-w-full flex-shrink-0">
                <img src={logo1} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo2} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo3} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo4} alt="Média partenaire" className="h-16 w-auto object-contain" />
                {/* <img src={logo8} alt="Média partenaire" className="h-16 w-auto object-contain" /> */}
                <img src={logo9} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo10} alt="Média partenaire" className="h-16 w-auto object-contain" />
              </div>
              
              {/* Deuxième set de logos (pour la continuité) */}
              <div className="flex items-center justify-center gap-8 min-w-full flex-shrink-0">
                <img src={logo1} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo2} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo3} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo4} alt="Média partenaire" className="h-16 w-auto object-contain" />
                {/* <img src={logo8} alt="Média partenaire" className="h-16 w-auto object-contain" /> */}
                <img src={logo9} alt="Média partenaire" className="h-16 w-auto object-contain" />
                <img src={logo10} alt="Média partenaire" className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animation */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          
          .animate-scroll {
            animation: scroll 120s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Domaines d'Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-xl md:text-4xl font-bold text-center text-black mb-12">DOMAINES D'EXPERTISE</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Droit des start-up */}
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Droit des start-up" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Droit des start-up
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Nous accompagnons les innovateurs et entrepreneurs dans le labyrinthe juridique des débuts d'entreprise, offrant un soutien solide pour transformer les idées en succès.
                </p>
              </div>
            </div>

            {/* Droit des sociétés */}
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Droit des sociétés" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Droit des sociétés
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Notre équipe fournit des conseils stratégiques pour la création, la gestion et l'évolution des entreprises, assurant une fondation juridique solide à chaque étape.
                </p>
              </div>
            </div>

            {/* Droit des nouvelles technologies */}
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Droit des nouvelles technologies" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Droit des nouvelles technologies
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Nous sommes à l'avant-garde du conseil juridique dans l'univers des nouvelles technologies, assurant la protection et la valorisation des innovations numériques.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://hashtagavocats.com/wp-content/uploads/2024/03/7-min-768x480.jpg" 
                  alt="Droit des contrats" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Droit des contrats
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                Le droit des contrats est un domaine du droit civil qui régit les accords conclus entre deux ou plusieurs parties. Le cabinet d'avocats Hashtag Avocat à Paris offre une expertise variée et évolutive pour la gestion de vos affaires contractuelles.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://hashtagavocats.com/wp-content/uploads/2024/03/6-min-768x480.jpg" 
                  alt="Fiscalié" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Fiscalié
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Hashtag Avocat cabinet fiscaliste à Paris peut vous accompagner dans vos démarches et vous conseiller pour optimiser votre situation fiscale.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-6">
                <img 
                  src="https://hashtagavocats.com/wp-content/uploads/2024/03/5-min-768x480.jpg" 
                  alt="droit de la propriété intellectuelle" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  <span className="text-gray-600">#</span> Droit de la propriété intellectuelle
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                Notre rôle consiste à vous guider dans les dépôts de marques, brevets et dessins et modèles, mais également à anticiper les potentielles violations grâce à une surveillance proactive et des audits réguliers
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-16">
        <div className="max-w-4xl bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center" style={{borderRadius:30}}>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">NOUS ACCOMPAGNONS PRINCIPALEMENT</h2>
          <div className="inline-flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {clientTypes.map((client, index) => (
              <div key={index} className="flex items-center space-x-2 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-xl font-bold text-gray-600">#</span>
                <span className="text-lg font-semibold text-gray-900">{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Actualités Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">ACTUALITÉS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-0">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-48 sm:h-56 md:h-48 w-full bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
              }}></div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Qui contrôle la blockchain ? Analyse de la gouvernance et des mécanismes de régulation
                </h3>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              <div className="h-48 sm:h-56 md:h-48 w-full bg-cover bg-center" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
              }}></div>
              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight">
                  Différences juridiques entre propriété intellectuelle et propriété industrielle : comprendre les séparations essentielles
                </h3>
              </div>
            </div>
          </div>

          {/* Bouton Voir plus */}
          <div className="mt-10 text-center">
            <Button 
              asChild 
              className="bg-gray-800 hover:bg-black text-white px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-lg"
            >
              <Link to="/actualites">Voir toutes les actualités</Link>
            </Button>
          </div>
        </div>
      </section>


      {/* Comment commencer Section */}
      <section className="py-20">
        <div className="max-w-4xl bg-gray-100 mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center" style={{borderRadius: 30}}>
          <h2 className="text-4xl font-bold text-gray-900 mb-16">COMMENT COMMENCER?</h2>
          
          <div className="relative max-w-md mx-auto">
            {/* Ligne verticale à gauche */}
            <div className="absolute left-6 top-0 w-0.5 bg-gray-400 h-60"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-start">
                {/* Point sur la ligne */}
                <div className="w-4 h-4 bg-gray-800 rounded-full mt-2 relative z-10"></div>
                
                {/* Contenu à droite */}
                <div className="ml-8 flex flex-col items-center text-center">
                  {/* Bouton */}
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gray-800 hover:bg-black text-white px-8 py-3 text-base font-medium rounded-lg mb-6"
                  >
                    <Link to="/contact">Prendre rendez-vous</Link>
                  </Button>
                  
                  {/* Texte descriptif */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Définition de vos besoins, du temps et du prix</h3>
                    <p className="text-gray-600">À la mission, à l'heure ou en abonnement</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start">
                {/* Point sur la ligne */}
                <div className="w-4 h-4 bg-gray-800 rounded-full mt-2 relative z-10"></div>
                
                {/* Contenu à droite */}
                <div className="ml-8 flex flex-col items-center text-center">
                  {/* Bouton */}
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="ml-20 border-gray-800 text-gray-800 hover:bg-gray-50 px-8 py-3 text-base font-medium rounded-lg mb-6 bg-white"
                  >
                    <Link to="/tarifs">Voir les offres</Link>
                  </Button>
                  
                  {/* Texte descriptif */}
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Début de la mission</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos de l'entreprise */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-gray-800 leading-relaxed">
            
            {/* Titre principal */}
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6">{/*md:text-3xl veut dire que le titre est plus grand sur les ordinateurs*/}
                DROIT DES START-UP ET CRÉATION D'ENTREPRISE : UN ACCOMPAGNEMENT JURIDIQUE PERSONNALISÉ À PARIS
              </h2>
              <p className="text-lg mb-4">
                Les <strong>entrepreneurs</strong> lancent leurs <strong>startups</strong> dans un univers législatif évoluant. Les premiers pas imposent une structure solide, encadrée par un <strong>cabinet avocats</strong> spécialisé. Les <strong>avocats</strong> du droit des start-up, Les <strong>cabinets</strong> d'avocats parisiens, sécurisent leurs informations stratégiques et les aident sur leur <strong>propriété intellectuelle</strong>. Les avocats assurent un accompagnement de mesure, Information des données claires et toujours des actions concrètes. Les avocats choisissent des statuts adaptés, comme la <strong>SAS</strong> ou la <strong>BSA</strong>, pour légitimer un <strong>cadre</strong> juridique robuste. Les services juridiques, disponibles, dès la création d'entreprise, préviennent les litiges et optimisent chaque phase de développement.
              </p>
            </div>

            {/* Des fondations solides */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Des fondations solides pour grandir sereinement</h3>
              <p className="mb-4">
                Les <strong>entrepreneurs</strong> exigent des conseils opérationnels, taillés pour leur réalité. Le <strong>cabinet avocat</strong> maîtrise le <strong>droit sociétés</strong>, anticipe les enjeux fiscaux et s'aligne sur les évolutions légales. Les professionnels rédigent chaque <strong>contrat</strong> avec soin, gèrent la <strong>structure juridique</strong> pour ajuster chaque clause, assurent une cohérence optimale. Les clients choisissent les modalités de chaque règle, prennent des décisions structurées et renforcent leur crédibilité. Cette approche privilégie la cohésion interne de l'<strong>entreprise</strong>, stimule son positionnement concurrentiel et effectue sa régulation. Les avocats expliquent un <strong>fil conceptuel concret</strong>, sans laisser des zones floues.
              </p>
            </div>

            {/* Stratégies juridiques */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">STRATÉGIES JURIDIQUES POUR LE DÉVELOPPEMENT DES STARTUP</h3>
              <p className="mb-4">
                Les <strong>start-ups</strong> recherchent un <strong>accompagnement juridique</strong> précis, réactif et en phase avec leur rythme. Les avocats alignent le cadre légal sur le business model, proposent un <strong>statut juridique</strong> sur mesure et interviennent selon les besoins. Les fondateurs obtiennent des solutions immédiates, personnalisées, raccordées à leurs objectifs. Les experts négocient les <strong>contrats</strong>, sécurisent les parties d'associés, intègrent des actions gratuites (type <strong>BSPCE</strong>) et explorent les dispositifs fiscaux pertinents. Les avocats conçoivent une approche proactive, assurent une veille réglementaire continue, détectent les risques et protègent la startup. Les <strong>entrepreneurs</strong> consacrent leur énergie à l'innovation, sans entraves juridiques.
              </p>
            </div>

            {/* Optimisation fiscale */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Optimisation fiscale et pilotage juridique</h3>
              <p className="mb-4">
                Les <strong>entreprises</strong> utilisent l'expertise <strong>fiscal</strong> pour alléger leurs charges, respecter les lois et planifier l'avenir. Les avocats qualifient la fiscalité en fonction de la taille, du secteur et du potentiel de croissance. Les professionnels proposent des solutions évolutives, préviennent les contrôles et préservent la rentabilité. Cette <strong>stratégie légère</strong> des ressources, renforce la trésorerie et consolide le capital. Les fondateurs orchestrent un <strong>développement stratégique</strong>, sans angles morts. Chaque décision juridique s'aligne sur une vision claire, cohérente et durable.
              </p>
            </div>

            {/* Des contrats sur mesure */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Des contrats sur mesure pour chaque phase</h3>
              <p className="mb-4">
                Les avocats rédigent des <strong>contrats</strong> personnalisés, fidèles aux obligations légales et aux enjeux commerciaux. Les documents définissent les responsabilités, précisent les objectifs et créent les indemnités. Les équipes internes connaissent leurs missions, évitent les malentendus et fluidifient le fonctionnement. Les partenaires externes approuvent aisément des <strong>conditions</strong> transparentes, renforcent la relation professionnelle. Cette contractualisation protège l'<strong>entreprise</strong>, soutient sa croissance et sécurise son expansion. Les fondateurs exploitent chaque opportunité, sans subir d'imprévus juridiques.
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">PROTÉGER ET VALORISER LA PROPRIÉTÉ INTELLECTUELLE</h3>
              <p className="mb-4">
                Les avocats spécialisés en <strong>propriété intellectuelle</strong> défendent les innovations, marques, <strong>brevets</strong>, droits d'auteur. Les <strong>start up</strong> exploitent leurs créations, conçoivent leurs outils juridiques et sécurisent leur avantage sur le marché. Les conseils juridiques définit les <strong>droits de marques</strong>, testent la disponibilité des noms et anticipent les litiges. Les entrepreneurs renforcent leur singularité, se différencient des concurrents et consolident leur réputation. Les investisseurs soutiennent volontiers une structure juridiquement saine, apte à capitaliser sur ses idées. Les fondateurs valorisent leur propriété intellectuelle, préparent une expansion internationale sans limites.
              </p>
            </div>

            {/* Défendre chaque innovation */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Défendre chaque innovation face à la concurrence</h3>
              <p className="mb-4">
                Les <strong>start-up</strong> subissent leurs concurrents, veillent la disponibilité des marques proches et préservent leurs inventions. Les avocats, experts en <strong>droit propriété intellectuelle</strong>, surveillent le marché et interviennent face aux atteintes. Les <strong>entrepreneurs</strong> contrecarrent les violations de marque, protègent leurs brevets et consolident leurs contrats de R&D. Les structures conservent l'avantage, structurent leur innovation et confortent leur place sur le marché. Chaque nouveauté technologique devient un atout stratégique, maîtrisé et valorisé.
              </p>
            </div>

            {/* Droit des nouvelles technologies */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">DROIT DES NOUVELLES TECHNOLOGIES ET WEB3</h3>
              <p className="mb-4">
                Les technologies émergentes transforment le paysage légal, les <strong>start up</strong> Web3 évoluent dans un contexte réglementaire mouvant. Les avocats compétents en <strong>droit nouvelles technologies</strong> encadrent la conformité RGPD, la sécurité des données et les <strong>smart contracts</strong>. Les fondateurs explorent la blockchain, exploitent les NFT, gèrent les cryptomonnaies, tout en respectant leurs obligations légales. Les conseils <strong>juridiques</strong> fixent le cadre, préviennent les litiges, rassurent les investisseurs et clarifient les règles. Chaque projet s'adapte aux spécificités du paysage légal précis, préparé aux mutations technologiques. Les <strong>startups</strong> construisent ainsi des bases solides, prêtes à affronter chaque transformation numérique.
              </p>
            </div>

            {/* Mise en conformité RGPD */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mise en conformité RGPD et sécurité des données</h3>
              <p className="mb-4">
                Les avocats examinent les flux d'informations, identifient les données sensibles et conseillent des mesures adaptées. Les <strong>entrepreneurs</strong> protègent la vie privée, engagent la confiance et bâtissent leur image. Les conseils <strong>juridiques</strong> définissent les procédures, assurent la traçabilité et répondent aux demandes d'accès. Les fondateurs évitent les sanctions, préservent leur réputation et créent un environnement numérique sûr. Cette conformité nourrit une relation transparente avec la clientèle. Les <strong>startups</strong> profitent d'un avantage concurrentiel, fruit d'une gouvernance respectueuse.
              </p>
            </div>

            {/* Sécuriser les NFT */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sécuriser les NFT, les smart contracts et les assets digitaux</h3>
              <p className="mb-4">
                Les <strong>startups</strong> Web3 protègent leurs NFT, leurs contrats intelligents et leurs actifs dématérialisés. Les avocats comprennent les subtilités juridiques, rédigent des contrats clairs, préviennent les conflits et sécurisent les transactions. Les fondateurs contrôlent leurs droits, organisent la propriété, garantissent la légitimité des transferts. Les conseils <strong>juridiques</strong> accompagnent chaque transaction, évaluent les risques et soutiennent le projet. Les <strong>entreprises</strong> profitent d'un cadre juridique propre, adapté aux spécificités du Web3. Cette sécurisation transforme chaque innovation digitale en valeur pérenne.
              </p>
            </div>

            {/* Offres flexibles */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">OFFRES FLEXIBLES : MISSION PONCTUELLE, HORAIRE OU ABONNEMENT JURIDIQUE ILLIMITÉ</h3>
              <p className="mb-4">
                Les <strong>entrepreneurs</strong> souhaitent un <strong>accompagnement juridique</strong> réactif, modulaire et prévisible. Les avocats proposent un <strong>abonnement juridique illimité</strong>, une tarification horaire ou une mission ciblée. Chaque formule s'adapte à la maturité de la <strong>startup</strong>, à ses priorités financières et à ses ambitions. Les fondateurs prévoient leurs dépenses, évitent les dépassements et maintiennent une relation continue avec le <strong>cabinet avocats</strong>. Les conseils <strong>juridiques</strong> anticipent chaque besoin, réveillent les contrats, guident l'<strong>entreprise</strong> et les <strong>startups</strong> avancent sereinement, soutenues par une expertise toujours disponible.
              </p>
            </div>

            {/* Transparence des coûts */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Transparence des coûts et prévision budgétaire</h3>
              <p className="mb-4">
                Les avocats définissent leurs honoraires, facturent clairement chaque intervention et présentent le périmètre des missions. Les <strong>entrepreneurs</strong> comprennent le modèle, ajustent leurs choix, reçoivent les ressources nécessaires. Cette transparence supprime les surprises, renforce la confiance et consolide la relation. Les fondateurs contactent aisément le cabinet, obtiennent des réponses rapides, fixent des rendez-vous précis. L'adhésion pensante G1 Av. Franklin Delano Roosevelt offre une accessibilité commune, un accueil chaleureux et une communication fluide. Cette proximité facilite les échanges, fortifie le lien humain et accélère la prise de décision.
              </p>
            </div>

            {/* Un soutien continu */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Un soutien continu pour accompagner la croissance</h3>
              <p className="mb-4">
                Les <strong>startups</strong> évoluent vite, les avocats s'adaptent, soutiennent chaque pivot stratégique et orientent les décisions globales. Les fondateurs modifient leur capital, intègrent de nouveaux contrôles, négocient de nouveaux contrats. Les conseils <strong>juridiques</strong> interviennent sans interruption, grâce à l'<strong>abonnement juridique illimité</strong>. Cette réactivité garantit une cohérence, chaque action suit un cadre légal précis. Les fondateurs s'appuient sur un appui solide, agile, focalisé sur la réussite. Le cabinet met toute son énergie pour soutenir la croissance et guider l'ambition.
              </p>
            </div>

            {/* Pourquoi choisir un cabinet avocats startups */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">POURQUOI CHOISIR UN CABINET AVOCATS STARTUPS À PARIS ?</h3>
              <p className="mb-4">
                Les fondateurs explorent un écosystème fertile, un terreau d'investisseurs, d'incubateurs, d'accélérateurs. Les avocats parisiens comprennent les enjeux, anticipent les besoins, partagent leur expérience. Les clients bénéficient d'une réactivité immédiate, d'un accès simplifié aux ressources et d'une connaissance pointue de l'environnement entrepreneurial. Les <strong>entrepreneurs</strong> exploitent des contacts privilégiés, un réseau étendu, un soutien opérationnel réactif. Les conseils <strong>juridiques</strong> parisiens assurent un suivi global, embrassent les tendances internationales et pilotent la conformité. Cette synergie génère une dynamique vertueuse, propice à l'expansion et à la reconnaissance.
              </p>
            </div>

            {/* Expertise pluridisciplinaire */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expertise pluridisciplinaire et connaissance sectorielle</h3>
              <p className="mb-4">
                Les avocats regroupent leurs compétences, couvrent le <strong>droit des sociétés</strong>, la <strong>fiscalité</strong>, les <strong>startups</strong> technologiques. Les <strong>entrepreneurs</strong> obtiennent des réponses transversales, s'affranchissent d'une stratégie globale. Les équipes pluridisciplinaires échangent leurs expertises, développent une approche collaborative et renforcent leurs performances. Les fondateurs gagnent du temps, consolident leurs démarches, assurent une cohérence entre chaque domaine. Les avocats se présentent comme des alliés fiables, engagés et motivés par la performance. Les solutions proposées découlent d'analyses ciblées, précises et concrètes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            FAQ : QUESTIONS FRÉQUENTES SUR L'ACCOMPAGNEMENT JURIDIQUE DES STARTUPS
          </h2>
          
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment choisir un avocat startup ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Privilégier un <strong>cabinet avocats</strong> habitué aux <strong>startups</strong>, maîtrisant le <strong>droit affaires</strong>, les <strong>contrats</strong> et la <strong>propriété intellectuelle</strong>.
              </p>
            </div>

            {/* Question 2 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quel budget prévoir ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Adapter le coût à la complexité du dossier, recourir à l'<strong>abonnement juridique illimité</strong> pour anticiper les frais.
              </p>
            </div>

            {/* Question 3 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment protéger la propriété intellectuelle ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Déposer les marques, brevets, surveiller les concurrents, encadrer les contrats de cession et de licence.
              </p>
            </div>

            {/* Question 4 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pourquoi un abonnement illimité ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Bénéficier d'un suivi permanent, obtenir des réponses en continu, ne subir aucune incertitude financière.
              </p>
            </div>

            {/* Question 5 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Comment assurer la conformité RGPD ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Analyser les données, adopter des process stricts, garantir la traçabilité et rassurer les utilisateurs.
              </p>
            </div>

            {/* Question 6 */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Où rencontrer l'équipe ?</h3>
              <p className="text-gray-700 leading-relaxed">
                Rendez-vous au 51 Av. Franklin Delano Roosevelt, 75008 Paris, ou contacter par téléphone ou email pour un échange humain, direct et professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;