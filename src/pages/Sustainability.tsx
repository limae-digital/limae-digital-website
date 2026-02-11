import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function MentionsLegales() {
  return (
    <div className="min-h-screen flex flex-col pb-32">
      <main className="flex-1 max-w-3xl mx-auto px-4 py-8 text-left">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Sustainability</h1>

        
      </main>
      <Footer />
    </div>
  );
}
