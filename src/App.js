import Faqs from "./components/Faqs";
import Header from "./components/Header";
import HowWeHelp from "./components/HowWeHelp";
import WeBuild from "./components/WeBuild";
import Weserve from "./components/Weserve";
import Whytech from "./components/Whytech";

function App() {
  return (
    <div className="App">
      <WeBuild />
      <Whytech />
      <HowWeHelp />
      <Weserve />
      <Faqs />
    </div>
  );
}

export default App;
