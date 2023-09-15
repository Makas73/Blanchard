document.addEventListener("DOMContentLoaded", function () {

  document.querySelectorAll(".header__burger").forEach(function (headerBurger) {
    headerBurger.addEventListener("click", function () {

      this.classList.toggle("burger-active")

      document.querySelectorAll(".header__up__menu").item(0).classList.toggle('nav-list-active');

    })
  })

  document.querySelector(".btn-search-push").addEventListener("click", function () {

    document.querySelector(".header__tablet-search").classList.add('search-active');

  })
})

document.querySelector(".search-close").addEventListener("click", function () {

  document.querySelector(".header__tablet-search").classList.remove('search-active');
})


document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header__tablet-search");
  if (!target.closest(".tablet-search")) {
    form.classList.remove("search-active");
    form.querySelector("input").value = "";
  }
})

const anchors = document.querySelectorAll('a[href^="#"]')

// плавность якорей
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() 
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
  
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


