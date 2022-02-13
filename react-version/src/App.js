import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import TweetList from './components/TweetList';
import TweetForm from './components/TweerForm';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className='container'>
        <TweetForm />
        <TweetList />
      </main>
    </div>
  );
}

export default App;
