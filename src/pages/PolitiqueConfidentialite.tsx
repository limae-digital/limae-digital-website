import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen flex flex-col pb-32">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 text-left">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            LIMAE DIGITAL respecte votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Données collectées</h2>
          <p className="mb-4">
            Nous collectons les données suivantes:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Données de navigation (adresse IP, navigateur, pages visitées)</li>
            <li>Données soumises volontairement via des formulaires</li>
            <li>Cookies et technologies similaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Utilisation des données</h2>
          <p className="mb-4">
            Vos données sont utilisées pour:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Améliorer l'expérience utilisateur</li>
            <li>Analyser l'utilisation du site</li>
            <li>Vous contacter si vous l'avez demandé</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Protection des données</h2>
          <p className="mb-4">
            LIMAE DIGITAL met en place des mesures de sécurité pour protéger vos données personnelles contre l'accès non autorisé et la modification.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
          <p className="mb-4">
            Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez contrôler les cookies via les paramètres de votre navigateur.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Vos droits</h2>
          <p className="mb-4">
            Vous avez le droit d'accéder, de rectifier ou de supprimer vos données personnelles. Pour exercer ces droits, contactez-nous à: contact@limae.digital
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
          <p className="mb-4">
            LIMAE DIGITAL se réserve le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront affichées sur cette page.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
