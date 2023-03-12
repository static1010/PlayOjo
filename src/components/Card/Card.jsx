import ListItems from "./ListItems/ListItems";
import Bonus from "./Bonus/Bonus";
import Button from "./Button/Button";
import MinimumAmount from "./MinimumAmount/MinimumAmount";
import PlayOjoCasino from "./PlayOjoCasino/PlayOjoCasino";
import PlayOjoIcon from "./PlayOjoIcon/PlayOjoIcon";
import Badge from "../UI/Badge";
import One from "../UI/One";
const items = [
  "Retraits rapides",
  "Enregistrement en douceur",
  "Benefices non imposables",
];

const Card = () => {
  return (
    <>
      <div className="mx-auto pl-[1.656rem] md:pl-[2.313rem] pr-7  pt-[0.813rem] md:pt-2 grid max-w-md relative  md:max-w-4xl    rounded-xl shadow-3xl opacity-[1] min-w-[22.563rem] md:w-[47.375rem] xl:min-w-[92.5rem] h-[31.688rem] md:h-[16.688rem] xl:h-[12.75rem] mt-[1.438rem] md:mt-3 ">
        <Badge
          classes="absolute bg-red rounded text-[10px] text-white w-[5.25rem] xl:w-[5.563rem] h-[1.25rem] flex justify-center items-center z-10 top-[1.875rem] md:top-[2.7rem] font-bold font-montserrat opacity-[1] ml-[-0.563rem] shadow-2xl tracking-normal items-center text-center"
          name="USER CHOICE"
        />
        <One />
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 ">
          <PlayOjoIcon />
          <PlayOjoCasino />
          <Bonus />
          <Button />
          <ListItems items={items} />
          <MinimumAmount />
        </div>
      </div>
    </>
  );
};

export default Card;
