import { Phone, Mail, Calendar, MapPin, Linkedin, Facebook } from "lucide-react";
import { useLocation } from "react-router-dom";
import logoTypo from '../../assets/logo-typo.png';

const Footer = () => {
  const location = useLocation();
  const isServicesPage = location.pathname === '/services';
  return (
    <footer className="bg-gray-200 text-gray-800 pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Colonne 1: Logo et coordonnées */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logoTypo} alt="Hashtag Cabinet d'Avocats" className="h-16 w-auto" />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 mt-1 text-gray-600" />
                <a href="tel:+33757828006" className="text-sm hover:text-blue-600 transition-colors">+33 7 57 82 80 06</a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 mt-1 text-gray-600" />
                <span className="text-sm"><a href="mailto:pierre.philipot-amf@proton.me?subject=Demande d'information&body=Bonjour ...">pierre.philipot-amf@proton.me</a></span>
              </div>
              
              <div className="flex items-start space-x-3">
                <Calendar className="w-4 h-4 mt-1 text-gray-600" />
                <span className="text-sm">Rendez-vous</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-gray-600" />
                <div className="text-sm">
                  51 Av. Franklin Delano<br />
                  Roosevelt, 75008 Paris
                </div>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            {/* <div className="flex space-x-2">
              <a href="contact" className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="contact" className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="contact" className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span className="text-xs font-bold">X</span>
              </a>
              <a href="contact" className="w-8 h-8 bg-gray-700 text-white flex items-center justify-center hover:bg-gray-600 transition-colors">
                <span className="text-xs font-bold">IG</span>
              </a>
            </div> */}
          </div>

          {/* Colonne 2: Horaires d'ouverture */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Horaires d'ouverture</h3>
            <div className="space-y-2 text-sm">
              <div>lundi : 8h–20h</div>
              <div>mardi : 8h–20h</div>
              <div>mercredi : 8h–20h</div>
              <div>jeudi : 8h–20h</div>
              <div>vendredi : 8h–20h</div>
            </div>
          </div>

          {/* Colonne 3: Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Services</h3>
            <div className="space-y-2 text-sm">
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Levée de fonds</span>
                ) : (
                  <a href="services/levee-de-fonds" className="hover:underline">Levée de fonds</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit des sociétés</span>
                ) : (
                  <a href="services/droit-des-societes" className="hover:underline">Droit des sociétés</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit des nouvelles technologies</span>
                ) : (
                  <a href="services/droit-des-nouvelles-technologies" className="hover:underline">Droit des nouvelles technologies</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit de la propriété intellectuelle</span>
                ) : (
                  <a href="services/droit-propriete-intellectuelle" className="hover:underline">Droit de la propriété intellectuelle</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit des contrats</span>
                ) : (
                  <a href="services/droit-des-contrats" className="hover:underline">Droit des contrats</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit fiscal</span>
                ) : (
                  <a href="services/droit-fiscal" className="hover:underline">Droit fiscal</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit social</span>
                ) : (
                  <a href="services/droit-social" className="hover:underline">Droit social</a>
                )}
              </div>
              <div>
                {isServicesPage ? (
                  <span className="text-gray-500 cursor-not-allowed">Droit du RGPD</span>
                ) : (
                  <a href="services/rgpd" className="hover:underline">Droit du RGPD</a>
                )}
              </div>
            </div>
          </div>

          {/* Colonne 4: Liens utiles */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-black">Liens utiles</h3>
            <div className="space-y-2 text-sm">
              <div><a href="contact" className="hover:underline">Tarifs</a></div>
              <div><a href="a-propos" className="hover:underline">Qui sommes-nous?</a></div>
              <div><a href="actualites" className="hover:underline">Blog</a></div>
            </div>
          </div>
        </div>

        {/* Section des liens supplémentaires */}
        <div className="mb-8">
          <div className="text-xs text-gray-600 leading-relaxed space-y-1">
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Actionnariat salarié</a> |
              <a href="contact" className="underline hover:no-underline">Augmentation de capital</a> |
              <a href="contact" className="underline hover:no-underline">Conflit entre associés</a> |
              <a href="contact" className="underline hover:no-underline">Contrat de partenariat</a> |
              <a href="contact" className="underline hover:no-underline">Création entreprise</a> |
              <a href="contact" className="underline hover:no-underline">Rachat entreprise</a> |
              <a href="contact" className="underline hover:no-underline">Responsabilité sociétale entreprises</a> |
              <a href="contact" className="underline hover:no-underline">Licenciement faute grave</a> |
              <a href="contact" className="underline hover:no-underline">Litige commercial</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Litige salarié employeur</a> |
              <a href="contact" className="underline hover:no-underline">Arnaque crypto monnaie</a> |
              <a href="contact" className="underline hover:no-underline">Pacte actionnaire</a> |
              <a href="contact" className="underline hover:no-underline">Commissaire aux comptes</a> |
              <a href="contact" className="underline hover:no-underline">Fiscaliste</a> |
              <a href="contact" className="underline hover:no-underline">Fraude fiscale</a> |
              <a href="contact" className="underline hover:no-underline">Données personnelles</a> |
              <a href="contact" className="underline hover:no-underline">Contrat de travail</a> |
              <a href="contact" className="underline hover:no-underline">Contrats commerciaux</a> |
              <a href="contact" className="underline hover:no-underline">Contrats informatiques</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Facture impayée</a> |
              <a href="contact" className="underline hover:no-underline">Droit des sociétés</a> |
              <a href="contact" className="underline hover:no-underline">Contentieux fiscal entreprise</a> |
              <a href="contact" className="underline hover:no-underline">Dépôt des comptes</a> |
              <a href="contact" className="underline hover:no-underline">Dissolution entreprise société</a> |
              <a href="contact" className="underline hover:no-underline">Droit des affaires</a> |
              <a href="contact" className="underline hover:no-underline">Droit des entreprises</a> |
              <a href="contact" className="underline hover:no-underline">Droit des entreprises PME</a> |
              <a href="contact" className="underline hover:no-underline">Droit du travail</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Droit international des affaires</a> |
              <a href="contact" className="underline hover:no-underline">Entreprise en difficulté</a> |
              <a href="contact" className="underline hover:no-underline">Fusion acquisition</a> |
              <a href="contact" className="underline hover:no-underline">Pacte d'associés</a> |
              <a href="contact" className="underline hover:no-underline">Start-up</a> |
              <a href="contact" className="underline hover:no-underline">Propriété intellectuelle marques</a> |
              <a href="contact" className="underline hover:no-underline">Dépôt marque propriété intellectuelle</a> |
              <a href="contact" className="underline hover:no-underline">Droit propriété intellectuelle</a> |
              <a href="contact" className="underline hover:no-underline">E-réputation</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Propriété industrielle</a> |
              <a href="contact" className="underline hover:no-underline">Fiscaliste à Paris</a> |
              <a href="contact" className="underline hover:no-underline">Fiscaliste</a> |
              <a href="contact" className="underline hover:no-underline">Bitcoin</a> |
              <a href="contact" className="underline hover:no-underline">Contentieux informatique</a> |
              <a href="contact" className="underline hover:no-underline">Informatique Paris</a> |
              <a href="contact" className="underline hover:no-underline">Rédaction CGV</a> |
              <a href="contact" className="underline hover:no-underline">Droit audiovisuel</a> |
              <a href="contact" className="underline hover:no-underline">Droit numérique</a> |
              <a href="contact" className="underline hover:no-underline">Fiscaliste international</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Propriété intellectuelle marques</a> |
              <a href="contact" className="underline hover:no-underline">RGPD à Paris</a> |
              <a href="contact" className="underline hover:no-underline">En droit de la propriété intellectuelle</a> |
              <a href="contact" className="underline hover:no-underline">Diffamation</a> |
              <a href="contact" className="underline hover:no-underline">Concurrence déloyale</a> |
              <a href="contact" className="underline hover:no-underline">Mentions légales</a> |
              <a href="contact" className="underline hover:no-underline">Financier</a> |
              <a href="contact" className="underline hover:no-underline">Procédure collective à Paris</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Liquidation judiciaire</a> |
              <a href="contact" className="underline hover:no-underline">RGPD</a> |
              <a href="contact" className="underline hover:no-underline">DGCCRF</a> |
              <a href="contact" className="underline hover:no-underline">Audit juridique</a> |
              <a href="contact" className="underline hover:no-underline">Secret des affaires</a> |
              <a href="contact" className="underline hover:no-underline">Protection savoir-faire</a> |
              <a href="contact" className="underline hover:no-underline">Cybercriminalité</a> |
              <a href="contact" className="underline hover:no-underline">Cybersécurité</a> |
              <a href="contact" className="underline hover:no-underline">Data protection</a> |
              <a href="contact" className="underline hover:no-underline">Avocats contentieux IT</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Contentieux cyber</a> |
              <a href="contact" className="underline hover:no-underline">Charte informatique</a> |
              <a href="contact" className="underline hover:no-underline">Formation juridique</a> |
              <a href="contact" className="underline hover:no-underline">Concurrence parasitaire</a> |
              <a href="contact" className="underline hover:no-underline">Droit de presse</a> |
              <a href="contact" className="underline hover:no-underline">En droit d'auteur</a> |
              <a href="contact" className="underline hover:no-underline">Influence commerciale</a> |
              <a href="contact" className="underline hover:no-underline">Litiges informatiques</a> |
              <a href="contact" className="underline hover:no-underline">Marketplaces</a> |
              <a href="contact" className="underline hover:no-underline">Plateformes numériques</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Droit des contrats à Paris</a> |
              <a href="contact" className="underline hover:no-underline">Arnaque au chantage affectif love scam</a> |
              <a href="contact" className="underline hover:no-underline">Arnaque au remboursement de taxes ou d'impôts</a> |
              <a href="contact" className="underline hover:no-underline">Clause agrément</a> |
              <a href="contact" className="underline hover:no-underline">Investissement</a> |
              <a href="contact" className="underline hover:no-underline">E-santé</a> |
              <a href="contact" className="underline hover:no-underline">Phishing</a> |
              <a href="contact" className="underline hover:no-underline">Vishing spoofing</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Dropshipping</a> |
              <a href="contact" className="underline hover:no-underline">Arnaque au compte personnel de formation CPF</a> |
              <a href="contact" className="underline hover:no-underline">Fraude aux faux placements financiers</a> |
              <a href="contact" className="underline hover:no-underline">Levée de fonds</a> |
              <a href="contact" className="underline hover:no-underline">CGU</a> |
              <a href="contact" className="underline hover:no-underline">E-commerce</a> |
              <a href="contact" className="underline hover:no-underline">IA</a> |
              <a href="contact" className="underline hover:no-underline">Web3</a> |
              <a href="contact" className="underline hover:no-underline">Législation blockchain</a> |
              <a href="contact" className="underline hover:no-underline">Nouvelles technologies à Paris</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Blockchain ICO</a> |
              <a href="contact" className="underline hover:no-underline">NFT droits d'auteur</a> |
              <a href="contact" className="underline hover:no-underline">Intelligence artificielle</a> |
              <a href="contact" className="underline hover:no-underline">Offres d'emploi</a> |
              <a href="contact" className="underline hover:no-underline">Fintech</a> |
              <a href="contact" className="underline hover:no-underline">Arnaque aux faux sites de vente en ligne</a> |
              <a href="contact" className="underline hover:no-underline">Droit social</a> |
              <a href="contact" className="underline hover:no-underline">Droit social des dirigeants et cadres</a> |
              <a href="contact" className="underline hover:no-underline">Contrôles et conformité sociale</a> |
            </div>
            
            <div className="flex flex-wrap gap-x-1">
              <a href="contact" className="underline hover:no-underline">Contentieux sociaux et prud'hommes</a> |
              <a href="contact" className="underline hover:no-underline">Santé harcèlement et conditions de travail</a> |
              <a href="contact" className="underline hover:no-underline">Relations collectives et CSE</a> |
              <a href="contact" className="underline hover:no-underline">Rupture du contrat de travail</a> |
              <a href="contact" className="underline hover:no-underline">Rémunération primes et avantages</a> |
              <a href="contact" className="underline hover:no-underline">Contrats de travail et clauses sensibles</a> |
              <a href="contact" className="underline hover:no-underline">Temps de travail et organisation du travail</a> |
              <a href="contact" className="underline hover:no-underline">Crypto actif</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-400 pt-6">
        </div>
      </div>
      
      {/* Copyright bar - full width */}
      <div className="bg-black text-white text-center py-4 w-full">
        <p className="text-sm">© 2025 | Hashtag Avocats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;