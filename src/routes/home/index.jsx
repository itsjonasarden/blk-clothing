import Directory from "../../components/directory";
import CategoryData from "../../data/categories.json";

const Home = () => {
  return <Directory categories={CategoryData} />;
};

export default Home;
