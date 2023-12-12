const menuTrigger = document.querySelectorAll('[data-open-btn]');
const mobileMenu = document.querySelectorAll('[data-show]');
const closeTrigger = document.querySelectorAll('[data-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < menuTrigger.length; i++) {

    const closeMenu = function() {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    menuTrigger[i].addEventListener('click', function() {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    closeTrigger[i].addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu)
}

//mobile menu
const submenu = document.querySelectorAll('.sub-trigger');
    submenu.forEach((menu) => menu.addEventListener('click', toggle));

    function toggle() {
        submenu.forEach((item) => item != this ? item.classList.remove('expand') : null);

        if (this.classList != 'expand') {
            this.classList.toggle('expand')
        }
    }


//Tabbed
var tabbedNav = new Swiper('.tabs', {
    slidesPerView: 1,
    centeredSlides: true,
    slidesPerGroup: false,
    spaceBetween: 20,
})
var theTab = new Swiper('.tabs-box', {
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav
    },
})






document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('productList');
  const productOverlay = document.getElementById('productOverlay');
  const productContent = document.getElementById('productContent');
  const products = productContent.getElementsByClassName('product');
  const lis = productList.getElementsByTagName('li');
  let contentWidth = 80; // Initial width in percentage

  for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function() {
      const selectedProduct = this.getAttribute('data-product');
      const productElement = document.getElementById(selectedProduct);

      if (productElement) {
        // Show the product overlay and selected product
        productOverlay.classList.add('active');
        productElement.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on the website content
      }
    });
  }

  function closeProductOverlay() {
    // Hide the product overlay and all products
    productOverlay.classList.remove('active');
    for (let i = 0; i < products.length; i++) {
      products[i].classList.remove('active');
    }
    document.body.style.overflow = ''; // Allow scrolling on the website content
  }

  productOverlay.addEventListener('click', function(event) {
    if (
      event.target === productOverlay ||
      event.target.classList.contains('close-button')
    ) {
      closeProductOverlay();
    }
  });

  // Function to manually increase the width
  function increaseWidth() {
    contentWidth += 10; // Increase width by 10%

    if (contentWidth > 100) {
      contentWidth = 100; // Limit the width to 100%
    }

    productContent.style.width = contentWidth + '%';
  }

  // Bind the increaseWidth function to a button or any user-triggered action
  const increaseWidthButton = document.getElementById('increaseWidthButton');
  increaseWidthButton.addEventListener('click', increaseWidth);
});


