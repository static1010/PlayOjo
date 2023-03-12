import { Fragment } from "react";
import Check from "../Card/ListItems/Check";
import Lock from "../UI/Lock";

const Header = () => {
  return (
    <Fragment>
      <div className="xxl:ml-[12rem]">
        <h1 className="text-left text-primary text-[1.688rem] font-bold tracking-[-0.27px] opacity-[1] font-montserrat">
          LES MEILLEURS CASINOS EN LIGNE DU MOMENT
        </h1>
        <p className="text-left text-gray opacity-[1] tracking-[-0.12px] md:tracking-[-0.18px] text-[0.75rem] md:text-lg font-montserrat mt-[3px]">
          Tous nos casinos sont : <Lock /> Autorise
          <Check classes="w-4 h-4 md:w-5 md:h-5 inline-block mx-1 opacity-[1] mb-[0.125rem]" />
          Revu par nos experts
        </p>
      </div>
    </Fragment>
  );
};

export default Header;
