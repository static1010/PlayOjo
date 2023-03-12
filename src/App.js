import Card from "./components/Card/Card";
import Header from "./components/Layout/Header";

function App() {
  return (
    <>
      <div className="container xxl:max-w-[2000px] mx-auto w-full  pl-[0.875rem] pr-[0.938rem] pt-[0.688rem] pb-[2.625rem] md:pl-[1.875rem] md:pt-[1.688rem] xl:mx-auto">
        <Header />
        <Card />
      </div>
    </>
  );
}

export default App;
