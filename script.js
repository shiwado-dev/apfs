/*
====================================================
  🔥 ЗДЕСЬ ТЫ ДОБАВЛЯЕШЬ СВОИ АЛЬБОМЫ И ПЕСНИ
====================================================
  cover: путь к картинке альбома
  songs: массив песен
  title: название песни
  file: путь к mp3 файлу
====================================================
*/

const albums = [
    {
        name: "Опианариум",
        cover: "covers/Opianariom.jpg", // <-- замени на свою картинку
        songs: [
            { title: "apfs - i will fall", file: "apfs-treki/Автостопом по фазе сна - I will fall (hitmos.fm).mp3" },
{ title: "apfs - Порно", file: "apfs-treki/Автостопом по фазе сна - Порно (hitmos.fm).mp3" },
{ title: "apfs - Опиаты", file: "apfs-treki/Автостопом по фазе сна - Опиаты (hitmos.fm).mp3" },
{ title: "apfs - Мам, я умираю", file: "apfs-treki/Автостопом по фазе сна - Мам, я умираю (hitmos.fm).mp3" },
{ title: "apfs - lv", file: "apfs-treki/Автостопом по фазе сна - lv (hitmos.fm).mp3" },

{ title: "apfs - Голая, красивая", file: "apfs-treki/Автостопом по фазе сна - Голая, красивая (hitmos.fm).mp3" },
{ title: "apfs - Оргазм", file: "apfs-treki/Автостопом по фазе сна - Оргазм (hitmos.fm).mp3" },
{ title: "apfs - Сонный паралич", file: "apfs-treki/Автостопом по фазе сна - Сонный паралич (hitmos.fm).mp3" },
{ title: "apfs - Давай поправимся", file: "apfs-treki/Автостопом по фазе сна - Давай поправимся (hitmos.fm).mp3" },
{ title: "apfs - Ты", file: "apfs-treki/Автостопом по фазе сна - Ты (hitmos.fm).mp3" },

{ title: "apfs - Убегу", file: "apfs-treki/Автостопом по фазе сна - Убегу (hitmos.fm).mp3" },
{ title: "apfs - Хочешь, я стану проблемой твоей", file: "apfs-treki/Автостопом по фазе сна - Хочешь, я стану проблемой твоей (hitmos.fm) (1).mp3" },
{ title: "apfs - Я впадаю в кому", file: "apfs-treki/Автостопом по фазе сна - Я впадаю в кому (hitmos.fm).mp3" },
{ title: "apfs - Я некрасивый", file: "apfs-treki/Автостопом по фазе сна - Я некрасивый (hitmos.fm).mp3" },
{ title: "apfs - Я заебал", file: "apfs-treki/Автостопом по фазе сна - Я заебал (hitmos.fm).mp3" },

{ title: "apfs - Открой мне", file: "apfs-treki/Автостопом по фазе сна - Открой мне (hitmos.fm).mp3" },
{ title: "apfs - Сильнее соли", file: "apfs-treki/Автостопом по фазе сна - Сильнее соли (hitmos.fm).mp3" },
{ title: "apfs - Salt snuff", file: "apfs-treki/Автостопом по фазе сна - Salt snuff (hitmos.fm).mp3" },
{ title: "apfs - Таблетки", file: "apfs-treki/Автостопом по фазе сна - Таблетки (hitmos.fm).mp3" },
{ title: "apfs - 105 оттенков автобуса", file: "apfs-treki/Автостопом по фазе сна - 105 оттенков автобуса (hitmos.fm).mp3" },

{ title: "apfs - Слепые", file: "apfs-treki/Автостопом по фазе сна - Слепые (hitmos.fm).mp3" },
{ title: "apfs - Комната", file: "apfs-treki/Автостопом по фазе сна - Комната (hitmos.fm).mp3" },
{ title: "apfs - -5326364312", file: "apfs-treki/Автостопом по фазе сна - -5326364312 (hitmos.fm).mp3" },
{ title: "apfs - Я умру в Североморске", file: "apfs-treki/Автостопом по фазе сна - Я умру в Североморске (hitmos.fm).mp3" },
{ title: "apfs - Героиновый шейк", file: "apfs-treki/Автостопом по фазе сна - Героиновый шейк (hitmos.fm).mp3" },

{ title: "apfs - Метадон", file: "apfs-treki/Автостопом по фазе сна - Метадон (hitmos.fm).mp3" },
{ title: "apfs - Панацея", file: "apfs-treki/Автостопом по фазе сна - Панацея (hitmos.fm).mp3" },
{ title: "apfs - Опианариум", file: "apfs-treki/Автостопом по фазе сна - Опианариум (hitmos.fm).mp3" },
{ title: "apfs - Девочка", file: "apfs-treki/Автостопом по фазе сна - Девочка (hitmos.fm).mp3" },
{ title: "apfs - Аф", file: "apfs-treki/Автостопом по фазе сна - Аф (hitmos.fm).mp3" },
{ title: "apfs - Я хочу убить себя", file: "apfs-treki/Автостопом по фазе сна — Я хочу yбить себя (www.lightaudio.ru).mp3" }
        ]
    },
    {
        name: "Собачий вальс",
        cover: "https://static.hitmos.fm/album/000/014/403/374427_large.jpg",
        songs: [
           { title: "apfs - Раздевайся", file: "apfs-treki/Автостопом по фазе сна - Раздевайся (hitmos.fm).mp3" },
{ title: "apfs - Дискотека 90-х", file: "apfs-treki/Автостопом по фазе сна - Дискотека 90-х (hitmos.fm).mp3" },
{ title: "apfs - Диссоциальное расстройство", file: "apfs-treki/Автостопом по фазе сна - Диссоциальное расстройство (hitmos.fm).mp3" },
{ title: "apfs - Я настоящий", file: "apfs-treki/Автостопом по фазе сна - Я настоящий (hitmos.fm).mp3" },
{ title: "apfs - Скорость", file: "apfs-treki/Автостопом по фазе сна - Скорость (hitmos.fm).mp3" },
{ title: "apfs - Не вспоминай меня", file: "apfs-treki/Автостопом по фазе сна - Не вспоминай меня (hitmos.fm).mp3" },
{ title: "apfs - Собачий вальс", file: "apfs-treki/Автостопом по фазе сна - Собачий вальс (hitmos.fm).mp3" },
{ title: "apfs - Просто погафкай", file: "apfs-treki/Автостопом по фазе сна - Просто погафкай (hitmos.fm).mp3" },
{ title: "apfs - Покурил и упал в обморок", file: "apfs-treki/Автостопом по фазе сна - Покурил и упал в обморок (hitmos.fm).mp3" },
{ title: "apfs - Идите нахуй", file: "apfs-treki/Автостопом по фазе сна - Идите нахуй (hitmos.fm).mp3" },
            
        ]
    },




    {
        name: "Не забирай меня домой",
        cover: "https://static.hitmos.fm/album/000/014/402/374426_large.jpg",
        songs: [
           { title: "apfs - Мне не нужна эта новая жизнь", file: "apfs-treki/Автостопом по фазе сна - Мне не нужна эта новая жизнь (hitmos.fm).mp3" },
{ title: "apfs - Я летаю во вселенной", file: "apfs-treki/Автостопом по фазе сна - Я летаю во вселенной (hitmos.fm).mp3" },
{ title: "apfs - Господи, что со мной такое", file: "apfs-treki/Автостопом по фазе сна - Господи, что со мной такое (hitmos.fm).mp3" },
{ title: "apfs - Stop life", file: "apfs-treki/Автостопом по фазе сна feat Cryshore - Stop Life (hitmos.fm).mp3" },
{ title: "apfs - Нам пизда", file: "apfs-treki/Автостопом по фазе сна - Нам пизда (hitmos.fm).mp3" },
{ title: "apfs - Щёлк щёлк щёлк", file: "apfs-treki/Автостопом по фазе сна - Щёлк щёлк щёлк (hitmos.fm).mp3" },
{ title: "apfs - Нет!Нет!Нет!Нет!Нет!Нет!Нет!Нет!", file: "apfs-treki/Автостопом по фазе сна - Нет! Нет! Нет! Нет! Нет! Нет! Нет! Нет! (hitmos.fm).mp3" },
{ title: "apfs - Что мне делать", file: "apfs-treki/Автостопом по фазе сна - Что мне делать (hitmos.fm).mp3" },
{ title: "apfs - Не в адеквате", file: "apfs-treki/Автостопом по фазе сна - Не в адеквате (hitmos.fm).mp3" },
{ title: "apfs - Котик, зайчик", file: "apfs-treki/Автостопом по фазе сна - Котик, зайчик (hitmos.fm).mp3" },
{ title: "apfs - Benjamin Button", file: "apfs-treki/Автостопом по фазе сна - Benjamin Button (hitmos.fm).mp3" },
{ title: "apfs - Закончим", file: "apfs-treki/Автостопом по фазе сна - Закончим (hitmos.fm).mp3" },
{ title: "apfs - Кислота", file: "apfs-treki/Автостопом по фазе сна - Кислота (hitmos.fm).mp3" },
{ title: "apfs - Вьеби мне в четверг", file: "apfs-treki/Автостопом по фазе сна - vpebi_mne_v_chetverg.mp3" },
{ title: "apfs - Не забирай меня с собой", file: "apfs-treki/Автостопом по фазе сна - Не забирай меня домой (hitmos.fm).mp3" },
{ title: "apfs - После смерти", file: "apfs-treki/Автостопом по фазе сна - После смерти (hitmos.fm).mp3" },
{ title: "apfs - Тот самый", file: "apfs-treki/Автостопом по фазе сна - Тот самый (hitmos.fm).mp3" },
{ title: "apfs - Привет, малышка", file: "apfs-treki/Автостопом по фазе сна - Привет, малышка (hitmos.fm).mp3" },
            
        ]
    },


    {
        name: "Движение",
        cover: "https://static.hitmos.fm/album/000/014/404/374428_large.jpg",
        songs: [
            { title: "apfs - Движение", file: "apfs-treki/Автостопом по фазе сна - Движение (hitmos.fm).mp3" },
{ title: "apfs - Вечер выпускников вечерней школы", file: "apfs-treki/Автостопом по фазе сна - Вечер выпускников вечерней школы (hitmos.fm).mp3" },
{ title: "apfs - Чё", file: "apfs-treki/Автостопом по фазе сна - Чё (hitmos.fm).mp3" },
{ title: "apfs - Зажечь кровать", file: "apfs-treki/Автостопом по фазе сна - Зажечь кровать (hitmos.fm).mp3" },
{ title: "apfs - Помню как вчера", file: "apfs-treki/Автостопом по фазе сна - Помню как вчера (hitmos.fm).mp3" },
{ title: "apfs - Убей меня", file: "apfs-treki/Автостопом по фазе сна - Убей меня (hitmos.fm).mp3" },
{ title: "apfs - Зачем я сегодня проснулся", file: "apfs-treki/Автостопом по фазе сна - Зачем я сегодня проснулся (hitmos.fm).mp3" },
{ title: "apfs - Ширево", file: "apfs-treki/Автостопом по фазе сна - Ширево (hitmos.fm).mp3" },
{ title: "apfs - Канет в низ", file: "apfs-treki/Автостопом по фазе сна feat Cryshore - Канет в низ (hitmos.fm).mp3" },
{ title: "apfs - Ку-ку", file: "apfs-treki/Автостопом по фазе сна - Ку-ку (hitmos.fm).mp3" },
{ title: "apfs - Сперма", file: "apfs-treki/Автостопом по фазе сна - Сперма (hitmos.fm).mp3" },
{ title: "apfs - Спина старика", file: "apfs-treki/Автостопом по фазе сна - Спина старика (hitmos.fm).mp3" },
{ title: "apfs - Я впадаю в кому 2", file: "apfs-treki/Автостопом по фазе сна - Я впадаю в кому 2 (hitmos.fm).mp3" },
{ title: "apfs - 21", file: "apfs-treki/Автостопом по фазе сна - 21 (hitmos.fm).mp3" },
{ title: "apfs - Картонка", file: "apfs-treki/Автостопом по фазе сна - Картонка (hitmos.fm).mp3" },
{ title: "apfs - Один среди дорог", file: "apfs-treki/Автостопом по фазе сна - Один среди дорог (hitmos.fm).mp3" },
{ title: "apfs - Упс", file: "apfs-treki/Автостопом по фазе сна - Упс (hitmos.fm).mp3" },
{ title: "apfs - Танцы на Vy большого пса", file: "apfs-treki/Автостопом по фазе сна - Танцы на Vy большого пса (hitmos.fm).mp3" },
{ title: "apfs - Я твоя сука", file: "apfs-treki/avtostopom_po_podezdam_apfs_-_ya_tvoya_suka_79405584.mp3" },
            
        ]
    },



    {
        name: "Лайтово",
        cover: "https://static.hitmos.fm/album/000/014/401/374425_large.jpg",
        songs: [
         { title: "apfs - Лайтово", file: "apfs-treki/Автостопом по фазе сна - Лайтово (hitmos.fm).mp3" },
{ title: "apfs - Утиль", file: "apfs-treki/Автостопом по фазе сна - Утиль (hitmos.fm).mp3" },
{ title: "apfs - Мы затаимся в фильтрах выкуренных сигарет", file: "apfs-treki/Автостопом по фазе сна - Мы затаимся в фильтрах выкуренных сигарет (hitmos.fm).mp3" },
{ title: "apfs - Там, где нас нет", file: "apfs-treki/Автостопом по фазе сна - Там, где нас нет (hitmos.fm).mp3" } 
           
        ]
    },



    {
        name: "Кругосветка в рамках черепной коробки",
        cover: "https://static.hitmos.fm/album/000/014/405/374429_large.jpg",
        songs: [
            { title: "apfs - Спокойной ночи, Максим", file: "apfs-treki/Автостопом по фазе сна - Спокойной ночи, Максим (hitmos.fm).mp3" },
{ title: "apfs - Выплакайся", file: "apfs-treki/Автостопом по фазе сна and Cryshore - Выплакайся (hitmos.fm).mp3" },
{ title: "apfs - Выпить или выпилиться", file: "apfs-treki/Автостопом по фазе сна - Выпить или выпилиться_ (hitmos.fm).mp3" },
{ title: "apfs - Кругосветка в рамках черепной коробки", file: "apfs-treki/Автостопом по фазе сна - Кругосветка в рамках черепной коробки (hitmos.fm).mp3" },
{ title: "apfs - Intro", file: "apfs-treki/Автостопом по фазе сна - Intro (hitmos.fm).mp3" },
{ title: "apfs - Эхо 51", file: "https://files.catbox.moe/foshu7.mp3" }
        ]
    },

    {
        name: "Синглы",
        cover: "https://i.scdn.co/image/ab67616d0000b273ffe032fc54c024dbd5697d27",
        songs: [
            { title: "apfs - Давит весна", file: "apfs-treki/Под_Одним_Небом,_Автостопом_по_фазе_сна_Давит_весна.m4a" },
{ title: "apfs - Болотная блювота", file: "apfs-treki/Автостопом_по_фазе_сна_болотная_блювота.m4a" },
{ title: "apfs - Маэстро, дай мне дури", file: "apfs-treki/Автостопом_по_фазе_сна_Маэстро,_дай_мне_дури.mp3" },
{ title: "apfs - Собачка", file: "apfs-treki/Автостопом по фазе сна - собачка .mp3" },
{ title: "apfs - Смерть на вкус как попа любимой", file: "apfs-treki/Автостопом_по_фазе_сна_Смерть_на_вкус_как_попа_любимой_.mp3" },
{ title: "apfs - Деньги, суки, ауе v2", file: "apfs-treki/Автостопом_по_фазе_сна_деньги,_суки,_ауе_v2.mp3" },
{ title: "apfs - Не пугай случайных тварей", file: "apfs-treki/Автостопом_по_фазе_сна_Не_пугай_случайных_тварей_.mp3" },
{ title: "apfs - Рвота", file: "apfs-treki/Автостопом по фазе сна - рвота.mp3" },
{ title: "apfs - Ты улыбаешься", file: "apfs-treki/Автостопом_по_фазе_сна_ты_улыбаешься.mp3" },
{ title: "apfs - Blood", file: "apfs-treki/Автостопом по фазе сна - blood.mp3" },
{ title: "apfs - Прыгай с крыши, делай сальто", file: "apfs-treki/Автостопом_по_фазе_сна_прыгай_с_крыши,_делай_сальто.mp3" },
{ title: "apfs - Ррррррассстаа", file: "apfs-treki/Автостопом_по_фазе_сна_Ррррррассстаа.mp3" },
{ title: "apfs - Бесконечно", file: "kishlak-treki/Автостопом_по_фазе_сна_бесконечно.mp3" },
{ title: "apfs - Бред Котара", file: "kishlak-treki/Babababudaba_X_Автостопом_По_Фазе_Сна_Бред_Котара.mp3" },
{ title: "apfs - Выдумки", file: "kishlak-treki/Автостопом по фазе сна - выдумки.mp3" },
{ title: "apfs - PRORAVE", file: "apfs-treki/Автостопом_по_фазе_сна_PRORAVE.mp3" },
{ title: "apfs - МА, Я ЛАЮ", file: "kishlak-treki/Ма, я лаю    Автостопом по фазе сна.mp3" },
{ title: "apfs - Bullterrier", file: "kishlak-treki/Bullterrier   Автостопом по фазе сна.mp3" },
{ title: "apfs - Болотная блювота", file: "kishlak-treki/Автостопом_по_фазе_сна_болотная_блювота.m4a" },
            
           
           




                
            

        ]
    },








{
        name: "Кишлак - 11:11",
        cover: "https://static.hitmos.fm/album/000/015/061/376422_large.jpg",
        songs: [
            {  title: "Кишлак - Космический мусор", file: "kishlak-treki/Кишлак - Космический мусор (hitmos.fm).mp3" },
{ title: "Кишлак - Я немного пьян", file: "kishlak-treki/Кишлак - Я немного пьян (hitmos.fm).mp3" },
{ title: "Кишлак - Ложь, жизнь, я", file: "kishlak-treki/Кишлак - Ложь, жизнь, я (hitmos.fm).mp3" },
{ title: "Кишлак - Тупые предки", file: "kishlak-treki/Кишлак - Тупые предки (hitmos.fm).mp3" },
{ title: "Кишлак - Эмо", file: "kishlak-treki/Кишлак - Эмо (hitmos.fm).mp3" },
{ title: "Кишлак - Нахуя", file: "kishlak-treki/Кишлак - Нахуя (hitmos.fm).mp3" },
{ title: "Кишлак - Кошка", file: "kishlak-treki/Кишлак - Кошка (hitmos.fm).mp3" },
{ title: "Кишлак - Грязь", file: "kishlak-treki/Кишлак - Грязь (hitmos.fm).mp3" },
{ title: "Кишлак - Маленький бандит", file: "kishlak-treki/Кишлак - Маленький бандит (hitmos.fm).mp3" },
{ title: "Кишлак - 11:11", file: "kishlak-treki/Кишлак - 11_11 (hitmos.fm).mp3" },
{ title: "Кишлак - Лягушачий блюз", file: "kishlak-treki/Кишлак - Лягушачий блюз (hitmos.fm).mp3"  }
        ]
    },


    {
        name: "Кишлак - Кто я",
        cover: "https://static.hitmos.fm/album/000/015/062/376424_large.jpg",
        songs: [
             { title: "Кишлак - Хуанихуау", file: "kishlak-treki/Кишлак - Хаунихуау (hitmos.fm).mp3" },
{ title: "Кишлак - Вы все отбросы", file: "kishlak-treki/Кишлак - Вы все отбросы (hitmos.fm).mp3" },
{ title: "Кишлак - Но", file: "kishlak-treki/Кишлак - Но (hitmos.fm).mp3"  },
        ]
    },

     {
        name: "Кишлак - Синглы",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ef/aa/61/efaa61cb-d1e5-4af5-e918-5bbb8517131c/cover.jpg/316x316bb.webp",
        songs: [
            { title: "Кишлак - Двинулся на тебе", file: "kishlak-treki/GRILLYAZH, Кишлак - ДВИНУЛСЯ НА ТЕБЕ.mp3" },
{ title: "Кишлак - Марина Обойкина", file: "kishlak-treki/Кишлак - Марина Обойкина.mp3" },
{ title: "Кишлак - Один дома", file: "kishlak-treki/семьсот семь - Один дома.mp3" },
{ title: "Кишлак - Внутри", file: "kishlak-treki/семьсот семь, Кишлак - Внутри.mp3" },
{ title: "Кишлак - По-старому", file: "kishlak-treki/Кишлак - По-старому.mp3" },
{ title: "Кишлак - Пацанский эмо рэп", file: "kishlak-treki/Кишлак,_семьсот_семь_Пацанский_эмо_рэп (1).mp3" },
{ title: "Кишлак - Марсиане", file: "kishlak-treki/Кишлак - Марсиане.mp3" },
{ title: "Кишлак - Апноэ", file: "kishlak-treki/Кишлак - Апноэ.mp3" },
          

        ]               
    },




];


/* ====== ЭЛЕМЕНТЫ ====== */
const albumList = document.getElementById("albumList");
const songList = document.getElementById("songList");
const albumTitle = document.getElementById("albumTitle");
const audioPlayer = document.getElementById("audioPlayer");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const time = document.getElementById("time");
const nowPlaying = document.getElementById("nowPlaying");

let isPlaying = false;
let currentAlbumIndex = null;
let currentSongIndex = null;

/* ====== КНОПКА PLAY/PAUSE ====== */
playPause.addEventListener("click", () => {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
});

audioPlayer.addEventListener("play", () => {
    isPlaying = true;
    playPause.textContent = "⏸";
});

audioPlayer.addEventListener("pause", () => {
    isPlaying = false;
    playPause.textContent = "▶";
});

/* ====== ПРОГРЕСС БАР ====== */
audioPlayer.addEventListener("timeupdate", () => {
    if(audioPlayer.duration){
        progress.value = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        time.textContent = formatTime(audioPlayer.currentTime) + " / " + formatTime(audioPlayer.duration);
    }
});

progress.addEventListener("input", () => {
    audioPlayer.currentTime = (progress.value / 100) * audioPlayer.duration;
});

function formatTime(seconds){
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2,'0');
    return `${m}:${s}`;
}

/* ====== ОТОБРАЖЕНИЕ АЛЬБОМОВ ====== */
albums.forEach((album, index) => {
    const div = document.createElement("div");
    div.className = "album";
    div.innerHTML = `<img src="${album.cover}" alt=""><span>${album.name}</span>`;
    div.addEventListener("click", () => loadAlbum(index));
    albumList.appendChild(div);
});

/* ====== ЗАГРУЗКА АЛЬБОМА ====== */
function loadAlbum(index) {
    const album = albums[index];
    albumTitle.textContent = album.name;
    songList.innerHTML = "";

    album.songs.forEach((song, songIndex) => {
        const div = document.createElement("div");
        div.className = "song";
        div.innerHTML = `<img src="${album.cover}" class="mini-cover"><span>${song.title}</span>`;

        div.addEventListener("click", () => {
            playSong(index, songIndex);
        });

        songList.appendChild(div);
    });
}

/* ====== ВОСПРОИЗВЕДЕНИЕ ПЕСНИ ====== */
function playSong(albumIndex, songIndex) {
    const album = albums[albumIndex];
    const song = album.songs[songIndex];

    currentAlbumIndex = albumIndex;
    currentSongIndex = songIndex;

    audioPlayer.src = song.file;
    audioPlayer.play();
    nowPlaying.textContent = "Сейчас играет: " + song.title;

    // Подсветка текущей песни
    document.querySelectorAll(".song").forEach(el => el.classList.remove("active"));
    const songDiv = songList.children[songIndex];
    if(songDiv) songDiv.classList.add("active");
}

/* ====== АВТОПЕРЕХОД НА СЛЕДУЮЩУЮ ====== */
audioPlayer.addEventListener("ended", () => {
    if(currentAlbumIndex === null || currentSongIndex === null) return;
    const album = albums[currentAlbumIndex];
    let nextIndex = currentSongIndex + 1;
    if(nextIndex < album.songs.length) {
        playSong(currentAlbumIndex, nextIndex);
    }
});
const searchInput = document.getElementById("search");

// Отслеживаем ввод
searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase(); // приводим к нижнему регистру
    const songs = document.querySelectorAll("#songList .song");

    songs.forEach(songDiv => {
        const title = songDiv.textContent.toLowerCase();
        if(title.includes(query)){
            songDiv.style.display = "flex"; // показываем
        } else {
            songDiv.style.display = "none"; // скрываем
        }
    });

});
