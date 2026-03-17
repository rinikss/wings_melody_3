document.addEventListener("DOMContentLoaded", function () {
  // ДАННЫЕ
  const birds = [
    {
      image: "./images/bird1.svg",
      color: "#12101C",
      popup_color: "#12101C",
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
      lever: "./images/lever_bttn.svg",
      light_btn1: "./images/light_bttn1.svg",
      light_btn2: "./images/light_bttn2.svg",
      simple_btn: "./images/simpl_bttn.svg",
      slider_stroke: "./images/stroke.svg",
      slider_thumb: "./images/slider.svg",
    },
    {
      image: "./images/bird2.svg",
      color: "#00313B",
      popup_color: "#00313B",
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
      lever: "./images/lever_bttn2.svg",
      light_btn1: "./images/light_bttn11.svg",
      light_btn2: "./images/light_bttn22.svg",
      simple_btn: "./images/simpl_bttn2.svg",
      slider_stroke: "./images/stroke.svg",
      slider_thumb: "./images/slider_2.svg",
    },
    {
      image: "./images/bird3.svg",
      color: "#00117D",
      popup_color: "#00117D",
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
      lever: "./images/lever_bttn3.svg",
      light_btn1: "./images/light_bttn111.svg",
      light_btn2: "./images/light_bttn222.svg",
      simple_btn: "./images/simpl_bttn2.svg",
      slider_stroke: "./images/stroke.svg",
      slider_thumb: "./images/slider_3.svg",
    },
  ];

  //ТЕКСТЫ
  const rulesTexts = [
    "Дорогуша, перед тобой сцена в клетку, а вокруг — ноты, музыкальные инструменты. Перетащи их внутрь так, чтобы заполнить все пустые клетки. Ни одной свободной, ни одного наложения. Как идеальный чемодан в тур. Справишься?",
    "Друг мой, посмотри: ноты и инструменты ждут своего места. Перетащи их в пустые клетки так, чтобы заполнить всё поле. Ни одной свободной клеточки, как в идеальной мелодии ни одной лишней ноты. У тебя получится!",
    "Смотри сюда. Поле пустое, вокруг — элементы. Твоя задача: заполнить всё без пробелов. Никакой магии, просто логика и чувство формы. Музыка любит порядок, даже когда кажется, что она хаотична. Давай, у тебя есть вкус, я знаю.",
  ];

  const soundpadTexts = [
    "Это пульт. Кликни — он вырастет. Крути ручки, жми кнопки, создавай свой звук. Здесь ты главный!",
    "Это пульт. Кликни — он откроется. Крути ручки, нажимай клавиши, создавай своё звучание. Здесь ты главный творец!",
    "Это не игрушки. Это пульт, на котором рождается звук. Кликни, увеличься, покрути всё, что хочешь. Не бойся ошибиться — ошибки тут часто звучат круче, чем задумки",
  ];

  const birdMiniImages = [
    "./images/bird1mini.svg",
    "./images/bird2mini.svg",
    "./images/bird3mini.svg",
  ];

  // ЭЛЕМЕНТЫ
  // первый экран
  const birdImage = document.getElementById("birdImage");
  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");
  const confirmBtn = document.getElementById("confirmBtn");
  const body = document.body;
  const html = document.documentElement;

  // второй экран
  const box = document.getElementById("tetrisBox");
  const note1 = document.getElementById("note1");
  const note2 = document.getElementById("note2");
  const headphones = document.getElementById("headphones");
  const guitar = document.getElementById("guitar");
  const sticks = document.getElementById("sticks");
  const microphone = document.getElementById("microphone");
  const vinyl = document.getElementById("vinyl");

  // окошки
  const rulesPopup = document.getElementById("rulesPopup");
  const rulesBird = document.getElementById("rulesBird");
  const rulesText = document.getElementById("rulesText");
  const closeRules = document.getElementById("closeRules");

  const soundpadPopup = document.getElementById("soundpadPopup");
  const soundpadBird = document.getElementById("soundpadBird");
  const soundpadText = document.getElementById("soundpadText");
  const closeSoundpad = document.getElementById("closeSoundpad");

  const pultPopup = document.getElementById("pultPopup");
  const closePult = document.getElementById("closePult");

  // третий экран
  const soundpad = document.getElementById("SoundPad");
  const laptop = document.getElementById("LapTop");
  const wires = document.getElementById("wires");

  // ПЕРЕМЕННЫЕ
  let currentBird = 0;
  let isConfirmed = false;

  const toggleScroll = (lock) => {
    body.style.overflow = lock ? "hidden" : "";
    html.style.overflow = lock ? "hidden" : "";
  };

  const setElementSrc = (element, src) => {
    if (element) element.src = src;
  };

  // ОСНОВНАЯ ФУНКЦИЯ СМЕНЫ
  function changeAllElements(index) {
    const bird = birds[index];

    // первый экран
    setElementSrc(birdImage, bird.image);
    birdImage.setAttribute("data-bird", bird.size);
    if (!isConfirmed) body.style.backgroundColor = bird.color;

    // второй экран
    setElementSrc(box, bird.box);
    setElementSrc(note1, bird.note_1);
    setElementSrc(note2, bird.note_2);
    setElementSrc(headphones, bird.headphones);
    setElementSrc(guitar, bird.guitar);
    setElementSrc(sticks, bird.sticks);
    setElementSrc(microphone, bird.microphone);
    setElementSrc(vinyl, bird.vinyl);

    // третий экран основные элементы
    setElementSrc(soundpad, bird.soundpad);
    setElementSrc(laptop, bird.laptop);
    setElementSrc(wires, bird.wires);
    if (pultPopup) pultPopup.style.backgroundColor = bird.popup_color;
    // ОТКРЫТИЕ ПУЛЬТА
    if (soundpad) {
      soundpad.style.cursor = "pointer";
      soundpad.addEventListener("click", function () {
        if (isConfirmed) {
          // Проверяем что элемент существует
          const pultPopup = document.getElementById("pultPopup");
          if (pultPopup) {
            pultPopup.classList.add("show");
            toggleScroll(true);
            console.log("Попап с пультом открыт");
          } else {
            console.log("Элемент pultPopup не найден в HTML");
          }
        } else {
          alert("Сначала выбери персонажа!");
        }
      });
    }
    //  тексты в окошках
    if (rulesText) rulesText.textContent = rulesTexts[index];
    if (rulesBird) rulesBird.src = birdMiniImages[index];
    if (soundpadBird) soundpadBird.src = birdMiniImages[index];
    if (soundpadText) soundpadText.textContent = soundpadTexts[index];
    if (soundpadPopup) soundpadPopup.setAttribute("data-bird", bird.size);

    // цвета эллипсов
    document.querySelectorAll(".elips_1, .elips_2, .elips_3").forEach((el) => {
      if (el.classList.contains("elips_1"))
        el.style.backgroundColor = bird.elips1_color;
      else if (el.classList.contains("elips_2"))
        el.style.backgroundColor = bird.elips2_color;
      else if (el.classList.contains("elips_3"))
        el.style.backgroundColor = bird.elips3_color;
    });

    // рычажки
    document.querySelectorAll(".lever_button").forEach((el) => {
      el.src = bird.lever;
    });

    // светящиеся кнопки
    const glowButtons = document.querySelectorAll(".glow_button");
    if (glowButtons.length >= 6) {
      glowButtons[0].src = bird.light_btn1;
      glowButtons[1].src = bird.light_btn2;
      glowButtons[2].src = bird.light_btn2;
      glowButtons[3].src = bird.light_btn2;
      glowButtons[4].src = bird.light_btn1;
      glowButtons[5].src = bird.light_btn1;
    }

    // простые кнопки
    document.querySelectorAll(".simple_button").forEach((el) => {
      el.src = bird.simple_btn;
    });

    // ползунки
    document.querySelectorAll(".slider_stroke").forEach((el) => {
      el.src = bird.slider_stroke;
    });
    document.querySelectorAll(".slider_thumb").forEach((el) => {
      el.src = bird.slider_thumb;
    });

    console.log(`Смена на птицу ${index + 1}`);
  }

  // АНИМАЦИЯ СМЕНЫ ПТИЦЫ
  function changeBird(index) {
    birdImage.style.transition = "opacity 0.2s ease";
    birdImage.style.opacity = "0";
    setTimeout(() => {
      changeAllElements(index);
      birdImage.style.opacity = "1";
    }, 150);
  }

  // НАГРАДА
  const rewardVinyl = document.getElementById("rewardVinyl");
  const collectRewardBtn = document.createElement("button");
  collectRewardBtn.className = "collect_reward";
  collectRewardBtn.id = "collectReward";
  collectRewardBtn.textContent = "забрать пластинку";
  document.body.appendChild(collectRewardBtn);

  const showReward = () => {
    if (rewardVinyl) {
      rewardVinyl.classList.add("show");
      setTimeout(() => collectRewardBtn.classList.add("show"), 1500);
    }
  };

  const resetReward = () => {
    if (rewardVinyl) rewardVinyl.classList.remove("show");
    collectRewardBtn.classList.remove("show");
  };

  collectRewardBtn.addEventListener("click", resetReward);

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
    activeElement.style.left = e.clientX - offsetX + "px";
    activeElement.style.top = e.clientY - offsetY + "px";
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
        setTimeout(showReward, 100);
      }
    }

    activeElement.style.zIndex = "10";
    activeElement.style.cursor = "grab";

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    activeElement = null;
  }

  // РЫЧАЖКИ
  const levers = document.querySelectorAll(".lever_button");
  levers.forEach((lever) => {
    let angle = 0;
    lever.addEventListener("click", function () {
      angle = (angle + 45) % 360;
      this.style.transform = `rotate(${angle}deg)`;
    });
  });

  // КЛАВИШИ ПИАНИНО
  document.querySelectorAll(".piano_upper_key, .piano_key").forEach((key) => {
    key.addEventListener("click", () => {
      console.log("Нажата клавиша:", key.dataset.key || "обычная");
    });
  });

  //  ОБРАБОТЧИКИ КНОПОК
  leftArrow.onclick = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird - 1 + birds.length) % birds.length;
      changeBird(currentBird);
    }
  };

  rightArrow.onclick = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird + 1) % birds.length;
      changeBird(currentBird);
    }
  };

  confirmBtn.onclick = (e) => {
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

  // ОТКРЫТИЕ ПУЛЬТА
  if (soundpad) {
    soundpad.style.cursor = "pointer";
    soundpad.addEventListener("click", function () {
      if (isConfirmed) {
        const pultPopup = document.getElementById("pultPopup");
        if (pultPopup) {
          pultPopup.style.display = "flex";
          pultPopup.style.zIndex = "9999";
          pultPopup.style.opacity = "1";
          pultPopup.style.visibility = "visible";
          pultPopup.classList.add("show");

          toggleScroll(true);

          console.log("Попап с пультом открыт", pultPopup);
        } else {
          console.log("Элемент pultPopup не найден в HTML");
        }
      } else {
        alert("Сначала выбери персонажа!");
      }
    });
  }

  // СКРОЛЛ
  window.addEventListener("scroll", () => {
    const block2 = document.getElementById("block2");
    const block3 = document.getElementById("block3");
    const windowHeight = window.innerHeight;

    if (block2) {
      const block2Pos = block2.getBoundingClientRect().top;
      if (
        block2Pos < windowHeight - 100 &&
        block2Pos > -100 &&
        rulesPopup &&
        !window.hasShownRules
      ) {
        rulesPopup.classList.add("show");
        window.hasShownRules = true;
      }
    }

    if (block3) {
      const block3Pos = block3.getBoundingClientRect().top;
      if (
        block3Pos < windowHeight - 100 &&
        block3Pos > -100 &&
        soundpadPopup &&
        !window.hasShownSoundpad
      ) {
        soundpadPopup.classList.add("show");
        window.hasShownSoundpad = true;
      }
    }
  });

  // ЗАКРЫТИЕ ПОПАПОВ
  document.addEventListener("click", (e) => {
    if (
      rulesPopup?.classList.contains("show") &&
      !rulesPopup.contains(e.target) &&
      e.target !== closeRules
    ) {
      rulesPopup.classList.remove("show");
    }
    if (
      soundpadPopup?.classList.contains("show") &&
      !soundpadPopup.contains(e.target) &&
      e.target !== closeSoundpad
    ) {
      soundpadPopup.classList.remove("show");
    }
    if (
      pultPopup?.classList.contains("show") &&
      !pultPopup.contains(e.target) &&
      e.target !== closePult
    ) {
      pultPopup.classList.remove("show");
      toggleScroll(false);
    }
  });

  if (closeRules)
    closeRules.addEventListener("click", () =>
      rulesPopup?.classList.remove("show"),
    );
  if (closeSoundpad)
    closeSoundpad.addEventListener("click", () =>
      soundpadPopup?.classList.remove("show"),
    );

  //  ИНИЦИАЛИЗАЦИЯ
  changeAllElements(0);
  birdImage.style.opacity = "1";
});
