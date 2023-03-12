import Star from "./Star";
import HalfStar from "./HalfStar";
const PlayOjoCasino = () => {
  return (
    <div className="text-center mt-[1.375rem] md:mt-[6px] xxl:ml-[-1.25rem]  md:mr-[1.438rem] xl:mt-12 font-montserrat md:flex md:text-center md:flex-col xl:col-start-2">
      <h2 className="text-primary text-[1.188rem] md:text-lg xl:text-xl text-left  font-bold tracking-[-0.19px] md:text-center xl:text-left md:mr-4 opacity-[1]">
        PlayOjo Casino
      </h2>
      <div className="flex justify-center xl:justify-start mt-[0.364rem] -ml-1 xl:text-left">
        <Star />
        <Star />
        <Star />
        <Star />
        <HalfStar />
      </div>
      <div className="flex justify-center mt-[0.625rem] md:mt-0 xl:justify-start xl:ml-12">
        <p className="text-yellow text-[1.25rem] font-bold md:mt-1">4.5/5</p>
      </div>
    </div>
  );
};

export default PlayOjoCasino;
