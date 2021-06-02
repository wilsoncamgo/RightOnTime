import { Button } from "./ButtonElement";
import { useHistory } from "react-router-dom";

const Page404 = ({ location }) => {
  const history = useHistory();
  const signOut = () => {
    history.push("/");
  };
  return (
    <div>
      <h2>
        No encontramos la pagina solicitada <code>{location.pathname}</code>
      </h2>
      <Button to="" onClick={signOut}>
        Ir al Inicio
      </Button>
    </div>
  );
};
export default Page404;
