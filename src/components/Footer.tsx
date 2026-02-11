import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import packageJson from "../../package.json";

export default function Footer() {
  const version = packageJson.version;

  // Render footer as a regular block at the end of the page (no fixed positioning)
  const classes = "block w-full py-6 text-center text-sm text-gray-700 bg-white/30 backdrop-blur-md";

  return (
    <footer className={classes}>
      <div className="space-y-2 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-4 gap-1">
          <a href="/mentions-legales" className="hover:underline text-blue-600">Mentions légales</a>
          <span className="hidden md:inline ">·</span>
          <a href="/politique-confidentialite" className="hover:underline text-blue-600">Politique de confidentialité</a>        </div>
        <p>Version {version} made with ❤️ by LIMAE DIGITAL</p>
        <div className="space-y-2 text-xs">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-1 gap-1">
            <p>SASU au capital de 500 €</p>
            <span className="hidden md:inline">·</span>
            <p> 1 rue Marguerin 75014 PARIS</p>
            <span className="hidden md:inline">·</span>
            <a href="https://annuaire-entreprises.data.gouv.fr/entreprise/limae-digital-999693617" target="_blank" className="hover:underline" rel="noopener noreferrer">RCS PARIS 999 693 617</a>
          </div>
        </div>

      </div>
      <div className="mt-3"><WebsiteCarbonBadge url="https://limae.digital" /></div>
    </footer>
  );
}
