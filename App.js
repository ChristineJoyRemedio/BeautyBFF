import React, { Component } from 'react';
import './App.css';
import{Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
      <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
          <Header transparent title="Title" style={{color: 'white'}}>
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
                  <a href="#">Link</a>
              </Navigation>
          </Drawer>
          <Content />
          <Main/>
      </Layout>
  </div>

    );
  }
}

export default App;
