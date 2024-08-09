
import AboutSection from "./components/AboutSection"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import RegistrationForm from "./components/ContactSection"


function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <RegistrationForm />

        </main>
        <Footer />
      </div>

    </>
  )
}

export default App
