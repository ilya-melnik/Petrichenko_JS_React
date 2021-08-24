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
    modal = document.querySelector(".modal");

  modalTrigger.forEach((m) => {
    m.addEventListener("click", openModal);
  });

  function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
    // modal.classList.toggle("show");
    document.body.style.overflow = "";
  }

  function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    // modal.classList.toggle("show");
    document.body.style.overflow = "hidden";
    //(если modal было открыто пользователем тогда не всплывать автоматически еще раз повторно
    clearInterval(modalTimerId);
  }
  //при нажатии на кнопку вокруг всплывшего модального окна, окно закрываеся
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.getAttribute("data-close") == "") {
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

  const getResource = async (url) => {
    const res = await fetch(url);

    //for fetch error http 404,501... -don't error
    //for him error is a disconect internet...
    //чтобы обработать catch, need:
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }
    return await res.json(); //js obj
  };
  // getResource("http://localhost:3000/menu").then((data) => {
  //   //{деструкторизация obj, на каждой итерации, вытягиваются свойства obj}
  // data.forEach(({ img, altimg, title, descr, price }) => {
  //   new MenuCard(
  //     img,
  //     altimg,
  //     title,
  //     descr,
  //     price,
  //     ".menu .container"
  //   ).render();
  //   });
  // });
  // имеет свойства data, и приходит сразу в обьекте js
  axios.get("http://localhost:3000/menu").then((data) => {
    data.data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });

  // getResource("http://localhost:3000/menu").then((data) => createCard(data));
  // function createCard(data) {
  //   data.forEach(({ img, altimg, title, descr, price }) => {
  //     const element = document.createElement("div");
  //     element.classList.add("menu__item");
  //     element.innerHTML = `
  //       <img src=${img} alt=${altimg} />
  //       <h3 class="menu__item-subtitle">${title}</h3>
  //       <div class="menu__item-descr">${descr}</div>
  //       <div class="menu__item-divider"></div>
  //       <div class="menu__item-price">
  //          <div class="menu__item-cost">Цена:</div>
  //          <div class="menu__item-total"><span>${price}</span> грн/день</div>
  //       </div>
  //       `;

  //     document.querySelector(".menu .container").append(element);
  //   });
  // }
  // Forms
  const forms = document.querySelectorAll("form");
  const message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  forms.forEach((item) => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=utf-8" },
      body: data,
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;

      form.insertAdjacentElement("afterend", statusMessage);

      const formData = new FormData(form);

      //чтобы formData превратить в формат JSON
      let json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => {
          showThanksModal(message.failure);
        })
        .finally(() => {
          form.reset();
        });
    });
  }

  //---------------
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");

    prevModalDialog.classList.add("hide");
    openModal();

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
            <div class="modal__content">
               <div class="modal__close data-close">×</div>
              <div class="modal__title">${message}</div>
            </div>
          `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 3000);
  }
  //slider 1
  //0
  const prev = document.querySelector(".offer__slider-prev"),
    next = document.querySelector(".offer__slider-next"),
    slides = document.querySelectorAll(".offer__slide"),
    //8
    current = document.querySelector("#current"),
    total = document.querySelector("#total");
  let slideIndex = 1;

  //  offerSliderWrapper = document.querySelector(".offer__slider-wrapper");
  //  offerSlide = document.querySelectorAll(".offer__slide");
  //7
  showSlide(slideIndex);
  //9
  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
  } else {
    total.textContent = slides.length;
  }

  //1
  function showSlide(n) {
    // after 4 img, show 1 img and  нажимая в обратную сторону, 4 img
    //2
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    //3
    slides.forEach((item) => (item.style.display = "none"));
    slides[slideIndex - 1].style.display = "block";

    //10 change current img
    if (slides.length && slideIndex < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }
  }
  //4
  function plusSlides(n) {
    showSlide((slideIndex += n));
  }
  //5,6
  prev.addEventListener("click", () => {
    plusSlides(-1);
  });
  next.addEventListener("click", () => {
    plusSlides(1);
  });
});
