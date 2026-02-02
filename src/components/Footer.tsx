import { WebsiteCarbonBadge } from "react-websitecarbon-badge";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-600 bg-white/30 backdrop-blur-md">
      <div className="space-y-2">
        <div>
          <a href="/mentions-legales" className="hover:underline">
            Mentions légales
          </a>
          {" | "}
          <a href="/politique-confidentialite" className="hover:underline">
            Politique de confidentialité
          </a>
        </div>
        <p>Made with ❤️ by LIMAE DIGITAL</p>
      </div>
      <div className="mt-3">
        <WebsiteCarbonBadge url="https://limae.digital" />
      </div>
    </footer>
  );
}
