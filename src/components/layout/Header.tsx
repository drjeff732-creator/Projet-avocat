import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, ChevronDown, Phone, X } from "lucide-react";
import logoTypo from "@/assets/logo-typo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const serviceLinks = [
    { label: "Levée de fonds", to: "/services/levee-de-fonds" },
    { label: "Droit des sociétés", to: "/services/droit-des-societes" }, 
    { label: "Droit des nouvelles technologies", to: "/services/droit-des-nouvelles-technologies" },
    { label: "Droit de la propriété intellectuelle", to: "/services/droit-propriete-intellectuelle" },
    { label: "Droit des contrats", to: "/services/droit-des-contrats" },
    { label: "Droit fiscal", to: "/services/droit-fiscal" },
    // { label: "Droit social", to: "/services/droit-social" },
    // { label: "Droit du RGPD", to: "/services/rgpd" }
  ];

  return (
    <div>
      {/* Barre d'alerte */}
      {/* <div className="bg-black text-white px-4 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex items-center">
          <span className="mr-2">⚠️</span>
          <span className="font-medium">ALERTE</span>
          <span className="mx-2">–</span>
          <span>Usurpation d'identité de Hashtag Avocats : Des e-mails frauduleux signés "Me Arnaud Touati" circulent. Ne répondez pas, ne cliquez sur aucun lien ni pièce jointe. Il s'agit d'une tentative d'escroquerie.</span>
        </div>
      </div> */}

      {/* Header principal */}
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/">
                <img src={logoTypo} alt="Hashtag Avocat" className="h-12 sm:h-16 w-auto" />
              </Link>
            </div>

            {/* Navigation desktop */}
            <nav className="hidden lg:flex items-center space-x-4">
              {/* Services avec dropdown */}
              <div className="relative flex items-center">
                <Link
                  to="/services"
                  className="text-gray-900 hover:text-black font-bold transition-colors"
                >
                  Services
                </Link>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="ml-1 p-1 text-gray-900 hover:text-black transition-colors"
                >
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                    {/* Lien vers la page Services principale */}
                    <Link
                      to="/services"
                      className="block px-4 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 hover:text-black transition-colors border-b border-gray-100"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      → Tous nos services
                    </Link>
                    
                    {/* Services spécialisés */}
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.to}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/tarifs" className="text-gray-900 hover:text-black font-bold transition-colors">
                Tarifs
              </Link>
              <Link to="/a-propos" className="text-gray-900 hover:text-black font-bold transition-colors">
                Qui sommes-nous ?
              </Link>
              <Link to="/actualites" className="text-gray-700 hover:text-black font-medium transition-colors">
                Blog
              </Link>
            </nav>

            {/* Contact et CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              <a 
                href="tel:+33757846839" 
                className="flex items-center text-gray-700 hover:text-black transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 mr-2 fill-current" />
                <span className="font-bold">+33 7 57 84 68 39</span>
              </a>
              
              <Link to="/contact" className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-md font-bold transition-colors">
                Prendre rendez-vous
              </Link>
            </div>

            {/* Menu mobile */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menu mobile ouvert */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white fixed top-20 left-0 right-0 z-40">
            <div className="px-4 py-4 space-y-4">
              {/* Services mobiles */}
              <div>
                <div className="flex items-center">
                  <Link 
                    to="/services" 
                    className="text-gray-700 font-medium hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="ml-2 p-1 text-gray-700 hover:text-black"
                  >
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                {isServicesOpen && (
                  <div className="mt-2 pl-4 space-y-2">
                    <Link
                      to="/services"
                      className="block text-sm text-blue-600 hover:text-blue-800 font-medium"
                      onClick={() => {setIsServicesOpen(false); setIsMenuOpen(false);}}
                    >
                      → Voir tous les services
                    </Link>
                    {serviceLinks.map((service, index) => (
                      <Link
                        key={index}
                        to={service.to}
                        className="block text-sm text-gray-600 hover:text-black"
                        onClick={() => {setIsServicesOpen(false); setIsMenuOpen(false);}}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/tarifs" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Tarifs
              </Link>
              <Link to="/a-propos" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Qui sommes-nous ?
              </Link>
              <Link to="/actualites" className="block text-gray-700 font-medium" onClick={() => setIsMenuOpen(false)}>
                Blog
              </Link>

              <div className="border-t pt-4 mt-4">
                <a href="tel:+33757846839" className="flex items-center text-gray-700 hover:text-black mb-3">
                  <Phone className="h-4 w-4 mr-2" />
                  <span className="font-medium">+33 7 57 84 68 39</span>
                </a>
                
                <Link to="/contact" className="block w-full bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-md font-medium transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;