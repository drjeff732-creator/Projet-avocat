import SEO from "@/components/SEO";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const schema = z.object({
  nom: z.string().min(1, "Champ requis"),
  prenom: z.string().min(1, "Champ requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  sujet: z.string().min(1, "Champ requis"),
  message: z.string().min(10, "Message trop court"),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent(`[Contact] ${data.sujet} – ${data.prenom} ${data.nom}`);
    const body = encodeURIComponent(
      `Nom: ${data.nom}\nPrénom: ${data.prenom}\nEmail: ${data.email}\nTéléphone: ${data.telephone || "-"}\n\nMessage:\n${data.message}`
    );
    const mailto = `mailto:magloire.tchanteo@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <div className="container py-12">
      <SEO title="Contact | Hashtag Avocat" description="Contactez Hashtag Avocat pour un rendez-vous ou une demande de devis." />
      <h1 className="text-3xl md:text-4xl font-bold font-display text-primary mb-6">Contact</h1>

      <div className="grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input placeholder="Nom" {...register("nom")} aria-invalid={!!errors.nom} />
              {errors.nom && <p className="text-destructive text-xs mt-1">{errors.nom.message}</p>}
            </div>
            <div>
              <Input placeholder="Prénom" {...register("prenom")} aria-invalid={!!errors.prenom} />
              {errors.prenom && <p className="text-destructive text-xs mt-1">{errors.prenom.message}</p>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input placeholder="Email" type="email" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Input placeholder="Téléphone (optionnel)" {...register("telephone")} />
            </div>
          </div>
          <Input placeholder="Sujet" {...register("sujet")} aria-invalid={!!errors.sujet} />
          {errors.sujet && <p className="text-destructive text-xs -mt-2">{errors.sujet.message}</p>}
          <Textarea placeholder="Votre message" className="min-h-40" {...register("message")} aria-invalid={!!errors.message} />
          {errors.message && <p className="text-destructive text-xs -mt-2">{errors.message.message}</p>}

          <Button type="submit" variant="cta" size="wide" disabled={isSubmitting}>Envoyer</Button>
        </form>

        <div className="space-y-4 text-sm text-muted-foreground">
          <p><strong className="text-foreground">Adresse</strong><br/>Paris, France</p>
          <p><strong className="text-foreground">Téléphone</strong><br/>+33 1 23 45 67 89</p>
          <p><strong className="text-foreground">Email</strong><br/><a href="mailto:contact@hashtagavocat.com" className="underline underline-offset-4">contact@hashtagavocat.com</a></p>
          <div className="rounded-md overflow-hidden border">
            <iframe title="Plan d'accès" src="https://maps.google.com/maps?q=Paris%2C%20France&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="300" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
