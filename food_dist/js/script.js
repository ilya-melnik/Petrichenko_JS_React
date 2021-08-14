window.addEventListener("DOMContentLoaded", () => {
  //  Tabs
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent"),
    tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");

    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  // Timer
  const dedline = "2021-09-15";

  function getTimerRemaining(endtimer) {
    const t = Date.parse(endtimer) - Date.parse(new Date()),
      days = Math.floor(t / (1000 * 60 * 60 * 24)),
      hours = Math.floor((t / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((t / 1000 / 60) % 60),
      seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  // добавляет 0 перед числом < 10
  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else if (num <= 0) {
      return `00`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtimer) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timerInterval = setInterval(updateClock, 1000);
    updateClock(); // чтобы в верстке не отображались даные с html

    function updateClock() {
      const t = getTimerRemaining(endtimer);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.total <= 0) {
        clearInterval(timerInterval);
      }
    }
  }

  setClock(".timer", dedline);

  // Modal
  const modalTrigger = document.querySelectorAll("[data-modal]"),
    modal = document.querySelector(".modal"),
    modalCloseBtn = document.querySelector("[data-close]");

  function openModal() {
    // modal.classList.add("show");
    // modal.classList.remove("hide");
    modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    //(если modal было открыто пользователем тогда не всплывать автоматически еще раз повторно
    clearInterval(modalTimerId);
  }

  modalTrigger.forEach((m) => {
    m.addEventListener("click", openModal);
  });

  function closeModal() {
    // modal.classList.add("hide");
    // modal.classList.remove("show");
    modal.classList.toggle("show");
    document.body.style.overflow = "";
  }
  modalCloseBtn.addEventListener("click", closeModal);

  //при нажатии на кнопку вокруг всплывшего модального окна, окно закрываеся
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.code === "Escape") {
      closeModal();
    }
  });

  // even code можно на гуглить разные коды клавиатуры.
  // close modalWindov on Click "Escype"
  // если modal opan
  // вызвать modal через 10 мин
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  // вызвать modal через 10 мин (если было открыто пользователем тогда очистить(записано выше clearInterval))
  const modalTimerId = setTimeout(openModal, 60000);

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal();
      // удаляет повторный вызов функции при доскроле (функция отражается однажды)
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  // вызвать modal при скроле в конце страницы
  window.addEventListener("scroll", showModalByScroll);

  //CLASS
  // use class for cards
  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAN();
    }
    changeToUAN() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement("div");
      //проверка если класс не передан в аргумент, присвоит вручную
      if (this.classes.length == 0) {
        this.classes.push("menu__item");
      }
      this.classes.forEach((classNum) => element.classList.add(classNum));
      element.innerHTML = `
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
             <div class="menu__item-cost">Цена:</div>
             <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
      `;
      this.parent.append(element);
    }
  }
  new MenuCard(
    "img/tabs/vegy.jpg",
    "vegi",
    'Меню "Фитнес"',
    ' Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    "post",
    'Меню "Постное"',
    "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    14,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    "elite",
    "Меню “Премиум”",
    "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    21,
    ".menu .container",
    "menu__item"
  ).render();

  // Forms
  const forms = document.querySelectorAll("form");
  const message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с вами свяжемся!",
    failure: "Что-то пошло не так",
  };
  // подвязка формы под запросы ниже
  forms.forEach((item) => {
    postData(item);
  });
  function postData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //чтобы отменить перезагрузка страницы

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      statusMessage.textContent = message.loading;
      form.appendChild(statusMessage);

      const request = new XMLHttpRequest();
      request.open("POST", "server.php");
      //  new XMLHttpRequest() и setRequestHeader не устанавливается!!!, 
      // request.setRequestHeader("Content-type", "multipart/from-data");
      const formData = new FormData(form);

      request.send(formData);

      request.addEventListener("load", () => {
        if (request.status === 200) {
          console.log(request.response);
          statusMessage.textContent = message.success;
          form.reset(); 
          setTimeout(()=>{
            statusMessage.remove()
          },2000)    
        } else {
          statusMessage.textContent = message.failure;
        }
      });
    });
  }
});
