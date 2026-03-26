document.addEventListener("DOMContentLoaded", function () {
  // ДАННЫЕ
  const birds = [
    {
      // Птица 1
      image: "./images/bird1.svg",
      color: "#12101C",
      popup_color: "#12101C",
      size: "1",

      // Второй экран
      box: "./images/box.svg",
      note_1: "./images/note_1.svg",
      note_2: "./images/note_2.svg",
      headphones: "./images/headphones.svg",
      guitar: "./images/guitar.svg",
      sticks: "./images/sticks.svg",
      microphone: "./images/microphone.svg",
      vinyl: "./images/vinyl.svg",

      // Третий экран
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
      up_key: "./images/up_key.svg",
      first_key: "./images/first_key.svg",
      piano_key: "./images/piano_key.svg",
      last_key: "./images/last_key.svg",

      // Ноутбук
      laptop_bg: "./images/laptop_popup.svg",
      laptop_container_color: "#b2a3ff",
      play_btn: "./images/play_btt.svg",
      play_btn_active: "./images/play_btt2.svg",
      sound_stroke: "./images/sound_stroke.svg",
      wave_bars_color: "#5d03cb",

      // Игра 4 экран
      disk_fg: "./images/disk_fg.svg",
      note1_fg: "./images/note1_fg.svg",
      note2_fg: "./images/note2_fg.svg",
      headphones_fg: "./images/hdphones_fg.svg",
      star_big: "./images/star_big.svg",
      star_midle: "./images/star_midle.svg",
      star_mini: "./images/star_mini.svg",

      // 5 экран - проигрыватель
      sound_needle: "./images/sound_needle.svg",
      record_player: "./images/record_player.svg",
      record_disk: "./images/record_disk.svg",
      cover_1: "./images/cover_1.svg",
      cover_2: "./images/cover_2.svg",
      cover_3: "./images/cover_3.svg",
      vinyl_disk: "./images/vinyl_disk.svg",

      // Звезды в подвале
      star_bsmnt_mini: "./images/star_bsmnt_mini.svg",
      star_bsmnt_midle: "./images/star_bsmnt_midle.svg",
      star_bsmnt_big: "./images/star_bsmnt_big.svg",
      star_bsmnt_mini2: "./images/star_bsmnt_mini.svg",
      star_bsmnt_midle2: "./images/star_bsmnt_midle.svg",
    },
    {
      // Птица 2
      image: "./images/bird2.svg",
      color: "#00313B",
      popup_color: "#00313B",
      size: "2",

      // Второй экран
      box: "./images/box2.svg",
      note_1: "./images/note_11.svg",
      note_2: "./images/note_22.svg",
      headphones: "./images/headphones_2.svg",
      guitar: "./images/guitar_2.svg",
      sticks: "./images/sticks_2.svg",
      microphone: "./images/microphone_2.svg",
      vinyl: "./images/vinyl_2.svg",

      // Третий экран
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
      up_key: "./images/up_key_2.svg",
      first_key: "./images/first_key2.svg",
      piano_key: "./images/piano_key2.svg",
      last_key: "./images/last_key2.svg",

      // Ноутбук
      laptop_bg: "./images/laptop_popup2.svg",
      laptop_container_color: "#EE9300",
      play_btn: "./images/play_btt11.svg",
      play_btn_active: "./images/play_btt22.svg",
      sound_stroke: "./images/sound_stroke2.svg",
      wave_bars_color: "#FFF0B4",

      // Игра 4 экран
      disk_fg: "./images/disk_fg2.svg",
      note1_fg: "./images/note11_fg.svg",
      note2_fg: "./images/note22_fg.svg",
      headphones_fg: "./images/hdphones_fg2.svg",
      star_big: "./images/star_big2.svg",
      star_midle: "./images/star_midle2.svg",
      star_mini: "./images/star_mini2.svg",

      // 5 экран - проигрыватель
      sound_needle: "./images/sound_needle2.svg",
      record_player: "./images/record_player2.svg",
      record_disk: "./images/record_disk2.svg",
      cover_1: "./images/cover_11.svg",
      cover_2: "./images/cover_22.svg",
      cover_3: "./images/cover_33.svg",
      vinyl_disk: "./images/vinyl_disk.svg",

      // Звезды в подвале
      star_bsmnt_mini: "./images/star_bsmnt_mini2.svg",
      star_bsmnt_midle: "./images/star_bsmnt_midle2.svg",
      star_bsmnt_big: "./images/star_bsmnt_big2.svg",
      star_bsmnt_mini2: "./images/star_bsmnt_mini2.svg",
      star_bsmnt_midle2: "./images/star_bsmnt_midle2.svg",
    },
    {
      // Птица 3
      image: "./images/bird3.svg",
      color: "#00117D",
      popup_color: "#00117D",
      size: "3",

      // Второй экран
      box: "./images/box3.svg",
      note_1: "./images/note_111.svg",
      note_2: "./images/note_222.svg",
      headphones: "./images/headphones_3.svg",
      guitar: "./images/guitar_3.svg",
      sticks: "./images/sticks_3.svg",
      microphone: "./images/microphone_3.svg",
      vinyl: "./images/vinyl_3.svg",

      // Третий экран
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
      up_key: "./images/up_key_3.svg",
      first_key: "./images/first_key3.svg",
      piano_key: "./images/piano_key3.svg",
      last_key: "./images/last_key3.svg",

      // Ноутбук
      laptop_bg: "./images/laptop_popup3.svg",
      laptop_container_color: "#F08C35",
      play_btn: "./images/play_btt11.svg",
      play_btn_active: "./images/play_btt22.svg",
      sound_stroke: "./images/sound_stroke2.svg",
      wave_bars_color: "#FFF0B4",

      // Игра 4 экран
      disk_fg: "./images/disk_fg3.svg",
      note1_fg: "./images/note111_fg.svg",
      note2_fg: "./images/note222_fg.svg",
      headphones_fg: "./images/hdphones_fg3.svg",
      star_big: "./images/star_big3.svg",
      star_midle: "./images/star_midle3.svg",
      star_mini: "./images/star_mini3.svg",

      // 5 экран - проигрыватель
      sound_needle: "./images/sound_needle3.svg",
      record_player: "./images/record_player3.svg",
      record_disk: "./images/record_disk3.svg",
      cover_1: "./images/cover_111.svg",
      cover_2: "./images/cover_222.svg",
      cover_3: "./images/cover_333.svg",
      vinyl_disk: "./images/vinyl_disk.svg",

      // Звезды в подвале
      star_bsmnt_mini: "./images/star_bsmnt_mini3.svg",
      star_bsmnt_midle: "./images/star_bsmnt_midle3.svg",
      star_bsmnt_big: "./images/star_bsmnt_big3.svg",
      star_bsmnt_mini2: "./images/star_bsmnt_mini3.svg",
      star_bsmnt_midle2: "./images/star_bsmnt_midle3.svg",
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
  // Тексты для попапа ноутбука
  const laptopTexts = [
    " А теперь кликни на ноутбук. Там твои звуки. Можешь послушать свой первый трек!",
    "А теперь кликни на ноутбук. Здесь твои звуки оживают. Когда почувствуешь, что пора — жми на кнопку плей. Это твой момент.",
    "А теперь сюда. Твои звуки уже собраны в трек. Если сделал хорошо — будет хит. Если нет — будет опыт. Жми на плей!",
  ];

  // Тексты для игры на 4 экране
  const gameTexts = [
    "Сверху падают пластинки, ноты и наушники. Тебе нужно поймать 5 виниловых пластинок. Кликай только по ним. Если кликнешь по ноте — пластинка исчезнет. Готов? Лови!",
    "Смотри, сверху падают пластинки, ноты и наушники. Нам нужно поймать 5 виниловых пластинок. Кликай только по ним. Если кликнешь по ноте, то пластинка исчезнет. Ты справишься, я рядом!",
    "Сверху падает всякие штуки: ноты, наушники, пластинки. Нас интересует только винил. Поймай 5 штук. Кликнешь по ноте и пластинка улетит. Внимание, реакция, собранность. Погнали.",
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
  // элементы попапа ноутбука
  const laptopPopup = document.getElementById("laptopPopup");
  const laptopBird = document.getElementById("laptopBird");
  const laptopText = document.getElementById("laptopText");
  const closeLaptop = document.getElementById("closeLaptop");
  // элементы большого попапа ноутбука
  const laptopBigPopup = document.getElementById("laptopBigPopup");
  const laptopBigBg = document.getElementById("laptopBigBg");
  const laptopBigContent = document.getElementById("laptopBigContent");
  const closeLaptopBig = document.getElementById("closeLaptopBig");

  // третий экран
  const soundpad = document.getElementById("SoundPad");
  const laptop = document.getElementById("LapTop");
  const wires = document.getElementById("wires");

  //  4 экран
  const starBig = document.getElementById("StarBig");
  const starMidle = document.getElementById("StarMidle");
  const starMini = document.getElementById("StarMini");
  const gamePopupBird = document.getElementById("gamePopupBird");
  const gamePopupText = document.getElementById("gamePopupText");

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

  // !!! ОСНОВНАЯ ФУНКЦИЯ СМЕНЫ !!!
  function changeAllElements(index) {
    const bird = birds[index];

    //  ПЕРВЫЙ ЭКРАН
    setElementSrc(birdImage, bird.image);
    if (birdImage) birdImage.setAttribute("data-bird", bird.size);
    if (!isConfirmed) body.style.backgroundColor = bird.color;

    // ВТОРОЙ ЭКРАН
    setElementSrc(box, bird.box);
    setElementSrc(note1, bird.note_1);
    setElementSrc(note2, bird.note_2);
    setElementSrc(headphones, bird.headphones);
    setElementSrc(guitar, bird.guitar);
    setElementSrc(sticks, bird.sticks);
    setElementSrc(microphone, bird.microphone);
    setElementSrc(vinyl, bird.vinyl);

    //  ТРЕТИЙ ЭКРАН
    setElementSrc(soundpad, bird.soundpad);
    setElementSrc(laptop, bird.laptop);
    setElementSrc(wires, bird.wires);
    if (pultPopup) pultPopup.style.backgroundColor = bird.popup_color;

    //  ЭЛЕМЕНТЫ НОУТБУКА
    const laptopBigContent = document.getElementById("laptopBigContent");
    const laptopPlayIcon = document.getElementById("playIcon");
    const laptopSoundStroke = document.getElementById("soundStroke");
    const laptopWaveBars = document.querySelectorAll(".wave_bar");

    if (laptopBigContent) {
      laptopBigContent.style.backgroundColor = bird.laptop_container_color;
    }

    if (laptopPlayIcon) {
      laptopPlayIcon.dataset.defaultSrc = bird.play_btn;
      laptopPlayIcon.dataset.activeSrc = bird.play_btn_active;

      const isPlaying =
        laptopPlayIcon.src.includes("play_btt2") ||
        laptopPlayIcon.src.includes("play_btt22");
      if (!isPlaying) {
        laptopPlayIcon.src = bird.play_btn;
      } else {
        laptopPlayIcon.src = bird.play_btn_active;
      }
    }

    if (laptopSoundStroke) {
      laptopSoundStroke.src = bird.sound_stroke;
    }

    if (laptopWaveBars.length > 0) {
      laptopWaveBars.forEach((bar) => {
        bar.style.backgroundColor = bird.wave_bars_color;
      });
    }

    //  ТЕКСТЫ ПОПАПОВ
    if (rulesText) rulesText.textContent = rulesTexts[index];
    if (rulesBird) rulesBird.src = birdMiniImages[index];
    if (soundpadBird) soundpadBird.src = birdMiniImages[index];
    if (soundpadText) soundpadText.textContent = soundpadTexts[index];
    if (soundpadPopup) soundpadPopup.setAttribute("data-bird", bird.size);
    if (laptopBird) laptopBird.src = birdMiniImages[index];
    if (laptopText) laptopText.textContent = laptopTexts[index];
    if (laptopBigPopup) laptopBigPopup.style.backgroundColor = bird.popup_color;
    if (laptopBigBg) laptopBigBg.src = bird.laptop_bg;

    // 4 ЭКРАН (ИГРА)
    if (gamePopupBird) gamePopupBird.src = birdMiniImages[index];
    if (gamePopupText) gamePopupText.textContent = gameTexts[index];

    window.currentItemTypes = [
      {
        type: "disk",
        image: bird.disk_fg,
        width: "8.13vw",
        height: "8.13vw",
        points: 1,
      },
      {
        type: "note1",
        image: bird.note1_fg,
        width: "9.17vw",
        height: "10.56vw",
        points: 0,
      },
      {
        type: "note2",
        image: bird.note2_fg,
        width: "7.43vw",
        height: "11.18vw",
        points: 0,
      },
      {
        type: "headphones",
        image: bird.headphones_fg,
        width: "11.94vw",
        height: "10.0vw",
        points: 0,
      },
    ];

    // ЦВЕТА ЭЛЛИПСОВ
    document.querySelectorAll(".elips_1, .elips_2, .elips_3").forEach((el) => {
      if (el.classList.contains("elips_1"))
        el.style.backgroundColor = bird.elips1_color;
      else if (el.classList.contains("elips_2"))
        el.style.backgroundColor = bird.elips2_color;
      else if (el.classList.contains("elips_3"))
        el.style.backgroundColor = bird.elips3_color;
    });

    // РЫЧАЖКИ
    document.querySelectorAll(".lever_button").forEach((el) => {
      el.src = bird.lever;
    });

    // СВЕТЯЩИЕСЯ КНОПКИ
    const glowButtons = document.querySelectorAll(".glow_button");
    if (glowButtons.length >= 6) {
      glowButtons[0].src = bird.light_btn1;
      glowButtons[1].src = bird.light_btn2;
      glowButtons[2].src = bird.light_btn2;
      glowButtons[3].src = bird.light_btn2;
      glowButtons[4].src = bird.light_btn1;
      glowButtons[5].src = bird.light_btn1;
    }

    // ПРОСТЫЕ КНОПКИ
    document.querySelectorAll(".simple_button").forEach((el) => {
      el.src = bird.simple_btn;
    });

    // ПОЛЗУНКИ
    document.querySelectorAll(".slider_stroke").forEach((el) => {
      el.src = bird.slider_stroke;
    });
    document.querySelectorAll(".slider_thumb").forEach((el) => {
      el.src = bird.slider_thumb;
    });

    // ЗВЕЗДЫ ДЛЯ 4 ЭКРАНА
    const starBig4 = document.querySelector("#StarBig");
    const starMidle4 = document.querySelector("#StarMidle");
    const starMini4 = document.querySelector("#StarMini");

    if (starBig4) starBig4.src = bird.star_big;
    if (starMidle4) starMidle4.src = bird.star_midle;
    if (starMini4) starMini4.src = bird.star_mini;

    // 5 ЭКРАН - ПРОИГРЫВАТЕЛЬ
    const soundNeedleImg = document.querySelector(".sound_needle");
    const recordPlayerImg = document.querySelector(".record_player");
    const recordDiskImg = document.querySelector(".record_disk");
    const cover1 = document.querySelector(".cover_1");
    const cover2 = document.querySelector(".cover_2");
    const cover3 = document.querySelector(".cover_3");
    const vinylDisks = document.querySelectorAll(
      ".vinyl_disk1, .vinyl_disk2, .vinyl_disk3",
    );

    if (soundNeedleImg) soundNeedleImg.src = bird.sound_needle;
    if (recordPlayerImg) recordPlayerImg.src = bird.record_player;
    if (recordDiskImg) recordDiskImg.src = bird.record_disk;
    if (cover1) cover1.src = bird.cover_1;
    if (cover2) cover2.src = bird.cover_2;
    if (cover3) cover3.src = bird.cover_3;
    vinylDisks.forEach((disk) => {
      disk.src = bird.vinyl_disk;
    });

    // ЗВЕЗДЫ В ПОДВАЛЕ
    const starBsmntMini = document.querySelector(".star_bsmnt_mini");
    const starBsmntMidle = document.querySelector(".star_bsmnt_midle");
    const starBsmntBig = document.querySelector(".star_bsmnt_big");
    const starBsmntMini2 = document.querySelector(".star_bsmnt_mini2");
    const starBsmntMidle2 = document.querySelector(".star_bsmnt_midle2");

    if (starBsmntMini) starBsmntMini.src = bird.star_bsmnt_mini;
    if (starBsmntMidle) starBsmntMidle.src = bird.star_bsmnt_midle;
    if (starBsmntBig) starBsmntBig.src = bird.star_bsmnt_big;
    if (starBsmntMini2) starBsmntMini2.src = bird.star_bsmnt_mini2;
    if (starBsmntMidle2) starBsmntMidle2.src = bird.star_bsmnt_midle2;

    const upperKeys = document.querySelectorAll(".piano_upper_key");
    upperKeys.forEach((key) => {
      key.src = bird.up_key;
    });

    const firstKey = document.querySelector(".first_key");
    if (firstKey) firstKey.src = bird.first_key;

    const pianoKeys = document.querySelectorAll(
      ".piano_key:not(.first_key):not(.last_key)",
    );
    pianoKeys.forEach((key) => {
      key.src = bird.piano_key;
    });

    const lastKey = document.querySelector(".last_key");
    if (lastKey) lastKey.src = bird.last_key;

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

  // РЫЧАЖКИ С ЗВУКОМ
  const leverSound = new Audio("./sounds/lever_click.mp3");
  leverSound.preload = "auto";

  function playLeverSound() {
    if (!isConfirmed) return;
    leverSound.currentTime = 0;
    leverSound
      .play()
      .catch((e) => console.log("Ошибка воспроизведения звука рычажка:", e));
  }
  document.querySelectorAll(".lever_button").forEach((lever) => {
    const newLever = lever.cloneNode(true);
    lever.parentNode.replaceChild(newLever, lever);
  });

  document.querySelectorAll(".lever_button").forEach((lever, index) => {
    let currentAngle = 0;

    const transform = window.getComputedStyle(lever).transform;
    if (transform !== "none") {
      const values = transform.split("(")[1].split(")")[0].split(",");
      const a = parseFloat(values[0]);
      const b = parseFloat(values[1]);
      currentAngle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
    }

    lever.addEventListener("click", function (e) {
      e.stopPropagation();

      currentAngle = (currentAngle + 45) % 360;
      this.style.transform = `rotate(${currentAngle}deg)`;

      playLeverSound();

      console.log(`Рычажок ${index + 1} повернут на ${currentAngle}°`);
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
      updateGameForNewBird();
    }
  };

  rightArrow.onclick = (e) => {
    e.preventDefault();
    if (!isConfirmed) {
      currentBird = (currentBird + 1) % birds.length;
      changeBird(currentBird);
      updateGameForNewBird();
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
          pultPopup.classList.remove("hide", "closed");

          pultPopup.classList.add("show");

          pultPopup.style.display = "flex";
          pultPopup.style.opacity = "1";
          pultPopup.style.visibility = "visible";

          toggleScroll(true);

          console.log("Попап с пультом открыт");
          console.log("Стили:", {
            display: getComputedStyle(pultPopup).display,
            opacity: getComputedStyle(pultPopup).opacity,
            classList: pultPopup.classList.toString(),
          });
        } else {
          console.log("Элемент pultPopup не найден в HTML");
        }
      } else {
        alert("Сначала выбери персонажа!");
      }
    });
  }
  //  СКРОЛЛ
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
  function closeAllPopups() {
    if (rulesPopup) rulesPopup.classList.remove("show");
    if (soundpadPopup) soundpadPopup.classList.remove("show");
    if (pultPopup) {
      pultPopup.classList.remove("show");
      pultPopup.style.display = "none";
      toggleScroll(false);
    }
    if (laptopPopup) laptopPopup.classList.remove("show");
  }

  if (closeRules) {
    closeRules.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      rulesPopup?.classList.remove("show");
    });
  }

  if (closeSoundpad) {
    closeSoundpad.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      soundpadPopup?.classList.remove("show");
    });
  }

  if (closePult) {
    closePult.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (pultPopup) {
        pultPopup.classList.remove("show");
        pultPopup.style.display = "none";
        toggleScroll(false);
        console.log("Попап пульта закрыт по кнопке");

        setTimeout(() => {
          if (laptopPopup) {
            laptopPopup.classList.add("show");
            console.log("Попап с ноутбуком показан");
          }
        }, 300);
      }
    });
  }

  if (closeLaptop) {
    closeLaptop.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      laptopPopup?.classList.remove("show");
    });
  }
  //  ОТКРЫТИЕ БОЛЬШОГО ПОПАПА НОУТБУКА
  if (laptop) {
    laptop.style.cursor = "pointer";
    laptop.addEventListener("click", function () {
      if (isConfirmed) {
        const laptopBigPopup = document.getElementById("laptopBigPopup");
        if (laptopBigPopup) {
          laptopBigPopup.classList.add("show");
          laptopBigPopup.style.display = "flex";
          laptopBigPopup.style.opacity = "1";
          laptopBigPopup.style.visibility = "visible";
          toggleScroll(true);

          const typingText = document.getElementById("typingText");
          const text =
            'А если хочешь узнать больше о создании музыки, то переходи по ссылке и ознакомься с исследованием бренда студии звукозаписи "ХРИПОТА".';

          if (typingText) {
            typingText.innerHTML = "";
            let i = 0;

            function typeWriter() {
              if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
              }
            }

            typeWriter();
          }

          console.log("Большой попап ноутбука открыт");
        }
      } else {
        alert("Сначала выбери персонажа!");
      }
    });
  }

  if (closeLaptopBig) {
    closeLaptopBig.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const laptopBigPopup = document.getElementById("laptopBigPopup");
      if (laptopBigPopup) {
        laptopBigPopup.classList.remove("show");
        laptopBigPopup.style.display = "none";
        toggleScroll(false);

        if (isPlaying) {
          stopWaveAnimation();
          isPlaying = false;
        }

        // ЗАПУСКАЕМ АНИМАЦИЮ ВЫПАДЕНИЯ ПЛАСТИНКИ
        if (typeof showReward === "function") {
          showReward();
          console.log("Пластинка выпадает после закрытия ноутбука");
        }

        console.log("Большой попап ноутбука закрыт");
      }
    });
  }
  //  ИНИЦИАЛИЗАЦИЯ
  // toggleScroll(true); временно закоменчен блок для скролла!
  changeAllElements(0);
  birdImage.style.opacity = "1";

  //ПОЛЗУНКИ
  function initSliders() {
    const sliders = document.querySelectorAll(".slider_thumb");

    sliders.forEach((slider) => {
      const newSlider = slider.cloneNode(true);
      slider.parentNode.replaceChild(newSlider, slider);
    });

    document.querySelectorAll(".slider_thumb").forEach((slider) => {
      let isDragging = false;
      let startY = 0;
      let currentTop = 0;
      const wrapper = slider.closest(".slider_wrapper");
      const minTop = 0;
      const maxTop = wrapper.clientHeight - slider.clientHeight;

      const randomPosition = Math.random() * maxTop;
      slider.style.top = randomPosition + "px";

      slider.addEventListener("mousedown", startDrag);

      function startDrag(e) {
        e.preventDefault();
        e.stopPropagation();

        isDragging = true;
        startY = e.clientY;
        currentTop = parseFloat(slider.style.top) || 0;

        slider.style.cursor = "grabbing";
        slider.style.transition = "none";

        document.addEventListener("mousemove", onDrag);
        document.addEventListener("mouseup", stopDrag);
      }

      function onDrag(e) {
        if (!isDragging) return;
        e.preventDefault();

        const deltaY = e.clientY - startY;
        let newTop = currentTop + deltaY;

        newTop = Math.max(minTop, Math.min(newTop, maxTop));

        slider.style.top = newTop + "px";
      }

      function stopDrag() {
        if (!isDragging) return;

        isDragging = false;
        slider.style.cursor = "grab";
        slider.style.transition = "top 0.05s ease";

        document.removeEventListener("mousemove", onDrag);
        document.removeEventListener("mouseup", stopDrag);

        console.log("Ползунок остановлен на позиции:", slider.style.top);
      }
    });
  }

  initSliders();

  if (soundpad) {
    soundpad.addEventListener("click", function () {
      if (isConfirmed) {
        const pultPopup = document.getElementById("pultPopup");
        if (pultPopup) {
          pultPopup.style.display = "flex";
          pultPopup.classList.add("show");
          toggleScroll(true);

          setTimeout(initSliders, 100);
        }
      }
    });
  }

  //ИГРА НА 4 ЭКРАНЕ
  // элементы
  const targetCounter = document.getElementById("targetCounter");
  const gameField = document.getElementById("gameField");
  const targetImage = document.getElementById("targetImage");

  // переменные игры
  let targetCount = 0;
  let isGameActive = true;
  let fallingItems = [];
  let gameInterval = null;
  let currentGameItemTypes = [];

  function initGameItemTypes() {
    const bird = birds[currentBird];
    if (bird) {
      currentGameItemTypes = [
        {
          type: "disk",
          image: bird.disk_fg,
          width: "8.13vw",
          height: "8.13vw",
          points: 1,
        },
        {
          type: "note1",
          image: bird.note1_fg,
          width: "9.17vw",
          height: "10.56vw",
          points: 0,
        },
        {
          type: "note2",
          image: bird.note2_fg,
          width: "7.43vw",
          height: "11.18vw",
          points: 0,
        },
        {
          type: "headphones",
          image: bird.headphones_fg,
          width: "11.94vw",
          height: "10.0vw",
          points: 0,
        },
      ];

      if (targetImage) targetImage.src = bird.disk_fg;
    }
  }

  // создание падающего элемента
  function createFallingItem() {
    if (!isGameActive) return;
    if (!gameField) return;
    if (currentGameItemTypes.length === 0) initGameItemTypes();

    const randomType =
      currentGameItemTypes[
        Math.floor(Math.random() * currentGameItemTypes.length)
      ];

    const item = document.createElement("img");
    item.className = "falling_item";
    item.src = randomType.image;
    item.dataset.type = randomType.type;
    item.dataset.points = randomType.points;

    //  размеры поля
    const fieldRect = gameField.getBoundingClientRect();
    const itemWidth = parseFloat(randomType.width);
    const itemHeight = parseFloat(randomType.height);

    item.style.width = randomType.width;
    item.style.height = randomType.height;
    item.style.position = "absolute";

    const maxLeft = fieldRect.width - parseFloat(itemWidth);
    const randomLeft = Math.max(0, Math.random() * maxLeft);
    item.style.left = randomLeft + "px";

    item.style.top = "-10%";
    item.style.cursor = "pointer";
    item.style.zIndex = "20";
    item.style.transition = "transform 0.05s ease";

    const duration = Math.random() * 3 + 2;
    item.style.animation = `fall ${duration}s linear forwards`;

    item.addEventListener("click", (e) => {
      e.stopPropagation();
      handleItemClick(item);
    });

    gameField.appendChild(item);
    fallingItems.push(item);

    item.addEventListener("animationend", () => {
      if (item.parentNode) {
        item.remove();
        fallingItems = fallingItems.filter((i) => i !== item);
      }
    });
  }

  function handleItemClick(item) {
    if (!isGameActive) return;

    const type = item.dataset.type;

    if (type === "disk") {
      targetCount++;
      targetCounter.textContent = `${targetCount} / 5`;

      item.style.transform = "scale(1.2)";
      item.style.filter = "brightness(1.5)";

      setTimeout(() => {
        if (item.parentNode) item.remove();
      }, 100);

      fallingItems = fallingItems.filter((i) => i !== item);

      if (targetCount >= 5) {
        endGame(true);
      }
    } else {
      const disk = fallingItems.find((i) => i.dataset.type === "disk");
      if (disk) {
        disk.remove();
        fallingItems = fallingItems.filter((i) => i !== disk);
      }

      item.remove();
      fallingItems = fallingItems.filter((i) => i !== item);
    }
  }

  function startGame() {
    console.log("Игра запущена!");

    initGameItemTypes();

    isGameActive = true;
    targetCount = 0;
    targetCounter.textContent = "0 / 5";

    fallingItems.forEach((item) => {
      if (item.parentNode) item.remove();
    });
    fallingItems = [];

    if (gameInterval) clearInterval(gameInterval);

    gameInterval = setInterval(() => {
      createFallingItem();
    }, 800);
  }

  function endGame(isWin) {
    isGameActive = false;
    if (gameInterval) clearInterval(gameInterval);

    if (isWin) {
      fallingItems.forEach((item) => {
        if (item.parentNode) item.remove();
      });
      fallingItems = [];

      if (typeof showReward === "function") {
        showReward();
        console.log("Победа! Пластинка выпадает");
      }
    }
  }

  // функция обновления игры при смене птицы
  function updateGameForNewBird() {
    if (window.gameStarted && isGameActive) {
      startGame();
    } else if (window.gameStarted && !isGameActive) {
      initGameItemTypes();
    }
  }

  if (!document.querySelector("#gameAnimationStyle")) {
    const style = document.createElement("style");
    style.id = "gameAnimationStyle";
    style.textContent = `
    @keyframes fall {
      0% {
        top: -10%;
      }
      100% {
        top: 110%;
      }
    }
  `;
    document.head.appendChild(style);
  }

  window.addEventListener("scroll", function checkGameStart() {
    const block4 = document.getElementById("block4");
    if (block4 && !window.gameStarted) {
      const block4Pos = block4.getBoundingClientRect().top;
      if (block4Pos < window.innerHeight - 100 && block4Pos > -100) {
        startGame();
        window.gameStarted = true;
        console.log("Игра запущена при скролле");
      }
    }
  });

  // ПОДКЛЮЧЕНИЕ ЗВУКОВ К КЛАВИШАМ

  const notes = [
    { note: "C", file: "./sounds/note_c.mp3" },
    { note: "D", file: "./sounds/note_d.mp3" },
    { note: "E", file: "./sounds/note_e.mp3" },
    { note: "F", file: "./sounds/note_f.mp3" },
    { note: "G", file: "./sounds/note_g.mp3" },
    { note: "A", file: "./sounds/note_a.mp3" },
    { note: "B", file: "./sounds/note_b.mp3" },
    { note: "C", file: "./sounds/note_c.mp3" },
    { note: "D", file: "./sounds/note_d.mp3" },
    { note: "E", file: "./sounds/note_e.mp3" },
    { note: "F", file: "./sounds/note_f.mp3" },
    { note: "G", file: "./sounds/note_g.mp3" },
    { note: "A", file: "./sounds/note_a.mp3" },
    { note: "B", file: "./sounds/note_b.mp3" },
    { note: "C", file: "./sounds/note_c.mp3" },
    { note: "D", file: "./sounds/note_d.mp3" },
  ];

  const audioPlayers = notes.map((n) => {
    const audio = new Audio(n.file);
    audio.preload = "auto";
    return audio;
  });

  function playNote(index) {
    if (!isConfirmed) return;

    const audio = audioPlayers[index];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((e) => console.log("Ошибка воспроизведения:", e));
      console.log(`Играет нота ${notes[index].note}`);
    }
  }

  document
    .querySelectorAll(".piano_key:not(.first_key):not(.last_key)")
    .forEach((key, index) => {
      const newKey = key.cloneNode(true);
      key.parentNode.replaceChild(newKey, key);

      newKey.addEventListener("click", (e) => {
        e.stopPropagation();
        playNote(index);
      });
    });

  const firstKey = document.querySelector(".first_key");
  if (firstKey) {
    const newFirstKey = firstKey.cloneNode(true);
    firstKey.parentNode.replaceChild(newFirstKey, firstKey);
    newFirstKey.addEventListener("click", (e) => {
      e.stopPropagation();
      playNote(0);
    });
  }

  const lastKey = document.querySelector(".last_key");
  if (lastKey) {
    const newLastKey = lastKey.cloneNode(true);
    lastKey.parentNode.replaceChild(newLastKey, lastKey);
    newLastKey.addEventListener("click", (e) => {
      e.stopPropagation();
      playNote(15);
    });
  }

  // СОЗДАНИЕ ПОЛОСОК И ЗВУКА

  const waveBarsContainer = document.getElementById("waveBarsContainer");
  const playBtn = document.getElementById("playTrackBtn");
  const playIcon = document.getElementById("playIcon");
  const soundStroke = document.getElementById("soundStroke");
  let isPlaying = false;
  let currentAudio = null;

  function createAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    currentAudio = new Audio("./sounds/track_1.mp3");
    currentAudio.loop = true;
    currentAudio.preload = "auto";
  }

  createAudio();

  function createWaveBars(count = 32) {
    waveBarsContainer.innerHTML = "";

    const currentBirdData = birds[currentBird];
    const barColor = currentBirdData
      ? currentBirdData.wave_bars_color
      : "#5d03cb";

    for (let i = 0; i < count; i++) {
      const bar = document.createElement("div");
      bar.className = "wave_bar";

      const delay = (i / count) * 1.2;

      const durations = [0.45, 0.5, 0.55, 0.6, 0.65, 0.7];
      const duration = durations[Math.floor(Math.random() * durations.length)];

      bar.dataset.delay = delay;
      bar.dataset.duration = duration;

      bar.style.backgroundColor = barColor;

      waveBarsContainer.appendChild(bar);
    }
  }

  function updateWaveBarsColors() {
    const currentBirdData = birds[currentBird];
    if (!currentBirdData) return;

    const bars = document.querySelectorAll(".wave_bar");
    bars.forEach((bar) => {
      bar.style.backgroundColor = currentBirdData.wave_bars_color;
    });
  }

  function startWaveAnimation() {
    const laptopPlayIcon = document.getElementById("playIcon");
    const currentBirdData = birds[currentBird];

    if (laptopPlayIcon && currentBirdData) {
      laptopPlayIcon.src = currentBirdData.play_btn_active;
    }

    soundStroke.style.display = "none";
    waveBarsContainer.style.display = "flex";
    waveBarsContainer.classList.add("playing");

    const bars = document.querySelectorAll(".wave_bar");
    bars.forEach((bar) => {
      bar.style.animation = `waveAnimation ${bar.dataset.duration || 0.6}s ease-in-out infinite`;
      bar.style.animationDelay = `${bar.dataset.delay || 0}s`;
      bar.style.animationPlayState = "running";
    });

    if (currentAudio) {
      currentAudio.currentTime = 0;
      currentAudio
        .play()
        .catch((e) => console.log("Ошибка воспроизведения:", e));
    }

    console.log("Анимация и звук запущены");
  }

  function stopWaveAnimation() {
    const laptopPlayIcon = document.getElementById("playIcon");
    const currentBirdData = birds[currentBird];

    if (laptopPlayIcon && currentBirdData) {
      laptopPlayIcon.src = currentBirdData.play_btn;
    }

    waveBarsContainer.classList.remove("playing");

    const bars = document.querySelectorAll(".wave_bar");
    bars.forEach((bar) => {
      bar.style.animation = "none";
    });

    waveBarsContainer.style.display = "none";
    soundStroke.style.display = "block";

    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    console.log("Анимация и звук остановлены");
  }

  function initWaveBars() {
    createWaveBars(28);
    waveBarsContainer.style.display = "none";
    soundStroke.style.display = "block";
  }

  initWaveBars();

  if (playBtn) {
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();

      if (!isPlaying) {
        startWaveAnimation();
        isPlaying = true;
      } else {
        stopWaveAnimation();
        isPlaying = false;
      }
    });
  }
  // 5 ЭКРАН ПРОИГРЫВАТЕЛЬ

  const vinylDisks = document.querySelectorAll(
    ".vinyl_disk1, .vinyl_disk2, .vinyl_disk3",
  );
  const recordDisk = document.querySelector(".record_disk");
  const soundNeedle = document.querySelector(".sound_needle");
  const covers = document.querySelectorAll(".cover_1, .cover_2, .cover_3");

  let activeDisk = null;
  let isPlaced = false;
  let playerAudio = null;

  const diskTracks = {
    vinyl_disk1: "./sounds/track_2.mp3",
    vinyl_disk2: "./sounds/track_3.mp3",
    vinyl_disk3: "./sounds/track_4.mp3",
  };

  // СОЗДАЕМ КНОПКУ БЕЗ ИНЛАЙН-СТИЛЕЙ
  const returnBtn = document.createElement("button");
  returnBtn.textContent = "Вернуть пластинку";
  returnBtn.className = "return_disk_btn"; // только класс!
  document.body.appendChild(returnBtn);
  function stopPlayerTrack() {
    if (playerAudio) {
      playerAudio.pause();
      playerAudio.currentTime = 0;
      playerAudio = null;
    }
  }

  function playPlayerTrack(diskClass) {
    stopPlayerTrack();

    const trackPath = diskTracks[diskClass];
    if (trackPath) {
      playerAudio = new Audio(trackPath);
      playerAudio.loop = true;
      playerAudio
        .play()
        .catch((e) => console.log("Ошибка воспроизведения:", e));
      console.log(`Играет трек для ${diskClass}`);
    }
  }

  function highlightCover(index) {
    covers.forEach((cover, i) => {
      cover.style.transition = "all 0.2s ease";
      if (i === index) {
        cover.style.filter = "drop-shadow(0 0 10px gold)";
        cover.style.transform = "scale(1.02)";
      } else {
        cover.style.filter = "none";
        cover.style.transform = "scale(1)";
      }
    });
  }

  function removeHighlight() {
    covers.forEach((cover) => {
      cover.style.filter = "none";
      cover.style.transform = "scale(1)";
    });
  }

  function placeDisk(disk) {
    if (isPlaced) {
      alert("Сначала убери пластинку!");
      return;
    }

    activeDisk = disk;
    const diskClass = disk.classList.contains("vinyl_disk1")
      ? "vinyl_disk1"
      : disk.classList.contains("vinyl_disk2")
        ? "vinyl_disk2"
        : "vinyl_disk3";
    const diskIndex =
      diskClass === "vinyl_disk1" ? 0 : diskClass === "vinyl_disk2" ? 1 : 2;

    disk.style.transition = "transform 0.3s ease";
    disk.style.transform = "translateY(-5vw)";

    if (soundNeedle) {
      soundNeedle.style.transition = "transform 0.3s ease";
      soundNeedle.style.transform = "rotate(20deg)";
      setTimeout(() => {
        soundNeedle.style.transform = "rotate(0deg)";
      }, 500);
    }

    highlightCover(diskIndex);

    playPlayerTrack(diskClass);

    setTimeout(() => {
      disk.style.opacity = "0";
      disk.style.visibility = "hidden";
      isPlaced = true;
      returnBtn.style.display = "block";

      recordDisk.style.filter = "drop-shadow(0 0 10px gold)";
      setTimeout(() => {
        recordDisk.style.filter = "";
      }, 300);
    }, 300);
  }

  function removeDisk() {
    if (!isPlaced || !activeDisk) return;

    stopPlayerTrack();

    activeDisk.style.opacity = "1";
    activeDisk.style.visibility = "visible";
    activeDisk.style.transform = "translateY(0)";

    removeHighlight();

    returnBtn.style.display = "none";

    isPlaced = false;
    activeDisk = null;
  }

  vinylDisks.forEach((disk) => {
    disk.style.cursor = "pointer";
    disk.addEventListener("click", () => placeDisk(disk));
  });

  returnBtn.addEventListener("click", removeDisk);
});
