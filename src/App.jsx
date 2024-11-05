
import Header from "./components/semanticComponents/header";
import Layout from "./components/mainComponents/layout";
// import { HashRouter as Router } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import FooterContent from "./components/semanticComponents/footer";
import { useEffect } from "react";
import './App.css'



function App() {
  const location = useLocation()
  // const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className='bg-gray-300 w-screen'>
      {/* <Router> */}
        <header className="flex justify-center z-10 items-center">
          <Header />
        </header>
        <main className="w-full">
          <Layout />
        </main>
        {location?.pathname !== "/login" && <footer className="xs:text-lg bg-gray-800 home-footer h-full pl-6 text-gray-50">
          <FooterContent />
        </footer>}
      {/* </Router> */}
    </div>
  )
}

export default App
