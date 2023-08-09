const userBestBasket = [
  { id: 1, title: 'لباس پلیری اول ژاپن', price: 200000, img: 'assests/img/japon.png', count: 1 },
  { id: 2, title: 'کیت اول بارسلونا', price: 320000, img: 'assests/img/barsa.png', count: 1 },
  { id: 3, title: 'لباس دوم لیورپول', price: 250000, img: 'assests/img/liverpol.png', count: 1 },
  { id: 4, title: 'پیرهن منچستر سیتی', price: 380000, img: 'assests/img/many-boland.png', count: 1 },
  { id: 5, title: 'پیرهن منچستر سیتی', price: 380000, img: 'assests/img/bo-anjeloti.png', count: 1 },
  { id: 6, title: 'لباس دوم لیورپول', price: 250000, img: 'assests/img/liverpol.png', count: 1 },
  { id: 1, title: 'لباس پلیری اول ژاپن', price: 200000, img: 'assests/img/japon.png', count: 1 },
  { id: 2, title: 'کیت اول بارسلونا', price: 320000, img: 'assests/img/barsa.png', count: 1 },
  { id: 3, title: 'لباس دوم لیورپول', price: 250000, img: 'assests/img/liverpol.png', count: 1 },
  { id: 4, title: 'پیرهن منچستر سیتی', price: 380000, img: 'assests/img/many-boland.png', count: 1 },
  { id: 5, title: 'پیرهن منچستر سیتی', price: 380000, img: 'assests/img/bo-anjeloti.png', count: 1 },
  { id: 6, title: 'لباس دوم لیورپول', price: 250000, img: 'assests/img/liverpol.png', count: 1 },
]

const userNewBasket = [
  { id: 101, title: 'کیت رئال مادرید', price: 350000, img: 'assests/img/kit-1.png', count: 1 },
  { id: 102, title: 'کیت منچستر یونایتد', price: 299000, img: 'assests/img/kit-2.png', count: 1 },
  { id: 103, title: 'کیت دورتمند', price: 210000, img: 'assests/img/kit-3.png', count: 1 },
  { id: 104, title: 'کیت بارسلونا', price: 300000, img: 'assests/img/kit-4.png', count: 1 },
  { id: 105, title: 'کیت پرتغال', price: 250000, img: 'assests/img/kit-5.png', count: 1 },
  { id: 106, title: 'کیت رئال مادرید', price: 320000, img: 'assests/img/kit-6.png', count: 1 },
  { id: 101, title: 'کیت رئال مادرید', price: 350000, img: 'assests/img/kit-1.png', count: 1 },
  { id: 102, title: 'کیت منچستر یونایتد', price: 299000, img: 'assests/img/kit-2.png', count: 1 },
  { id: 103, title: 'کیت دورتمند', price: 210000, img: 'assests/img/kit-3.png', count: 1 },
  { id: 104, title: 'کیت بارسلونا', price: 300000, img: 'assests/img/kit-4.png', count: 1 },
  { id: 105, title: 'کیت پرتغال', price: 250000, img: 'assests/img/kit-5.png', count: 1 },
  { id: 106, title: 'کیت رئال مادرید', price: 320000, img: 'assests/img/kit-6.png', count: 1 },
]

const cardsSelling = document.querySelector('.cards-selling');
const cardsNewProduct = document.querySelector('.cards-new');
let shoppingBasket = [];
const scrollBarTop = document.querySelector('.scroll-bar');
const basketNumber = document.querySelector('.basket-number');
const headerNav = document.querySelector('.header-nav');
const tableElem = document.querySelector('.tbody-elem');
const modalBasket = document.querySelector('.modal-basket');
const imgBasket = document.querySelector('.link__img-basket');
const mainContainer = document.querySelector('main');
const modalClose = document.querySelector('.modal-close');
const price = document.querySelector('.price');

/**
 * اسکرول بار اختصاصی بلای صفحه که با هر اسکرول به پایین و بالا ظاهر میشود
 */
function scrollBarCustom() {
  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const documentHeight = this.document.body.clientHeight;
    const innerHeight = window.innerHeight;
    const scrollCalculator = Math.floor((scrollY / (documentHeight - innerHeight)) * 100);
    scrollBarTop.style.width = scrollCalculator + '%';
  });
}

/**
 * nav تغییر پوزیشن هدر با محتوای 
 */
function scrollSecendHeader() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      headerNav.style.top = 24 + '%';
    } else {
      headerNav.style.top = 100 + '%';
    }
  });
}

/**
 * ساخت واضافه المان‌ها به صفحه 
 * @param {object} product - دسترسی به آیتم‌‌های لیست 
 * @param {HTMLDivElement} container - اضافه کردن المان کارت به کانتینر 
 */
function createProductCard(product, container) {
  let card = document.createElement('div');
  card.classList.add('card-selling');

  let imgWrapper = document.createElement('div');
  imgWrapper.classList.add('img-selling');
  let imgElem = document.createElement('img');
  imgElem.setAttribute('src', product.img);
  imgElem.setAttribute('alt', product.title);

  let textWrapper = document.createElement('div');
  textWrapper.classList.add('text-selling');

  let titleSpan = document.createElement('span');
  titleSpan.innerHTML = product.title;

  let priceElem = document.createElement('h3');
  priceElem.innerHTML = product.price + ' تومان';

  let aShowMoreElem = document.createElement('a');

  // برای نمایش بیشتر محصول ایدی محصول رو وارد کن
  aShowMoreElem.setAttribute('href', '#');
  // aShowMoreElem.setAttribute('target', '_blank');

  let btnBasket = document.createElement('button');
  btnBasket.classList.add('btn__basket');
  btnBasket.innerHTML = 'رفتن به سبد خرید';

  btnBasket.addEventListener('click', function () {
    addProductToBasket(product.id, product); // userBestBasket
    // paramId(product);
  });

  // با کیلک بر روی افزودن به سبد خریئ فقط یکبار شماره سبد خرید تغییر میکند
  btnBasket.addEventListener('click', function () {
    basketNumberProdact();
  });

  textWrapper.append(titleSpan, priceElem);
  imgWrapper.append(imgElem);
  aShowMoreElem.append(imgWrapper, textWrapper);
  card.append(aShowMoreElem, btnBasket);

  container.append(card);
}

/**
 * ساخت کارت سبد خرید 
 */
function createCardBasket(shop) {
  tableElem.innerHTML = ''
  shop.forEach((product) => {
    tableElem.insertAdjacentHTML('beforeend', `
    <tr>
      <td>
        <a href="#">
          <img src=${product.img} alt=${product.title}>
        </a>
      </td>
      <td>
        <span>${product.title}</span>
      </td>
      <td>
        <h3>${product.price}</h3>
      </td>
      <td>
        <div class="input__add">
          <input
           type="button"
           class="input-add"
           value="-"
          onclick="negativeCount()">

          <input type="number"
           class="input-num"
           value="1"
           onchange="inputNumber(event, ${product.count})"
          min="1">

          <input
           type="button" 
           class="input-subtract" 
          value="+"
          onclick="positiveCount()">

          <div class="icon-delete">
            <i 
             class="fas fa-times" 
             aria-hidden="true"
             onclick="iconDelete(${product.id})">
            </i>
          </div>
        </div>
      </td>
    </tr>
    `);
  })
  calculateTotalPrice();
}

/**
 * محاسبه قیمت
 * @returns - قیمت نهایی
 */
function calculateTotalPrice() {
  let totalPrice = 0;
  const rows = tableElem.querySelectorAll('tr');

  rows.forEach((row) => {
    const priceElement = row.querySelector('h3');
    const quantityElement = row.querySelector('.input-num');

    const price = priceElement.textContent;
    const quantity = quantityElement.value;

    totalPrice += price * quantity;
  });
  price.innerHTML = `${totalPrice} قیمت کل`;
}

/**
 * اسلایدر 
 */
class SliderShow {
  constructor(container) {
    this.container = container;

    this.slides = Array.from(container.querySelectorAll('.card-selling'));
    this.slideWidth = this.slides[0].offsetWidth +
      parseInt(window.getComputedStyle(this.slides[0]).marginLeft); // عرض هر اسلاید

    this.currentSlideIndex = 0;
    this.sliedTimeOut = null;
    this.render();
  }

  render() {
    this.addSliderControls();
    this.showCurrentSlide();
  }

  // ساخت دکمه قبلی و بعدی
  addSliderControls() {
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('btn__next');

    // و اضافه شدنش به دکمه next ساخت آیکون 
    const iconNextElem = document.createElement('i');
    iconNextElem.classList.add('fa', 'fa-chevron-right');
    nextBtn.appendChild(iconNextElem);

    nextBtn.addEventListener('click', () => {
      this.showNextSlide();
    });

    const prevBtn = document.createElement('button');
    prevBtn.classList.add('btn__prev');

    // و اضافه شدنش به دکمه next ساخت آیکون 
    const iconPrevElem = document.createElement('i');
    iconPrevElem.classList.add('fa', 'fa-chevron-left');
    prevBtn.appendChild(iconPrevElem);

    prevBtn.addEventListener('click', () => {
      this.showPreviousSlide();
    });

    this.container.parentElement.appendChild(nextBtn);
    this.container.parentElement.appendChild(prevBtn);
  }

  showCurrentSlide() {
    let slidePosition = this.currentSlideIndex * this.slideWidth;
    this.container.style.transform = `translateX(${slidePosition}px)`;

    // هر چهار ثانیه اسلاید بخوره
    this.sliedTimeOut = setTimeout(() => {
      this.currentSlideIndex++;

      if (this.currentSlideIndex >= this.slides.length - 3) {
        this.currentSlideIndex = 0;
      }

      this.showCurrentSlide()
    }, 4000);
  }

  // دکمه بعدی
  showNextSlide() {
    this.currentSlideIndex++;

    if (this.currentSlideIndex >= this.slides.length - 3) {
      this.currentSlideIndex = 0;
    }

    clearTimeout(this.sliedTimeOut);
    this.showCurrentSlide();
  }


  // دکمه قبلی
  showPreviousSlide() {
    this.currentSlideIndex--;

    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.slides.length - 4;
    }

    clearTimeout(this.sliedTimeOut);
    this.showCurrentSlide();
  }
}


/**
 * نمایش مدال
 */
function showModal() {
  imgBasket.addEventListener('click', () => {
    modalBasket.style.display = 'block';
    mainContainer.style.filter = 'blur(10px)';
  });
}

/**
 * x پنهان کردن مدال با کلیک بر روی 
 */
function closeModal() {
  modalClose.addEventListener('click', () => {
    modalBasket.style.display = 'none';
    mainContainer.style.filter = 'blur(0px)';
  });
}

/**
 * Esc بستن مدال با کلیک بر روی
 */
function closeModalWithEsc() {
  document.body.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
      modalBasket.style.display = 'none';
      mainContainer.style.filter = 'blur(0px)';
    }
  });
}


// TODO: برای show more
// /**
//  * url پیدا کردن ایدی هر محصول و پارس ان به 
//  * @param {Array} allListArray - کل لیست کاربر
// */
// function paramId(allListArray) {
//   let newUrl = new URLSearchParams(location.search)
//   let getNewUrl = newUrl.get('id')

//   let mainUser = allListArray.find(function (user) {
//     return user.id = Number(getNewUrl);
//   });
// }


/**
 * با کلیک بر روس سبد خرید اون محصول به آرایه اضافه میشه
 * @param {Array.id} productId - آیدی محصولات
 * @param {Array} userlist - اطلاعات کل محصولات
 */
function addProductToBasket(productId, userlist) {
  let isExist = false

  // در صورت وجود محصول در سبد خرید یکی به تعدادش اضافه شود
  isExist = shoppingBasket.some((product) => {
    if (productId === product.id) {
      product.count++;
      return true;
    }
  })
  
  if (!isExist) {
    // userlist.count = 1
    shoppingBasket.push(userlist);
  } else {
    // دسترسی به مقدار اینپوت نامبر
    inputNumber()
  calculateTotalPrice()
    // const rows = tableElem.querySelectorAll('tr');
    // rows.forEach((row) => {
    //   let inputTypeNumber = row.querySelector('.input-num');
    //   // inputTypeNumber.value = userlist.count

    //   // console.log(`input: ${inputTypeNumber.value}`);
      
    // })
  }
  createCardBasket(shoppingBasket);
}


// اپدیت قیمت با اضافه کردن تعداد
function inputNumber(e, count) {
  // e.target.value = count
  console.log(e.target.value)
  console.log(count);
  calculateTotalPrice()
}

/**
 * شمارش منفی سبد خرید
 */
function negativeCount() {
  const rows = tableElem.querySelectorAll('tr');
  rows.forEach((row) => {
    let inputTypeNumber = row.querySelector('.input-num');
    inputTypeNumber.value--

    calculateTotalPrice()
  })
}

/**
 * شمارش مثبت سبد خرید
 */
function positiveCount() {
  const rows = tableElem.querySelectorAll('tr');
  rows.forEach((row) => {
    let inputTypeNumber = row.querySelector('.input-num');
    inputTypeNumber.value++

    calculateTotalPrice()
  })
}



/**
 * حذف از سبد خرید
 * @param {id} productId - ایدی محصول
 */
function iconDelete(productId) {
  shoppingBasket = shoppingBasket.filter(product => product.id !== productId);
  createCardBasket(shoppingBasket);
  basketNumberProdact();
}

/**
 * اضاف کردن عدد بسکت با یک کلیک
 */
function basketNumberProdact() {
  basketNumber.textContent = shoppingBasket.length;
}

function init() {
  // فراخانی لیست محصولات پر فروش
  userBestBasket.forEach(function (product) {
    createProductCard(product, cardsSelling);
  });

  // فراخانی لیست جدیدترین محصولات
  userNewBasket.forEach(function (product) {
    createProductCard(product, cardsNewProduct);
  });

  scrollBarCustom();
  scrollSecendHeader();

  // فراخانی کلاس اسلایدر
  document.querySelectorAll('.cards-selling').forEach(function (obj) {
    new SliderShow(obj);
  });

  showModal();
  closeModal();
  closeModalWithEsc();
}

init();
