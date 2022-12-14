import Directory from "./components/directory";
import CategoryData from "./data/categories.json";

const App = () => {
  return <Directory categories={CategoryData} />;
};

export default App;
