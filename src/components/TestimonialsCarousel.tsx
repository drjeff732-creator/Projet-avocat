import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  text: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alexandre M.",
    role: "CEO, Startup fintech",
    text: "Accompagnement pragmatique et ultra-réactif sur nos levées de fonds. Une vraie valeur ajoutée pour une startup en croissance.",
  },
  {
    name: "Sophie L.",
    role: "COO, SaaS B2B",
    text: "Conseils clairs et sécurisants en data privacy. L'équipe comprend les enjeux produits autant que juridiques.",
  },
  {
    name: "Hugo T.",
    role: "Fondateur, e-commerce",
    text: "Des contrats sur-mesure et une excellente pédagogie. Je recommande chaudement.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section aria-label="Témoignages clients" className="container py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 font-display text-primary">Ils nous font confiance</h2>
      <div className="relative">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {testimonials.map((t, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-6 h-full flex flex-col gap-2 border-muted">
                  <p className="text-sm text-muted-foreground leading-relaxed">“{t.text}”</p>
                  <div className="mt-4 text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
