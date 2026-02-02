import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import logoTypo from '../assets/logo-typo.png';
import { useState } from 'react';

const schema = z.object({
  civilite: z.string().min(1, "Champ requis"),
  nom: z.string().min(1, "Champ requis"),
  societe: z.string().optional(),
  telephone: z.string().optional(),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ 
    resolver: zodResolver(schema) 
  });
  
  const [mailtoLink, setMailtoLink] = useState<string | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  const processForm = (data: FormData) => {
    try {
      console.log('Données du formulaire:', data);

      const subject = encodeURIComponent(`[Contact] Demande de rendez-vous - ${data.nom}`);
      const body = encodeURIComponent(
        `Civilité: ${data.civilite}\nNom: ${data.nom}\nSociété: ${data.societe || "-"}\nTéléphone: ${data.telephone || "-"}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
      );
      
      const generatedMailtoLink = `mailto:pierre.philipot-amf@proton.me?subject=${subject}&body=${body}`;
      console.log('Lien mailto:', generatedMailtoLink);
      
      // Sauvegarder le lien pour le fallback
      setMailtoLink(generatedMailtoLink);
      
      // Méthode 1: Essayer window.open avec target _blank
      const mailWindow = window.open(generatedMailtoLink, '_blank');
      
      // Vérifier si la fenêtre s'est ouverte
      setTimeout(() => {
        if (!mailWindow || mailWindow.closed) {
          // Si ça n'a pas marché, essayer la méthode du lien temporaire
          const tempLink = document.createElement('a');
          tempLink.href = generatedMailtoLink;
          tempLink.style.display = 'none';
          document.body.appendChild(tempLink);
          tempLink.click();
          document.body.removeChild(tempLink);
          
          // Après un délai, montrer le fallback
          setTimeout(() => {
            setShowFallback(true);
          }, 2000);
        }
      }, 500);
      
    } catch (error) {
      console.error('Erreur:', error);
      alert(`Une erreur est survenue: ${error}`);
    }
  };

  const copyToClipboard = async () => {
    if (mailtoLink) {
      try {
        await navigator.clipboard.writeText(mailtoLink);
        alert('Lien copié dans le presse-papiers !');
      } catch (err) {
        console.error('Erreur lors de la copie:', err);
        // Fallback pour navigateurs qui ne supportent pas clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = mailtoLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Lien copié dans le presse-papiers !');
      }
    }
  };

  // Simplifier la gestion du submit
  const onSubmit = handleSubmit(processForm);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <SEO title="Prendre rendez-vous | Hashtag Avocat" description="Contactez notre cabinet d'avocats spécialisé en droit du numérique et des startups." />
      
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="mb-6">
              <img src={logoTypo} alt="Hashtag Cabinet d'Avocats" className="h-16 mx-auto mb-4" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Prendre rendez-vous</h1>
          </div>

          <form onSubmit={onSubmit} className="space-y-4">
            {/* Civilité */}
            <div className="mb-4">
              <select
                {...register("civilite")}
                className="w-full px-3 py-3 border border-gray-200 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Civilité</option>
                <option value="Mme">Mme.</option>
                <option value="M">M.</option>
              </select>
              {errors.civilite && <p className="text-red-500 text-xs mt-1">{errors.civilite.message}</p>}
            </div>

            {/* Nom */}
            <div className="mb-4">
              <Input
                {...register("nom")}
                placeholder="Nom"
                className="w-full border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-3"
              />
              {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
            </div>

            {/* Société */}
            <div className="mb-4">
              <Input
                {...register("societe")}
                placeholder="Société (optionnel)"
                className="w-full border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-3"
              />
            </div>

            {/* Téléphone */}
            <div className="mb-4">
              <Input
                {...register("telephone")}
                placeholder="Numéro de téléphone (optionnel)"
                className="w-full border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-3"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <Input
                {...register("email")}
                type="email"
                placeholder="E-mail"
                className="w-full border-gray-200 focus:ring-blue-500 focus:border-blue-500 rounded-lg py-3"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div className="mb-6">
              <Textarea
                {...register("message")}
                placeholder="Parlez-nous de votre besoin. Nous vous recontacterons rapidement."
                rows={4}
                className="border-gray-200 focus:ring-blue-500 focus:border-blue-500 resize-none rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
            </div>

            {/* Fallback si mailto ne fonctionne pas */}
            {showFallback && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">
                  Problème d'ouverture de la messagerie ?
                </h3>
                <p className="text-sm text-blue-700 mb-3">
                  Vous pouvez copier le lien ci-dessous et le coller dans votre navigateur :
                </p>
                <div className="flex gap-2">
                  <Button
                    type="button"
                    onClick={copyToClipboard}
                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-3 py-1"
                  >
                    Copier le lien
                  </Button>
                  <Button
                    type="button"
                    onClick={() => window.open(mailtoLink || '', '_blank')}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1"
                  >
                    Réessayer
                  </Button>
                </div>
                <p className="text-xs text-blue-600 mt-2">
                  Ou envoyez directement un email à : <strong>pierre.philipot-amf@proton.me</strong>
                </p>
              </div>
            )}

            {/* Bouton Envoyer */}
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 text-base font-medium rounded-lg mb-4"
            >
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </Button>

            {/* Numéro de téléphone */}
            <div className="text-center">
              <div className="border border-gray-200 rounded-lg py-3 px-4 bg-gray-50">
                <a href="tel:+33757828006" className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">📞 +33 7 57 82 80 06</a>
              </div>
            </div>

            {/* Mentions légales */}
            <div className="text-xs text-gray-500 text-center pt-4 leading-relaxed">
              Les données ci-dessus sont recueillies par le cabinet HASHTAG AVOCAT afin de traiter et suivre votre demande de contact. Pour en savoir plus 
              sur le traitement de vos données et connaître vos droits, nous vous invitons à consulter notre politique de confidentialité.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;