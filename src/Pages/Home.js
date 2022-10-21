import { Fragment } from "react";
import CocktailList from "../Components/Cocktail-list";
import SearchForm from "../Components/SearchForm";
const Home = () => {
  return <Fragment>
<SearchForm/>
  <CocktailList />;
  </Fragment>
};

export default Home;
