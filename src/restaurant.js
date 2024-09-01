import React from 'react';
//import './style.css'; // Make sure to import your stylesheet

const Restaurant = () => {
  return (
    <div className="container">
      <header>
        <nav id="navbar">
          <div className="logo"><span>Foodie</span></div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#order">Order</a></li>
          </ul>
        </nav>
        <div id="mobile">
          <div className="logo1"><span>Foodie</span></div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#order">Order</a></li>
          </ul>
        </div>

        <div className="overlay">
          <section id="home">
            <h1 className="h-primary"><b>WELCOME TO FOODIE</b></h1>
            <br />
            <i>
            <p>Step into the world of culinary magic at our award-winning restaurant where our chefs<br></br> create dishes that are not only delicious,
               but visually stunning as well.</p>
            <p>We serve a variety of our own special mouthwatering pizzas,exotic pastas and yummy desserts at very reasonable prices.<br></br>
               We are enclosing a menu for you to go through.....</p>
            <p>We are hoping you will drop by anytime and avail the services we provide.
              <br></br>All details of addresses and phone numbers are to be found in the menu.<br></br> 
              Feel free to call us anytime and avail the free home delivery system that we have for prized customers like you.</p>
              </i>
            <button className="btn"><b>Order Now</b></button>
          </section>
        </div>
      </header>

      <div id="menu">
        <div className="heading">
          <h1>Menu</h1>
          <h3>Today's Special</h3>
        </div>
        <div class="card">
                <img src="https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Grilled Chicken</h5>
                        <h5 class="price"> ₹659 </h5>
                    </div>
                    <p>Grilled Chicken is a very popular recipe made with chicken, hung curd and spices like cumin powder and black pepper. 
                      It is a perfect chicken recipe for a quick meal.</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="card">
                <img src="https://media.istockphoto.com/id/1397240189/photo/mongolian-shrimp-with-udon-noodles.webp?b=1&s=170667a&w=0&k=20&c=Vod-OsK3iWXXqE6n29B_Rq8hczhGKyVxEScxolTFasw=" alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Spicy Spaghetti</h5>
                        <h5 class="price"> ₹219 </h5>
                    </div>
                    <p>It is a staple food of traditional Italian cuisine. Like other pasta, 
                      spaghetti is made of milled wheat, water, and sometimes enriched with vitamins and minerals.</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80"
                    alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Pav bhaji</h5>
                        <h5 class="price"> ₹99 </h5>
                    </div>
                    <p>Pav bhaji is an Indian fast food consisting of a thick spicy vegetable gravy served with soft dinner rolls.</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Margherita Pizza</h5>
                        <h5 class="price"> ₹299 </h5>
                    </div>
                    <p>Pizza Margherita is a typical Neapolitan pizza, made with San Marzano tomatoes, 
                      mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="card">
                <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80"
                    alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Cheese Burger</h5>
                        <h5 class="price"> ₹159 </h5>
                    </div>
                    <p>A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty,
                       added near the end of the cooking time.</p>
                    <button>Add To Cart</button>
                </div>
            </div>
            <div class="card">
                <img src="https://miro.medium.com/v2/resize:fit:1400/0*rIxaIxo4hzAHPeLZ"
                    alt=""/>
                <div class="details">
                    <div class="details-sub">
                        <h5>Chocolate Cupcakes/piece</h5>
                        <h5 class="price"> ₹89 </h5>
                    </div>
                    <p>A cupcake is a small, sweet baked good topped with frosting.
                       You might bake cupcakes for your best friend's birthday. </p>
                    <button>Add To Cart</button>
                </div>
            </div>
      </div>

      <div id="about">
        <h1 className="title">About us</h1>
        <div className="about_row">
          <div className="about_column">
            <p>"Here, at Foodie, we understand cravings.
               We know how important it is to get your food fast,
              and we have a 1-hour delivery guarantee, or you get your money back.
              While we prepare our food fast, we develop the flavor slowly.That's why our menu is seasonal. 
              Don't hesitate to pay us a visit if you share our passion for fresh dishes cooked with only the best ingredients.
              Don’t let hunger take control of you. Beat it with FOODIE!"<br/> <b>Contact: Ram nagar,Coimbatore.<br/>
              Sunday - Friday (9.30am-10.00pm)<br/>Any queries, stay@foodie.com</b></p>
            <button id="btn1">learn more</button>
          </div>
          <div className="about_column">
            <img src="https://img.freepik.com/premium-photo/restaurant-food-restaurant-menu-photos-menu_830198-736.jpg?size=626&ext=jpg" alt="" />
          </div>
        </div>
      </div>

      <div id="order">
        <h1 className="title1">order</h1>
        <form action="">
          <input type="text" className="inp_box" placeholder="Name" />
          <input type="email" className="inp_box" placeholder="Email" />
          <textarea type="text" className="inp_box text_area" placeholder="Adress"></textarea>
          <button className="btn2">Order Now</button>
        </form>
      </div>

      <footer>
        <div>
          &copy; 2023 Foodie
          <p>
            Designed by Ajitha
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Restaurant;
