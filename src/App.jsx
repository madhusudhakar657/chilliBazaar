
import Header from "./components/semanticComponents/header";

import './App.css'
import Layout from "./components/mainComponents/layout";
import { HashRouter as Router } from "react-router-dom";
import FooterContent from "./components/semanticComponents/footer";
import { useEffect } from "react";


function App() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='bg-gray-300 max-w-screen'>
      <Router>
        <header className="flex justify-center z-10 items-center">
          <Header />
        </header>
        <main className="max-w-screen z-n1">
          <Layout />
        </main>
        <footer className="bg-gray-800 home-footer w-screen h-full text-gray-50">
          <FooterContent />
        </footer>
      </Router>
    </div>
  )
}

export default App
