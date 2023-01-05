import React from 'react'
import Categories from "../categories/Categories";
import './header-style.css'
export default function Header() {
  return (
<>
<header>
        <div class="burger">
          <i class="fa-solid fa-bars"> </i>
          <h2>BIG MERCHE</h2>
        </div>
        <div class="panier">
          <p>3</p>
          <i class="fa-solid fa-cart-shopping"> </i>
        </div>
      </header>
    <main class="menu-list">
    <Categories />
    </main>

</>
    
   
  )
}

// rfc tab