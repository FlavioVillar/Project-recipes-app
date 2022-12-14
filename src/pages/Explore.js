import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CSS/Explore.css';
import './CSS/Foods&Drinks.css';

function Explore() {
  const history = useHistory();
  return (
    <div className="container-foods-drinks-header-card-footer">
      <Header title="Explore" toHaveSearch={ false } />
      <div className="container-explore-buttons">
        <button
          className="btn-explore"
          data-testid="explore-foods"
          type="button"
          onClick={ () => {
            history.push('/explore/foods');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            {' '}
            Explore Foods
          </span>
        </button>
        <button
          className="btn-explore"
          data-testid="explore-drinks"
          type="button"
          onClick={ () => {
            history.push('/explore/drinks');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            {' '}
            Explore Drinks
          </span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
