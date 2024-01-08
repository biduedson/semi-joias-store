import Logo from "./logo";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center w-full h-[443px] self-end ">
      <div className="flex justify-between items-center w-[1074px] h-[298px] px-[50px] border-y-2 max-lg:w-[500px] max-sm:w-[400px]">
        <Logo />
        <div className="footer-information flex items-center justify-center w-[460px] h-[198px]">
          <div className="footer-location flex w-full h-auto gap items-center gap-2 font-light text-sm">
            <p className="text-white"></p>
            <FaLocationDot /> Rua: Deputado Doutor Aldo Lupo 230 - Fco. Morato -
            SP
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
