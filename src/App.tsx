import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <header className="w-full py-16 px-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-400">
          Benvenuti in CineMelody
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          Trova il tuo match perfetto in base ai tuoi gusti musicali e cinematografici.
        </p>
        <button className="mt-6 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          Cerca il tuo match
        </button>
      </header>

      {/* Music & Film Sections */}
      <div className="w-full max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
        {/* Music Section */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col items-center">
          <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1540076156429-35ffe82b7870?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw5fHxyb21hbnRpYyUyMGNvdXBsZSUyMHNoYXJpbmclMjBoZWFkcGhvbmVzJTIwbGlzdGVuaW5nJTIwdG8lMjBtdXNpYyUyMGF0JTIwc3Vuc2V0fGVufDB8fHx8MTc0MDU2ODE1NHww&ixlib=rb-4.0.3&q=80&w=1080" 
               
              alt="Music lovers enjoying a concert together" 
              className="w-full h-full object-cover"
              data-image-request="romantic couple sharing headphones listening to music at sunset"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-pink-300">Passione per la Musica</h2>
          <p className="text-center text-gray-100">
            Condividi i tuoi artisti preferiti, generi musicali e concerti memorabili. 
            Trova qualcuno che risuoni con le tue vibrazioni musicali.
          </p>
        </div>

        {/* Film Section */}
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl p-6 flex flex-col items-center">
          <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1504680161555-6c52f7631639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NjQ4Nzh8MHwxfHNlYXJjaHw4fHxyb21hbnRpYyUyMGNvdXBsZSUyMHdhdGNoaW5nJTIwbW92aWUlMjB0b2dldGhlciUyMHdpdGglMjBwb3Bjb3JuJTIwaW4lMjBhJTIwY296eSUyMHNldHRpbmd8ZW58MHx8fHwxNzQwNTY4MTU0fDA&ixlib=rb-4.0.3&q=80&w=1080" 
               
              alt="Couple watching a movie together" 
              className="w-full h-full object-cover"
              data-image-request="romantic couple watching movie together with popcorn in a cozy setting"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-indigo-300">Amore per il Cinema</h2>
          <p className="text-center text-gray-100">
            Dai classici ai blockbuster, dai film d'autore alle serie TV. 
            Incontra persone che condividono la tua passione per la settima arte.
          </p>
        </div>
      </div>

      {/* Made on ZAPT Badge */}
      <footer className="mt-auto py-6 w-full bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <p className="text-sm text-gray-300">© 2023 CineMelody</p>
          <a 
            href="https://www.zapt.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-md text-white text-sm font-medium hover:from-blue-700 hover:to-indigo-600 transition-colors"
          >
            Made on ZAPT
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;