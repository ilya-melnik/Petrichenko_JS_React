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
});
