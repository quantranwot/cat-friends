import React, { useEffect } from "react";
import { connect } from "react-redux";
import SearchBox from "../components/SearchBox";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import "tachyons";
import "./App.css";

import { setSearchField, requestCats } from "../actions";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchCats.searchField,
    cats: state.requestCats.cats,
    isPending: state.requestCats.isPending,
    error: state.requestCats.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestCats: () => requestCats(dispatch),
  };
};

function App({ cats, onRequestCats, searchField, onSearchChange, isPending }) {
  useEffect(() => {
    onRequestCats();
  }, []);

  const filteredCats = cats.filter((cat) => {
    return cat.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return isPending ? (
    <h1 className="tc lh-title">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f-headline lh-title main-title">Cat Friends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList cats={filteredCats} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
