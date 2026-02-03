import { WebsiteCarbonBadge } from "react-websitecarbon-badge";
import packageJson from "../../package.json";

export default function Footer() {
  const version = packageJson.version;

  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-600 bg-white/30 backdrop-blur-md">
      <div className="space-y-2">
        <div className="flex flex-col md:flex-row md:justify-center md:gap-4 gap-1">
          <a href="/mentions-legales" className="hover:underline">Mentions légales</a>
          <span className="hidden md:inline">·</span>
          <a href="/politique-confidentialite" className="hover:underline">Politique de confidentialité</a>
        </div>
        <p>Version {version} made with ❤️ by LIMAE DIGITAL</p>
        <div className="space-y-2 text-xs">
          <div className="flex flex-col md:flex-row md:justify-center md:gap-1 gap-1">
            <p>SASU au capital de 500 €</p>
            <span className="hidden md:inline">·</span>
            <p> 1 rue Marguerin 75014 PARIS</p>
            <span className="hidden md:inline">·</span>
            <p>RCS PARIS 999 693 617</p>
          </div>
        </div>

      </div>
      <div className="mt-3"><WebsiteCarbonBadge url="https://limae.digital" /></div>
    </footer>
  );
}
