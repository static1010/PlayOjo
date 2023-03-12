import logo from "../../../assets/logo-casino-ojo.png";
import { AiOutlineInfoCircle } from "react-icons/ai";

const PlayOjoIcon = () => {
  return (
    <>
      <div className="relative mr-4 md:ml-4 xl:ml-[-0.5rem] xl:col-start-1 xl:flex xl:justify-center xl:items-center">
        <AiOutlineInfoCircle className="absolute w-[1.688rem] h-[1.688rem] text-gray ml-[7rem] md:ml-[10rem] md:top-[6px] xl:top-[27px]" />
        <img
          alt="logo"
          src={logo}
          className="w-[7.75rem] md:w-[10.625rem] xl:w-[9.125rem]  h-[7.75rem] md:h-[10.625rem] xl:h-[9.125rem] "
        />
      </div>
    </>
  );
};

export default PlayOjoIcon;
