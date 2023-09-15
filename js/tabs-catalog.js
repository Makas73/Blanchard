document.addEventListener("DOMContentLoaded", function() {
    function tabsActive(tabPath, tabTarget) {
      document.querySelectorAll(tabPath).forEach(item => {
      item.addEventListener("click", function(e) {
        let path = e.currentTarget.dataset.path;
        document.querySelectorAll(tabTarget).forEach(el => {
          el.classList.remove("active");
        })
        document.querySelectorAll(tabPath).forEach(el => {
          el.classList.remove("active");
        })
        document.querySelector(`[data-target="${path}"]`).classList.add("active");
        
        this.classList.add("active");
      })
    })
    };
    tabsActive(".catalog__top__btn", ".catalog__down");
    tabsActive(".catalog__accordion__btn", ".catalog__down__left")
  })