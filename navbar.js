const navBarHTML = `
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
`

const navbarElem = document.querySelector(".section-navbar")
navbarElem.insertAdjacentHTML("afterbegin", navBarHTML);