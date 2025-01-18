import LandingPage from "@/components/landing/LandingPage.tsx"

/*
  * Componente principal en donde se iran renderizando las diferentes vistas/pantallas de la aplicación.
  * LandingPage es la página de inicio de la aplicación.
  * NosotrosPage es la página de nosotros de la aplicación.
  * ContactPage es la página de contacto de la aplicación.
  * AdminPage es el componente que contiene el dashboard de administrador de la aplicación.
  * UserPage es el componente que contiene el "dashboard" (o aplicacion principal) del usuario de la aplicación.
 */
const App = () => {
  return (
    <LandingPage />
  )
}

export default App