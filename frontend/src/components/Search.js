import React from 'react';

class Search extends React.Component{
  // state = {
  //   searchTitle: ''
  // }

  onChange = (e) => {
    this.props.editSearchTitle(e)
  }

  render(){ 
    return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        name ='searchTitle'
        value = {this.props.searchTitle}
        onChange = {this.onChange}
        placeholder="Search Notes"
      />
    </div>
  );}
}

export default Search;
