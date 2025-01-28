const a=`
<section class="top_txt">
      <div class="head container">
        <div class="head_txt">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
        <div class="sing_in_up">
          <a href="#">SIGN IN</a>
          <a href="#">SIGN UP</a>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="navbar-brand">
        <a href="index.html">
          <img src="/images/logos.png" alt="Ecommerce Logo" class="logo" width="80%" height="auto">
        </a>
      </div>
      <nav class="navbar">
        <ul>
          <li class="nav-item">
            <a href="/" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="about.html" class="nav-link">about</a>
          </li>
          <li class="nav-item">
            <a href="products.html" class="nav-link">products</a>
          </li>
          <li class="nav-item">
            <a href="addToCart.html" class="nav-item add-to-cart-button" id="cartValue">
              <i class="fa-solid fa-cart-shopping"> 0 </i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
`,e=document.querySelector(".section-navbar");e.insertAdjacentHTML("afterbegin",a);const t=`
    <div class="footer-container container">
      <div class="content_1">
        <img src="/image/logos.png" alt="">
        <p>
          Welcome to Shoporia ShopHub, your ultimate destination for
          cutting-edge gadgets!
        </p>
        <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards">
      </div>
      <div class="content_2">
        <h4>SHOPPING</h4>
        <a href="#">Computer Store</a>
        <a href="#">Laptop Store</a>
        <a href="#">Accessories</a>
        <a href="#">Sales & Discount</a>
      </div>
      <div class="content_3">
        <h4>Experience</h4>
        <a href="./contact.html">Contact Us</a>
        <a href="" target="_blank">Payment Method</a>
        <a href="" target="_blank">Delivery</a>
        <a href="" target="_blank">Return and Exchange</a>
      </div>
      <div class="content_4">
        <h4>NEWSLETTER</h4>
        <p>Be the first to know about new<br />arrivals, sales & promos!</p>
        <div class="f-mail">
          <input type="email" placeholder="Your Email" />
          <i class="bx bx-envelope"></i>
        </div>
        <hr />
      </div>
    </div>
    <div class="f-design">
      <div class="f-design-txt">
        <p>Design and Code by Shoporia Store</p>
      </div>
    </div>
`,i=document.querySelector(".section-footer");i.insertAdjacentHTML("afterbegin",t);
