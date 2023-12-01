// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import '../hojas-de-estilo/SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    // Change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
    // Change code above this line
  }
  render() {
    return (
      <header>
      <h1>Ravenous!</h1>
      <ul className='nav'>
        <li className='nav'><a href='#'>Best Match</a></li>
        <li className='nav'><a href='#'>Highest Rated</a></li>
        <li className='nav'><a href='#'>Most Reviewed</a></li>
      </ul>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} placeholder='Search Restaurants' />
          <input value={this.state.input} onChange={this.handleChange} placeholder='Search Restaurants' />
          <button type='submit'>Lets Go!</button>
        </form>
      </header>
    );
  }
}

export default SearchBar;