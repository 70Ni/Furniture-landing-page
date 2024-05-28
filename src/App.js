import "./App.css";
import Banner from "./Components/Banner/Banner";
import Base from "./Components/Base/Base";
import Intro from "./Components/IntroSection/Intro";
import Item from "./Components/Item/Item";
import ListView from "./Components/ListView/ListView";
import NewCategory from "./Components/Newitems/NewCategory";
import Review from "./Components/Reviews/Review";

function App() {
  return (
    <div className="App">
      <Intro />
      <Base pos="left" />
      <NewCategory />
      <ListView />
      <Base />
      <Review />
    </div>
  );
}

// reader.readAsDataURL(e.files)

export default App;
