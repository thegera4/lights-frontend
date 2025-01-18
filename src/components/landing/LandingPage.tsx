import Navbar from "@/components/ui/navbar/Navbar.tsx"
import Footer from "@/components/ui/footer/Footer.tsx"
import Hero from "@/components/landing/hero/Hero.tsx"
import ProductDescription from "@/components/landing/product/ProductDescription.tsx"
import CompanyDescription from "@/components/landing/company/CompanyDescription.tsx"
import Reviews from "@/components/landing/reviews/Reviews.tsx";

/*
  * Componente que contiene la página de inicio (home) o landing page de la aplicación, en donde presentamos el
  * producto/servicio ofrecido, un poco de la empresa, algunos reviews de clientes y la accion para ingresar a nuestra
  * aplicacion principal. Es el diseño llamado "Main Page" en Figma.
 */
const LandingPage = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <ProductDescription />
      <CompanyDescription />
      <Reviews />
      <Footer />
    </main>
  );
}

export default LandingPage