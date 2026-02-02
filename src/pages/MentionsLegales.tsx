import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col pb-32">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 text-left">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Informations légales</h2>
          <p className="mb-4">
            Site: https://limae.digital
          </p>
          <p className="mb-4">
            Responsable du site: LIMAE DIGITAL
            SASU au capital de 500 €
            Siège social: 1 rue Marguerin 75014 Paris
            RCS: PARIS 999 693 617
          </p>
          <p className="mb-4">
            Contact: contact@limae.digital
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
          <p className="mb-4">
            Ce site est hébergé par: Github
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Propriété intellectuelle</h2>
          <p className="mb-4">
            L'ensemble des contenus de ce site (textes, images, vidéos, etc.) sont la propriété exclusive de LIMAE DIGITAL et sont protégés par les droits d'auteur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Limitation de responsabilité</h2>
          <p className="mb-4">
            LIMAE DIGITAL ne peut être tenue responsable des dommages directs ou indirects causés par l'utilisation de ce site.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
