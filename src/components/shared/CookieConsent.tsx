import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-card/95 border-t backdrop-blur">
      <div className="container py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          Nous utilisons des cookies pour améliorer votre expérience. En poursuivant, vous acceptez notre politique des cookies.
          {" "}
          <Link to="/mentions-legales" className="underline underline-offset-4">En savoir plus</Link>.
        </p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={() => { localStorage.setItem("cookie-consent", "dismissed"); setVisible(false); }}>Plus tard</Button>
          <Button variant="cta" onClick={() => { localStorage.setItem("cookie-consent", "accepted"); setVisible(false); }}>J'accepte</Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
