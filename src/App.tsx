import "./App.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-1 flex items-center justify-center">
        <img
          src="/limaedigital.svg"
          alt="limaedigital logo"
          className="w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
        />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 py-4 text-center text-sm text-gray-600 bg-white">Made with ❤️ by LIMAE DIGITAL</footer>
    </div>
  );
}

export default App;
