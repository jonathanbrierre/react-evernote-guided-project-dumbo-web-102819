import React from 'react';

class Search extends React.Component{
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value}, () => {
      this.props.dynamicSearch(this.state.title)
    })
  }

  render(){ 
    return (
    <div className="filter">
      <input
        id="search-bar"
        type="text"
        name ='title'
        value = {this.state.title}
        onChange = {this.onChange}
        placeholder="Search Notes"
      />
    </div>
  );}
}

export default Search;
