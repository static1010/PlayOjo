import Check from "./Check";
import "./ListItems.css";
import { v4 } from "uuid";

const ListItems = ({ items }) => {
  const listItems = items.map((item) => {
    return (
      <div className="flex gap-3 text-center p-[6px] md:p-0" key={v4()}>
        <Check classes="w-5 h-5 inline-block" key={v4()} />
        <li
          key={v4()}
          className="text-sm xl:text-base  font-montserrat text-primary text-left tracking-[-0.14px] font-medium opacity-[1] "
        >
          {item}
        </li>
      </div>
    );
  });
  return (
    <>
      <ul className="ml-[0.3rem]  text-left md:mt-2  xl:mt-[3.3rem] xl:ml-4 col-span-2 md:flex md:justify-around md:col-span-3 liItems md:gap-x-12  xl:gap-3  xl:flex-col xl:col-start-4 xl:col-span-1 xl:absolute xl:text-base">
        {listItems}
      </ul>
    </>
  );
};

export default ListItems;
