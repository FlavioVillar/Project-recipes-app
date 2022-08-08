import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getSaveEmail } from '../storage/getStorage';
import './CSS/Profile.css';
import './CSS/Foods&Drinks.css';

function Profile() {
  const history = useHistory();
  const getEmail = getSaveEmail();

  return (
    <div className="container-foods-drinks-header-card-footer">
      <Header title="Profile" toHaveSearch={ false } />
      { getEmail ? (<p data-testid="profile-email">{getEmail.email}</p>) : '' }
      <div className="container-favorite-buttons">
        <button
          className="btn-explore"
          data-testid="profile-done-btn"
          type="button"
          onClick={ () => {
            history.push('/done-recipes');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            Done Recipes
          </span>
        </button>

        <button
          className="btn-explore"
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => {
            history.push('/favorite-recipes');
          } }
        >
          <span className="shadow" />
          <span className="edge" />
          <span className="front text">
            Favorite Recipes
          </span>

        </button>

        <button
          className="btn-explore"
          data-testid="profile-logout-btn"
          type="button"
          onClick={ () => {
            localStorage.clear();
            history.push('/');
          } }
        >
          <span className="shadow" />
          <span className="edge-surprise" />
          <span className="front-surprise text">
            {' '}
            Logout
          </span>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
