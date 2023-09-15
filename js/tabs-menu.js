document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__down__menu-btn").forEach(item => {
    item.addEventListener("click", function() {
      let btn = this;
      let dropdown = this.parentElement.querySelector(".header__down__menu__dropdown");
          
    document.querySelectorAll(".header__down__menu-btn").forEach(el => {
        if (el != btn) {
          el.classList.remove("active-btn");
        }
      });
      
      document.querySelectorAll(".header__down__menu__dropdown").forEach(el => {
        if (el != dropdown) {
          el.classList.remove("menu-active");
        }
      })
      dropdown.classList.toggle("menu-active");
      btn.classList.toggle("active-btn")
    })
  })
  
  document.addEventListener("click", function(e) {
    let target = e.target;
    if (!target.closest(".header__down__menu")) {
      document.querySelectorAll(".header__down__menu__dropdown").forEach(el => {
          el.classList.remove("menu-active");
      })
       document.querySelectorAll(".header__down__menu-btn").forEach(el => {
          el.classList.remove("active-btn");
      });
    }
  })
  })