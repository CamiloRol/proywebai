import Cochatcomplete from "../chat/Cochatcomplete";
import Homenologin from "../components/Homenologin";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <>
        {!isAuthenticated ? (
          <Homenologin/>
          ) : (
          <Cochatcomplete />
        )}
    </>
  )
}
