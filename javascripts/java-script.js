document.addEventListener("DOMContentLoaded", function () {
  // ДАННЫЕ
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
      vinyl: "./images/vinyl.svg",
      elips1_color: "#7083ff",
      elips2_color: "#b2a3ff",
      elips3_color: "#390071",
      soundpad: "./images/console_1.svg",
      laptop: "./images/laptop_1.svg",
      wires: "./images/wires.svg",
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
      vinyl: "./images/vinyl_2.svg",
      elips1_color: "#EE9300",
      elips2_color: "#FFDB70",
      elips3_color: "#FFF0B4",
      soundpad: "./images/console_2.svg",
      laptop: "./images/laptop_2.svg",
      wires: "./images/wires_2.svg",
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
      vinyl: "./images/vinyl_3.svg",
      elips1_color: "#F04B35",
      elips2_color: "#F0A835",
      elips3_color: "#F0C135",
      soundpad: "./images/console_3.svg",
      laptop: "./images/laptop_3.svg",
      wires: "./images/wires_3.svg",
    },
  ];

  // ТЕКСТЫ И КАРТИНКИ ДЛЯ ОКОШЕК
  const rulesTexts = [
    "Дорогуша, перед тобой сцена в клетку, а вокруг — ноты, музыкальные инструменты. Перетащи их внутрь так, чтобы заполнить все пустые клетки. Ни одной свободной, ни одного наложения. Как идеальный чемодан в тур. Справишься?",
    "Друг мой, посмотри: ноты и инструменты ждут своего места. Перетащи их в пустые клетки так, чтобы заполнить всё поле. Ни одной свободной клеточки, как в идеальной мелодии ни одной лишней ноты. У тебя получится!",
    "Смотри сюда. Поле пустое, вокруг — элементы. Твоя задача: заполнить всё без пробелов. Никакой магии, просто логика и чувство формы. Музыка любит порядок, даже когда кажется, что она хаотична. Давай, у тебя есть вкус, я знаю.",
  ];

  const birdMiniImages = [
    "./images/bird1mini.svg",
    "./images/bird2mini.svg",
    "./images/bird3mini.svg",
  ];

  const soundpadPopup = document.getElementById("soundpadPopup");
  const soundpadBird = document.getElementById("soundpadBird");
  const soundpadText = document.getElementById("soundpadText");
  const closeSoundpad = document.getElementById("closeSoundpad");
  const soundpadTextContainer = document.getElementById(
    "soundpadTextContainer",
  );
  // тексты для пульта
  const soundpadTexts = [
    "Это пульт. Кликни — он вырастет. Крути ручки, жми кнопки, создавай свой звук. Здесь ты главный!",
    "Это пульт. Кликни — он откроется. Крути ручки, нажимай клавиши, создавай своё звучание. Здесь ты главный творец!",
    "Это не игрушки. Это пульт, на котором рождается звук. Кликни, увеличься, покрути всё, что хочешь. Не бойся ошибиться — ошибки тут часто звучат круче, чем задумки",
  ];
  // ЭЛЕМЕНТЫ ПЕРВОГО ЭКРАНА
  const birdImage = document.getElementById("birdImage");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const confirmBtn = document.getElementById("confirmBtn");
  const body = document.body;
  const html = document.documentElement;

  // ЭЛЕМЕНТЫ ВТОРОГО ЭКРАНА
  const box = document.getElementById("tetrisBox");
  const note1 = document.getElementById("note1");
  const note2 = document.getElementById("note2");
  const headphones = document.getElementById("headphones");
  const guitar = document.getElementById("guitar");
  const sticks = document.getElementById("sticks");
  const microphone = document.getElementById("microphone");
  const vinyl = document.getElementById("vinyl");

  // ЭЛЕМЕНТЫ ОКОШКА
  const rulesPopup = document.getElementById("rulesPopup");
  const rulesBird = document.getElementById("rulesBird");
  const rulesText = document.getElementById("rulesText");
  const closeRules = document.getElementById("closeRules");

  // ЭЛЕМЕНТЫ ТРЕТЬЕГО ЭКРАНА
  const soundpad = document.getElementById("SoundPad");
  const laptop = document.getElementById("LapTop");
  const wires = document.getElementById("wires");

  // ПЕРЕМЕННЫЕ
  let currentBird = 0;
  let isConfirmed = false;

  // ФУНКЦИИ
  function toggleScroll(lock) {
    if (lock) {
      body.style.overflow = "hidden";
      html.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
      html.style.overflow = "";
    }
  }
  // СМЕНА ЭЛЕМЕНТОВ
  function changeAllElements(index) {
    const bird = birds[index];

    birdImage.src = bird.image;
    birdImage.setAttribute("data-bird", bird.size);

    if (!isConfirmed) {
      body.style.backgroundColor = bird.color;
    }

    // все элементы второго экрана
    if (box) box.src = bird.box;
    if (note1) note1.src = bird.note_1;
    if (note2) note2.src = bird.note_2;
    if (headphones) headphones.src = bird.headphones;
    if (guitar) guitar.src = bird.guitar;
    if (sticks) sticks.src = bird.sticks;
    if (microphone) microphone.src = bird.microphone;
    if (vinyl) vinyl.src = bird.vinyl;

    //  все элементы 3 экрана
    if (soundpad) soundpad.src = bird.soundpad;
    if (laptop) laptop.src = bird.laptop;
    if (wires) wires.src = bird.wires;

    // текст и картинка в первом окошке
    if (rulesText) rulesText.textContent = rulesTexts[index];
    if (rulesBird) rulesBird.src = birdMiniImages[index];
    // второе окошко
    if (soundpadBird) soundpadBird.src = birdMiniImages[index];
    if (soundpadText) soundpadText.textContent = soundpadTexts[index];
    if (soundpadPopup) {
      soundpadPopup.setAttribute("data-bird", bird.size);
    }
    // ЦВЕТА НА 3 ЭКРАНЕ
    const allElips = document.querySelectorAll(".elips_1, .elips_2, .elips_3");
    allElips.forEach((el) => {
      if (el.classList.contains("elips_1")) {
        el.style.backgroundColor = bird.elips1_color;
      } else if (el.classList.contains("elips_2")) {
        el.style.backgroundColor = bird.elips2_color;
      } else if (el.classList.contains("elips_3")) {
        el.style.backgroundColor = bird.elips3_color;
      }
    });

    console.log(`Смена на птицу ${index + 1}, цвет фона: ${bird.color}`);
  }

  function changeBird(index) {
    birdImage.style.transition = "opacity 0.2s ease";
    birdImage.style.opacity = "0";

    setTimeout(() => {
      changeAllElements(index);
      birdImage.style.opacity = "1";
    }, 150);
  }

  // DRAG & DROP

  // награда
  const rewardVinyl = document.getElementById("rewardVinyl");
  const collectRewardBtn = document.createElement("button");

  // кнопка сбора награды
  collectRewardBtn.className = "collect_reward";
  collectRewardBtn.id = "collectReward";
  collectRewardBtn.textContent = "забрать пластинку";
  document.body.appendChild(collectRewardBtn);

  // функция показа награды
  function showReward() {
    if (rewardVinyl) {
      rewardVinyl.classList.add("show");

      setTimeout(() => {
        collectRewardBtn.classList.add("show");
      }, 1500);
    }
  }

  // функция сброса награды
  function resetReward() {
    if (rewardVinyl) {
      rewardVinyl.classList.remove("show");
    }
    collectRewardBtn.classList.remove("show");
  }

  // обработчик для кнопки сбора награды
  collectRewardBtn.addEventListener("click", function () {
    rewardVinyl.classList.remove("show");
    collectRewardBtn.classList.remove("show");
  });

  // DRAG & DROP
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
        setTimeout(() => {
          showReward();
        }, 100);
      }
    } else {
      console.log("Брошен мимо поля");
    }

    activeElement.style.zIndex = "10";
    activeElement.style.cursor = "grab";

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    activeElement = null;
  }

  // функция сброса Drag & Drop
  function resetDragAndDrop() {
    placedItems = [];
    draggableElements.forEach((el) => {
      el.classList.remove("placed");
      el.style.pointerEvents = "auto";
      el.style.opacity = "1";
    });
    resetReward();
  }

  // ОБРАБОТЧИКИ
  leftArrow.onclick = function (e) {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird - 1 + birds.length) % birds.length;
      changeBird(currentBird);
    }
  };

  rightArrow.onclick = function (e) {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird + 1) % birds.length;
      changeBird(currentBird);
    }
  };

  confirmBtn.onclick = function (e) {
    e.preventDefault();

    if (!isConfirmed) {
      isConfirmed = true;

      confirmBtn.style.background = "#4CAF50";
      confirmBtn.style.color = "white";
      confirmBtn.textContent = "выбрано ✓";

      toggleScroll(false);

      console.log("Выбор подтвержден, скролл разблокирован");
    }
  };

  // скролл до второго экрана
  window.addEventListener("scroll", function () {
    const block2 = document.getElementById("block2");
    const block2Position = block2.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    //второй экран появляется в окне
    if (block2Position < windowHeight - 100 && block2Position > -100) {
      if (
        rulesPopup &&
        !rulesPopup.classList.contains("show") &&
        !window.hasShownRules
      ) {
        rulesPopup.classList.add("show");
        window.hasShownRules = true; // чтобы не показывалось каждый раз при скролле
        console.log("Окошко с правилами показано");
      }
    }
  });

  // закрытие по кнопке
  if (closeRules) {
    closeRules.addEventListener("click", function () {
      rulesPopup.classList.remove("show");
    });
  }

  // закрытие по клику вне окошка (без затемнения)
  document.addEventListener("click", function (e) {
    if (
      rulesPopup.classList.contains("show") &&
      !rulesPopup.contains(e.target) &&
      e.target !== closeRules
    ) {
      rulesPopup.classList.remove("show");
    }
  });

  // скролл до третьего экрана
  window.addEventListener("scroll", function () {
    const block3 = document.getElementById("block3");
    const block3Position = block3.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // третий экран появляется в окне
    if (block3Position < windowHeight - 100 && block3Position > -100) {
      if (
        soundpadPopup &&
        !soundpadPopup.classList.contains("show") &&
        !window.hasShownSoundpad
      ) {
        soundpadPopup.classList.add("show");
        window.hasShownSoundpad = true;
        console.log("Окошко с пультом показано");
      }
    }
  });

  // закрытие по кнопке
  if (closeSoundpad) {
    closeSoundpad.addEventListener("click", function () {
      soundpadPopup.classList.remove("show");
    });
  }

  // закрытие по клику вне окошка
  document.addEventListener("click", function (e) {
    if (
      soundpadPopup &&
      soundpadPopup.classList.contains("show") &&
      !soundpadPopup.contains(e.target) &&
      e.target !== closeSoundpad
    ) {
      soundpadPopup.classList.remove("show");
    }
  });

  // ИНИЦИАЛИЗАЦИЯ
  // toggleScroll(true);
  changeAllElements(0);
  birdImage.style.opacity = "1";
  // console.log("Скрипт загружен, скролл заблокирован");
});
