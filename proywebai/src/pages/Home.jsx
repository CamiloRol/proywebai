import Cochatcomplete from "../chat/Cochatcomplete";
import Homenologin from "../components/Homenologin";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { isAuthenticated} = useAuth();
  return (
    <>
        <Navbar />
        {!isAuthenticated ? (
          <Homenologin/>
          ) : (
          <>
          <Cochatcomplete />
          </>
        )}
        <Footer />
    </>
  )
}
