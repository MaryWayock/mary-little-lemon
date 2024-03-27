import React from 'react'
import WelcomeImage from '../icons_assets/restauranfood.jpg';
import SaladImg from '../icons_assets/salad.jpg';
import PizzaImg from '../icons_assets/pizza.jpg';
import SalmonImg from '../icons_assets/salmon.jpg';

function Welcome() {
  return (
    <div>
      <section class='container' id='WelcomeSection'>
          <div class='column'  >
            <h1>Welcome to Little Lemon</h1>
            <h3>New York</h3>
            <p>We are a family run Italian restaurant. <br/> 
              One bite of our gabogul <br/>
              and you'll feel like your back in the old country!</p>
            <button>Reserve a Table</button>
          </div>
          <div class='column'>
            <img alt='Little Lemon Food' src={WelcomeImage}/>
          </div>
      </section>
      <section id='SpecialsSection'>
        <div>
          <h2>This Week's Specials</h2>
          <button>Menu</button>
        </div>
        <div class='container'>
          <div class='column'>
            <div class="card">
              <img src={SaladImg} alt="Salad" />
              <div class="card-container">
                <h4><b>Salad</b></h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class="card">
              <img src={PizzaImg} alt="Pizza"/>
              <div class="card-container">
                <h4><b>Pizza</b></h4>
                <p>Architect & Engineer</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class="card">
              <img src={SalmonImg} alt="Salmon" />
              <div class="card-container">
                <h4><b>Salmon</b></h4>
                <p>Architect Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Welcome;