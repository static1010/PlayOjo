import { Fragment } from "react";
import "./Button.css";

const Button = () => {
  return (
    <Fragment>
      <div className="mb-0 mx-auto col-span-2 md:col-start-2 xl:col-start-5 xl:flex xl:justify-center xl:items-center">
        <button className="bg-green w-[19.25rem] xl:ml-10 xl:mt-7 xl:mr-3 md:w-[27.313rem] xl:w-[15rem] h-[2.938rem] xl:h-[3.125rem] rounded-[5px] text-base font-openSans text-whiteColor font-bold tracking-[-0.16px] opacity-[1] md:absolute mt-[0.563rem] md:mt-[6px]  jouerBtn">
          JOUER
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
