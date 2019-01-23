import React, {Component} from 'react';
import unsplash from './api/unsplash'
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList'

class App extends Component {
  state = { images: [] }

  _onSearchSubmit = async term => {
    const res = await unsplash.get('search/photos', {
      params: {
        query: term
      }
    });

    this.setState({images: res.data.results})
  }

  render() { 
    return (
    <div className="ui container" style={{marginTop: "10px"}}>
      <SearchBar onSearchSubmit={this._onSearchSubmit} />
      <ImageList images={this.state.images} />
    </div> );
  }
}
 
export default App;
