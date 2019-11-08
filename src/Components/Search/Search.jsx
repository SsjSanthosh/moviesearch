import React from "react";
import { connect } from "react-redux";
import {
  handleSearchChange,
  toggleLock
} from "../../redux/search/search-actions";
import "./Search.scss";
function Search(props) {
  const { searchTerm, handleSearchChange, toggleLock } = props;

  const handleChange = e => {
    toggleLock();
    handleSearchChange(e.target.value);
    toggleLock();
  };

  //   const handleSubmit =
  return (
    <nav class="navbar navbar-light bg-light">
      <form class="form mx-auto">
        <input
          class="form-control  search mt-3"
          type="search"
          value={searchTerm}
          placeholder="Search"
          onChange={handleChange}
          aria-label="Search"
        />

        {/* <button class="btn  btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button> */}
      </form>
    </nav>
  );
}
const mapStateToProps = state => ({
  searchTerm: state.search.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearchChange: item => dispatch(handleSearchChange(item)),
  toggleLock: () => dispatch(toggleLock())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
