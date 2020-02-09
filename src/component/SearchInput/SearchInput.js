import React from 'react';
import "./search-input.scss";

class SearchInput extends React.Component {
  state = {
      value: ''
  };

  render() {
    const {
      placeholder,
      isSearch
    } = this.props;
    const {value} = this.state;
    return (
      <div className="search-input">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
        />
        {isSearch &&
          <img src="/images/ico-search.png" alt="검색"/>
        }
      </div>
    );
  }
}

export default SearchInput;