import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import BusinessCard from './BusinessCard';
import BootCamp from './BootCamp';
import Header from './Header';
import Movies from './Movies';
import Footer from './Footer'
// comment


// This is the real one
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <section className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/a">
              <h2>A</h2>
            </Route>
            <Route path="/ape">
              <h2>Ape</h2>
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/camp">
              <Camp />
            </Route>
            <Route path="/other">
              <Other />
            </Route>

            <Route path="*">
              <Oops />
            </Route>
          </Switch>

        </section>
        <Footer />
      </div>
    </Router >
  )
}


function Home() {
  return (
    <section>
      <BusinessCard
        src="./images/about_me_pic.JPG"
        name="Brian Murdock"
        jobTitle="Senior Developer"
        company="RobinSage"
        city="Salt Lake City"
        state="Utah"
        color="blue"
      />
    </section>
  );
}

function Camp() {
  return (
    <section className="camp">
      <BootCamp />
    </section>
  )
}

function Other() {
  return (
    <div>
      <h2>This is completely different.</h2>
      <div>We could have a block of text in here.</div>
      <div>We could make this do something with a list.
        <ul>
          <li>List Item 1</li>
          <li>Don't forget the milk.</li>
          <li><Link to="/">Go Back Home</Link></li>
        </ul>
      </div>
    </div>
  )
}

function Oops() {
  return (
    <section className="lost404">
      <h2>You seem to be...</h2>
      <section class="lostOptions">
        Try returning to the <Link to="/">Home Page</Link>
      </section>
    </section>
  );
}
export default App;
