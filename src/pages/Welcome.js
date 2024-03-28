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
            <h1>Little Lemon</h1>
            <h3>New York</h3>
            <p>We are a family owned Mediterranean restaurant, <br/> 
              focused on traditional recipes <br/>
              served with a modern twist.</p>
            <button>Reserve a Table</button>
          </div>
          <div class='column'>
            <img alt='Little Lemon Food' src={WelcomeImage}/>
          </div>
      </section>
      <section id='SpecialsSection'>
        <div>
          <h2>This Week's Specials!</h2>
          <button>Menu</button>
        </div>
        <div class='container'>
          <div class='column'>
            <div class="card">
              <img src={SaladImg} alt="Salad" />
              <div class="card-container">
                <h4>Salad</h4><h5>$14.99</h5>
                <p>A classic bed of baby romaine and baby spinach comes with our homemade house vinegarette and your choice of proteins.</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class="card">
              <img src={PizzaImg} alt="Pizza"/>
              <div class="card-container">
                <h4>Pizza</h4><h5>$18.99</h5>
                <p>Our grilled, thin crust pizza comes with your choice of cheese and toppings.</p>
              </div>
            </div>
          </div>
          <div class='column'>
            <div class="card">
              <img src={SalmonImg} alt="Salmon" />
              <div class="card-container">
                <h4>Salmon</h4><h5>$18.99</h5>
                <p>Our salmon is pan-seared and served on top of a bed of sauted spinach. It is served with roasted seasonal vegetables and a balsamic glaze.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Welcome;