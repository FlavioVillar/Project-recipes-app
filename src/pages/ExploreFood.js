import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './CSS/Explore.css';
import './CSS/Foods&Drinks.css';

function ExploreFood() {
  const history = useHistory();

  const redirectToFoods = () => {
    const response = fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((res) => res.json());
    response.then((data) => {
      history.push(`/foods/${data.meals[0].idMeal}`);
    });
  };

  return (
    <div className="container-foods-drinks-header-card-footer">
      <div className="container-explore-foods-drinks-header">
        <Header title="Explore Foods" toHaveSearch={ false } />
      </div>
      <div className="container-explore-buttons">
        <button
          className="btn-explore"
          data-testid="explore-by-ingredient"
          type="button"
          onClick={ () => {
            history.push('/explore/foods/ingredients');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            {' '}
            By Ingredient
          </span>
        </button>

        <button
          className="btn-explore"
          data-testid="explore-by-nationality"
          type="button"
          onClick={ () => {
            history.push('/explore/foods/nationalities');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            {' '}
            By Nationality
          </span>
        </button>

        <button
          className="btn-explore"
          data-testid="explore-surprise"
          type="button"
          onClick={ redirectToFoods }
        >
          <span className="shadow" />
          <span className="edge-surprise" />
          <span className="front-surprise text">
            {' '}
            Surprise me!
          </span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFood;
