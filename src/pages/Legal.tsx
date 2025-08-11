import SEO from "@/components/SEO";

const Legal = () => {
  return (
    <div className="container py-12">
      <SEO title="Mentions légales & CGU | Hashtag Avocat" description="Mentions légales, conditions générales d'utilisation et politique de confidentialité." />
      <article className="space-y-6 font-legal leading-relaxed text-[14px]">
        <h1 className="text-3xl md:text-4xl font-bold font-display text-primary">Mentions légales & CGU</h1>
        <h2>Éditeur du site</h2>
        <p>Le site Hashtag Avocat est édité par la société Hashtag Avocat, située à Paris, France.</p>
        <h2>Hébergement</h2>
        <p>Le site est hébergé par un prestataire européen conforme au RGPD.</p>
        <h2>Propriété intellectuelle</h2>
        <p>L'ensemble du contenu de ce site (textes, images, logos) est protégé par le droit de la propriété intellectuelle.</p>
        <h2>Conditions générales d'utilisation</h2>
        <p>En accédant au site, vous acceptez sans réserve les présentes conditions. L'usage du site se fait sous votre seule responsabilité.</p>
        <h2>Politique de confidentialité & Cookies</h2>
        <p>Nous collectons le strict minimum d'informations nécessaires au bon fonctionnement du site. Vous pouvez gérer vos préférences cookies à tout moment.</p>
      </article>
    </div>
  );
};

export default Legal;
