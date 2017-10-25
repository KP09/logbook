import React, { Component } from 'react';
import './stylesheets/index.css';
import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { PassagesContainer } from './containers/PassagesContainer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changePage = this.changePage.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.setState({
      currentPage: "passages",
      menu: false
    });
  }

  changePage(newPage) {
    this.setState({
      currentPage: newPage
    });
  }

  toggleMenu() {
    const bool = this.state.menu ? false : true;
    this.setState({
      menu: bool
    });
  }

  render() {
    return (
      <div id="app">
        { !this.state.menu && <NavBar changePage={this.changePage} toggleMenu={this.toggleMenu} /> }
        { this.state.menu && <Menu toggleMenu={this.toggleMenu} />}
        { this.state.currentPage === "passages"&& !this.state.menu && <PassagesContainer /> }
      </div>
    );
  }
}

export default App;
