import Banner from "./components/home-page/Banner";
import Benifits from "./components/home-page/Benifits";
import Services from "./components/home-page/Services";

export default function Home() {
  return (
    <div className="text-slate-900 dark:text-slate-200">
      <Banner />
      <div className="container mx-auto px-4">
        <Services />
        <Benifits />
      </div>
    </div>
  );
}
