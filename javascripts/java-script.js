document.addEventListener("DOMContentLoaded", function () {
  // начало конца//
  const birds = [
    {
      image: "./images/bird1.svg",
      color: "#12101C",
      size: "1",
      box: "./images/box.svg",
      note_1: "./images/note_1.svg",
      note_2: "./images/note_2.svg",
      headphones: "./images/headphones.svg",
      guitar: "./images/guitar.svg",
      sticks: "./images/sticks.svg",
      microphone: "./images/microphone.svg",
      disk: "./images/disk.svg",
      vinyl: "./images/vinyl.svg",
    },
    {
      image: "./images/bird2.svg",
      color: "#00313B",
      size: "2",
      box: "./images/box2.svg",
      note_1: "./images/note_11.svg",
      note_2: "./images/note_22.svg",
      headphones: "./images/headphones_2.svg",
      guitar: "./images/guitar_2.svg",
      sticks: "./images/sticks_2.svg",
      microphone: "./images/microphone_2.svg",
      disk: "./images/disk_2.svg",
      vinyl: "./images/vinyl_2.svg",
    },
    {
      image: "./images/bird3.svg",
      color: "#00117D",
      size: "3",
      box: "./images/box3.svg",
      note_1: "./images/note_111.svg",
      note_2: "./images/note_222.svg",
      headphones: "./images/headphones_3.svg",
      guitar: "./images/guitar_3.svg",
      sticks: "./images/sticks_3.svg",
      microphone: "./images/microphone_3.svg",
      disk: "./images/disk_3.svg",
      vinyl: "./images/vinyl_3.svg",
    },
  ];

  // ========== ЭЛЕМЕНТЫ ПЕРВОГО ЭКРАНА ==========
  const birdImage = document.getElementById("birdImage");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const confirmBtn = document.getElementById("confirmBtn");
  const body = document.body;
  const html = document.documentElement;

  // ========== ЭЛЕМЕНТЫ ВТОРОГО ЭКРАНА ==========
  const box = document.getElementById("tetrisBox");
  const note1 = document.getElementById("note1");
  const note2 = document.getElementById("note2");
  const headphones = document.getElementById("headphones");
  const guitar = document.getElementById("guitar");
  const sticks = document.getElementById("sticks");
  const microphone = document.getElementById("microphone");
  const vinyl = document.getElementById("vinyl");
  // ========== ПЕРЕМЕННЫЕ ==========
  let currentBird = 0;
  let isConfirmed = false;

  // ========== ФУНКЦИИ ==========

  // блокировка/разблокировка скролла
  function toggleScroll(lock) {
    if (lock) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
    }
  }

  // смена всех элементов при переключении птички
  function changeAllElements(index) {
    const bird = birds[index];

    birdImage.src = bird.image;
    birdImage.setAttribute("data-bird", bird.size);

    if (!isConfirmed) {
      body.style.backgroundColor = bird.color;
    }

    if (box) box.src = bird.box;
    if (note1) note1.src = bird.note_1;
    if (note2) note2.src = bird.note_2;
    if (headphones) headphones.src = bird.headphones;
    if (guitar) guitar.src = bird.guitar;
    if (sticks) sticks.src = bird.sticks;
    if (microphone) microphone.src = bird.microphone;

    if (vinyl) vinyl.src = bird.vinyl;

    console.log(`Смена на птицу ${index + 1}, цвет фона: ${bird.color}`);
  }

  // смена птицы с анимацией
  function changeBird(index) {
    birdImage.style.transition = "opacity 0.2s ease";
    birdImage.style.opacity = "0";

    setTimeout(() => {
      changeAllElements(index);
      birdImage.style.opacity = "1";
    }, 150);
  }

  //  ОБРАБОТЧИКИ

  // левая стрелка
  leftArrow.onclick = function (e) {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird - 1 + birds.length) % birds.length;
      changeBird(currentBird);
    }
  };

  // правая стрелка
  rightArrow.onclick = function (e) {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird + 1) % birds.length;
      changeBird(currentBird);
    }
  };

  // кнопка подтверждения
  confirmBtn.onclick = function (e) {
    e.preventDefault();

    if (!isConfirmed) {
      isConfirmed = true;

      //внешний вид кнопки
      confirmBtn.style.background = "#4CAF50";
      confirmBtn.style.color = "white";
      confirmBtn.textContent = "выбрано ✓";

      toggleScroll(false);

      const rulesPopup = document.getElementById("rulesPopup");
      if (rulesPopup) {
        rulesPopup.classList.add("show");
      }

      console.log("выбор подтвержден, скролл разблокирован");
    }
  };

  // блок скролла
  toggleScroll(true);

  changeAllElements(0);
  birdImage.style.opacity = "1";

  console.log("скрипт загружен, скролл заблокирован");

  // драг энд дропчик фак гад демчик//

  const draggableElements = document.querySelectorAll(
    ".note_1, .note_2, .headphones, .guitar, .sticks, .microphone, .vinyl",
  );
  const dropZone = document.getElementById("tetrisBox");

  let activeElement = null;
  let offsetX = 0,
    offsetY = 0;
  let placedItems = [];

  draggableElements.forEach((el) => {
    el.style.cursor = "grab";
    el.style.userSelect = "none";
    el.setAttribute("draggable", "false");
    el.addEventListener("mousedown", onMouseDown);
  });

  function onMouseDown(e) {
    e.preventDefault();

    if (!isConfirmed) {
      alert("Сначала выбери персонажа!");
      return;
    }

    if (this.classList.contains("placed")) return;

    activeElement = this;

    const rect = activeElement.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    activeElement.style.zIndex = "1000";
    activeElement.style.cursor = "grabbing";
    activeElement.style.transition = "none";

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }

  function onMouseMove(e) {
    e.preventDefault();
    if (!activeElement) return;

    const newX = e.clientX - offsetX;
    const newY = e.clientY - offsetY;

    activeElement.style.left = newX + "px";
    activeElement.style.top = newY + "px";
  }

  function onMouseUp(e) {
    if (!activeElement) return;

    const elementRect = activeElement.getBoundingClientRect();
    const dropRect = dropZone.getBoundingClientRect();

    const centerX = elementRect.left + elementRect.width / 2;
    const centerY = elementRect.top + elementRect.height / 2;

    const isInDropZone =
      centerX > dropRect.left &&
      centerX < dropRect.right &&
      centerY > dropRect.top &&
      centerY < dropRect.bottom;

    if (isInDropZone) {
      activeElement.classList.add("placed");
      activeElement.style.pointerEvents = "none";
      activeElement.style.opacity = "0.8";
      placedItems.push(activeElement);

      if (placedItems.length === draggableElements.length) {
        setTimeout(() => alert("поздравляем! Все элементы собраны!"), 100);
      }
    } else {
      console.log("брошен мимо поля");
    }

    activeElement.style.zIndex = "10";
    activeElement.style.cursor = "grab";

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    activeElement = null;
  }

  // сброс
  function resetDragAndDrop() {
    placedItems = [];
    draggableElements.forEach((el) => {
      el.classList.remove("placed");
      el.style.pointerEvents = "auto";
      el.style.opacity = "1";
    });
  }
});
