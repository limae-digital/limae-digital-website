import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";

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
      <Footer />
    </div>
  );
}
