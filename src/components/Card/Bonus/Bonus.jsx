import Badge from "../../UI/Badge";

const Bonus = () => {
  return (
    <div className="mx-auto relative col-span-2 md:col-span-1 md:ml-[-1.751rem] xl:ml-[-3.913rem] xl:col-start-3 xl:mt-1">
      <Badge
        classes="absolute bg-red rounded text-[10px] text-white w-[4.75rem] h-[1.25rem] flex justify-center items-center z-10 top-[1.5rem] font-bold font-montserrat opacity-[1] ml-[-0.563rem] shadow-2xl tracking-normal"
        name="EXCLUSIVITÉ"
      />
      <fieldset className="w-[19.188rem] md:w-[15.536rem] xl:w-[20.188rem]  h-[9.125rem] md:h-[6.9rem] xl:h-[9.563rem] bg-bgGray rounded-[5px] border-2 border-greenSecondary ">
        <legend
          className="text-center text-[1.438rem]  md:text-xl xl:text-[1.438rem] px-[0.625rem] text-primary font-montserrat font-bold"
          align="center"
        >
          BONUS
        </legend>
        <div className="text-center font-montserrat tracking-[-0.27px]">
          <p className="text-primary font-bold text-[1.688rem] md:text-[1.188rem] xl:text-[1.813rem] mt-4 xl:mt-[1.375rem] xl:items-cente flex flex-col">
            250 CA${" "}
            <span className="font-normal mt-[-8px]  xl:mt-[-12px] ">
              + 80 Tours Gratuits
            </span>
          </p>
        </div>
      </fieldset>
    </div>
  );
};

export default Bonus;
