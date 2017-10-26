import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { SignUpContainer } from './containers/SignUpContainer';
import { PassagesContainer } from './containers/PassagesContainer';
import { LoginContainer } from './containers/LoginContainer';

import { NavBar } from './components/NavBar';
import { Menu } from './components/Menu';
import { Home } from './components/Home';

class App extends React.Component {
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
      // <div id="app">
      //   { !this.state.menu && <NavBar changePage={this.changePage} toggleMenu={this.toggleMenu} /> }
      //   { this.state.menu && <Menu toggleMenu={this.toggleMenu} />}
      //   { this.state.currentPage === "passages"&& !this.state.menu && <PassagesContainer /> }
      // </div>
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
          <Route exact path="/" component={Home}>
          </Route>
          <Route path="/login" component={LoginContainer}>
          </Route>
          <Route path="/signup" component={SignUpContainer}>
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
