import { useGlobalContext } from "../Store/Context";
import { useRef, useEffect } from "react";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef("");
  const changeHandler = (e) => {
    setSearchTerm(searchValue.current.value);
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section  searcth">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="name">search </label>
          <input
            id="name"
            type="text"
            ref={searchValue}
            onChange={changeHandler}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
