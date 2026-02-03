import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
import FeatureBlock from "../components/FeatureBlock";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1 flex flex-col items-center justify-center gap-6 pb-32">
        <img
          src="/limaedigital.svg"
          alt="limaedigital logo"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
        />
        <ScrollIndicator />
      </main>

      <FeatureBlock id="description" title="Description" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
          ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
          mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        </p>
        <p>
          Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
        </p>
      </FeatureBlock>

      <FeatureBlock id="services" title="Mes services" subtitle="Solutions sur mesure pour votre croissance">
        <ul className="list-disc ml-6">
          <li><strong>Service A:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li><strong>Service B:</strong> Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</li>
          <li><strong>Service C:</strong> Sed nisi. Nulla quis sem at nibh elementum imperdiet.</li>
        </ul>
        <p className="mt-4">
          Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
        </p>
      </FeatureBlock>

      <FeatureBlock id="contact" title="Contactez‑moi" subtitle="Envie d'échanger ? Voici comment me joindre">
        <p>
          Pour toute question ou demande de devis, envoyez un message ou utilisez le formulaire ci-dessous. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </p>
        <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Votre nom" className="p-3 bg-gray-900 rounded border border-gray-800" />
          <input type="email" placeholder="Votre email" className="p-3 bg-gray-900 rounded border border-gray-800" />
          <textarea placeholder="Votre message" className="md:col-span-2 p-3 bg-gray-900 rounded border border-gray-800 h-32"></textarea>
          <button type="button" className="md:col-span-2 inline-block bg-[#646cff] text-white px-6 py-3 rounded-md">Envoyer</button>
        </form>
      </FeatureBlock>

      <Footer />
    </div>
  );
}
