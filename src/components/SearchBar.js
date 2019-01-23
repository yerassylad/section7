import React, { Component } from 'react';

class SearchBar extends Component {
  state = { term: "" };

  _onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() { 
    return ( <div className="ui segment">
      <form onSubmit={this._onFormSubmit} className="ui form">
        <div className="field">
        <label>Image search</label>
          <input type='text' value={this.state.term} onChange={e => this.setState({term: e.target.value})}  />
        </div>
      </form>
    </div> );
  }
}

export default SearchBar;
