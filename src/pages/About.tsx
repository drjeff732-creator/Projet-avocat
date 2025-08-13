import SEO from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const teamMembers = [
  {
    name: "Arnaud Touati",
    title: "Avocat associé et co-fondateur",
    pole: "Pôle Contractuel IP-IT",
    image: "/src/assets/arnaud-touati.png",
    description: "Son domaine d'expertise englobe les questions relatives à l'entrepreneuriat, au droit du numérique, au droit des données personnelles, ainsi qu'au droit du Web3. Avant de fonder Hashtag Avocats en 2015, Arnaud a pratiqué le droit des affaires dans de nombreux cabinets d'avocats anglo-saxons à Paris, de grandes banques d'affaires, mais également au sein de structures de taille intermédiaire.",
    expertise: ["Intelligence artificielle", "Protection des données (RGPD)", "Blockchain (ICO/STO, NFT, Web 3.0)"],
    additional: "Arnaud est également membre de l'incubateur du Barreau de Paris. Il enseigne à l'École de Formation du Barreau et dans plusieurs écoles de commerce renommées."
  },
  {
    name: "Harry Allouche",
    title: "Avocat associé et co-fondateur", 
    pole: "Pôle Corporate/Tax",
    image: "/src/assets/harry-allouche.png",
    description: "Son domaine d'expertise englobe les questions relatives à l'entrepreneuriat, au droit des affaires, ainsi qu'au droit du numérique. Avant de fonder Hashtag Avocats en 2015, Harry a cumulé des expériences à Paris et à Montréal en droit des affaires, travaillant au sein de divers cabinets d'avocats et structures de taille intermédiaire.",
    expertise: ["Droit des sociétés", "Entrepreneuriat", "Droit du commerce électronique"],
    additional: "Harry dispense également des cours dans plusieurs universités et écoles de commerce prestigieuses."
  },
  {
    name: "Elise Hausherr",
    title: "Avocate collaboratrice",
    pole: "Pôle Contractuel IP-IT", 
    image: "/src/assets/elise-hausherr.png",
    description: "Son domaine d'expertise englobe les questions relatives au droit des données personnelles, au droit du numérique et au droit du Web3. Elise a suivi une double formation droit des affaires / école de commerce. Avant de rejoindre Hashtag Avocats en 2021, Elise a cumulé huit années d'expérience au sein d'une grande société de conseil en technologies.",
    expertise: ["Fintech/Blockchain/NFT", "RGPD", "Transformation digitale"],
    additional: "Depuis son arrivée au cabinet, Elise a développé les pôles Fintech/Blockchain/NFT et RGPD."
  },
  {
    name: "Nathan Benzacken",
    title: "Avocat collaborateur",
    pole: "Pôle Contractuel IP-IT",
    image: "/src/assets/nathan-benzacken.png", 
    description: "Son domaine d'expertise englobe les questions relatives au droit du numérique et de la propriété intellectuelle. Son expérience s'est enrichie au sein de services juridiques, notamment dans le domaine de l'audiovisuel et du cinéma, ainsi qu'au sein de cabinets d'avocats.",
    expertise: ["Droit d'auteur", "Droit des marques", "Crypto-actifs et blockchain"],
    additional: "Passionné par les évolutions constantes et les défis sans cesse renouvelés du numérique."
  },
  {
    name: "Ambrine Durand",
    title: "Avocate collaboratrice",
    pole: "Pôle Corporate/Tax",
    image: "/src/assets/ambrine-durand.png",
    description: "Elle intervient dans tous les domaines de la fiscalité des entreprises et possède une expertise particulière en matière de fiscalité des transactions internationales et des restructurations. Depuis son inscription au Barreau de New York, Ambrine a développé des compétences dans le domaine de la fiscalité.",
    expertise: ["Fiscalité internationale", "Restructurations", "Web3"],
    additional: "Apporte une perspective éclairée sur les opérations de restructuration."
  },
  {
    name: "Eren Erdogan",
    title: "Juriste collaborateur", 
    pole: "Pôle Corporate/Tax",
    image: "/src/assets/eren-erdogan.png",
    description: "Il intervient dans tous les domaines de la fiscalité des entreprises et a pris part à de nombreuses missions de conseils et de contrôles fiscaux impliquant des groupes sur leurs problématiques françaises et internationales. Fort de six années d'expérience en droit des sociétés et en droit fiscal.",
    expertise: ["Restructuration de sociétés", "Levées de fonds", "Tokenisation"],
    additional: "A acquis une expertise dans la tokenisation immobilière et la tokenisation en equity."
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Qui sommes-nous ? | Hashtag Avocat" description="Découvrez l'équipe de Hashtag Avocats, cabinet spécialisé en droit du numérique, blockchain et startups." />
      
      {/* Hero Section */}
      <section className="bg-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Notre Équipe</h1>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Notre équipe est composée de professionnels passionnés et dédiés, chacun expert dans son domaine. 
              De la propriété intellectuelle et du droit numérique au droit des affaires et à la fiscalité, 
              notre équipe pluridisciplinaire a hâte de vous accompagner dans tous vos projets et défis juridiques.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{/*sm:px-6 veut dire que sur les petits ecrans on a 6px de padding*/}
          <div className="grid gap-12 md:gap-16">
            {teamMembers.map((member, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="w-full h-80 bg-gray-200 rounded-2xl overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gray-300 rounded-2xl hidden items-center justify-center">
                      <span className="text-gray-500 text-lg font-medium">{member.name}</span>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h2>
                    <p className="text-blue-600 font-semibold mb-1">{member.title}</p>
                    <p className="text-gray-600 mb-4">{member.pole}</p>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {member.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-900 mb-3">Domaines d'expertise :</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-blue-50 text-blue-700">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {member.additional}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi Hashtag Avocat Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-2xl font-bold text-gray-900 mb-12">
            POURQUOI <span className="text-blue-600">#</span>HASHTAG AVOCATS?
          </h2>
          
          <div className="space-y-6 text-gray-800 leading-relaxed text-justify">
            <p>
              Chez <strong>#Hashtag Avocats</strong>, notre mission va bien au-delà de la simple prestation de services juridiques ; elle s'ancre dans un désir ardent de faire partie intégrante de l'écosystème entrepreneurial, en évoluant aux côtés d'entreprises qui reflètent nos valeurs d'innovation, d'agilité et de transparence. Dès nos premiers pas au sein des <strong>incubateurs</strong>, des <strong>accélérateurs</strong> et des espaces de coworking, une vision claire s'est imposée à nous : être les <strong>architectes juridiques des entrepreneurs innovants</strong>, ceux qui osent redéfinir les frontières du possible. Notre vocation est née d'une synergie entre notre passion pour l'innovation et notre expertise en droit des sociétés, en droit commercial et en droit numérique. Nous avons compris que notre rôle dépassait la résolution de problématiques juridiques ; nous étions là pour construire, aux côtés de nos clients, les fondations solides sur lesquelles leurs ambitions pourraient s'élever.
            </p>
            
            <p>
              L'évolution de <strong>#Hashtag Avocats</strong> a été marquée par une série d'innovations et d'améliorations stratégiques. Inspirée par notre engagement envers l'excellence et la pertinence dans un monde en constante mutation. En adoptant des outils numériques à la pointe de la technologie, nous avons non seulement optimisé notre efficacité mais avons aussi renforcé notre proximité avec les entrepreneurs, en offrant des solutions juridiques à la fois accessibles et avant-gardistes. Notre modèle économique, disruptif et centré sur le client, témoigne de notre volonté de démocratiser l'accès au conseil juridique de qualité, en rendant nos services aussi transparents et prévisibles que possible.
            </p>
            
            <p>
              L'internationalisation et la diversification de nos activités ont marqué des étapes clés de notre croissance, nous permettant de toucher un public plus large tout en approfondissant notre expertise dans des domaines juridiques spécialisés tels que le corporate, le fiscal, le contractuel, l'IT et l'IP. Notre capacité à nous adapter sur tous nos métiers principaux, tout en établissant des collaborations stratégiques dans des domaines complémentaires, souligne notre flexibilité et notre détermination à rester à l'avant-garde des évolutions juridiques et technologiques.
            </p>
            
            <p>
              Aujourd'hui, le nouveau chapitre de <strong>#Hashtag Avocats</strong> s'ouvre avec l'ambition de franchir une nouvelle étape dans notre engagement à rester à l'avant-garde des évolutions juridiques et technologiques, assurant ainsi à nos clients une guidance éclairée dans un paysage réglementaire en perpétuelle évolution. Notre approche, centrée sur la client, se manifeste par une ambiance de <strong>travail</strong> empreinte de forme humain et un service client irréprochable, de notre conviction que la réussite de nos clients est indissociable de la nôtre.
            </p>
            
            <p>
              <strong>#Hashtag Avocats</strong> incarne plus qu'un cabinet d'avocats. Nous incarnons est d'accompagner les visionnaires et les innovateurs que vous êtes. Nous nous engageons envers nos clients à les conseiller vers l'excellence. C'est avec cette passion et cette expertise que nous vous invitons à nous rejoindre, pour qu'ensemble nous relevions les défis de demain.
            </p>
          </div>
          
          <div className="mt-12">
            <Button 
              asChild 
              className="bg-gray-800 hover:bg-black text-white px-8 py-3 text-base font-medium rounded-lg"
            >
              <Link to="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez l'Aventure</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            <strong>#Hashtag Avocats</strong> incarne plus qu'un cabinet d'avocats. Notre mission est d'accompagner 
            les visionnaires et les innovateurs que vous êtes. Nous nous engageons envers nos clients à les conduire vers l'excellence.
          </p>
          <p className="text-lg text-gray-400">
            C'est avec cette passion et cette expertise que nous vous invitons à nous rejoindre, 
            pour qu'ensemble nous relevions les défis de demain.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;