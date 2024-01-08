import { LogInIcon } from "lucide-react";
import { Button } from "./button";

const NavBarDesktop = () => {
  return (
    <div className="w-auto hidden sm-custom:flex">
      <nav className="w-[350px] h-auto none">
        <ul className=" flex items-center justify-between font-semibold">
          <Button
            size="icon"
            className=" w-auto h-[25px] flex justify-between px-1 gap-1"
          >
            <LogInIcon size={16} />
            Login
          </Button>

          <li>Inicio</li>
          <li>Pedidos</li>
          <li>Ofertas</li>
          <li>Catalogo</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBarDesktop;
