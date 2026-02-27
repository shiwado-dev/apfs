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
            { title: "apfs - i will fall", file: "https://files.catbox.moe/zc5zuq.mp3" },
{ title: "apfs - Порно", file: "https://files.catbox.moe/ek0uxf.mp3" },
{ title: "apfs - Опиаты", file: "https://files.catbox.moe/65us3p.mp3" },
{ title: "apfs - Мам, я умираю", file: "https://files.catbox.moe/s8goss.mp3" },
{ title: "apfs - lv", file: "https://files.catbox.moe/q6xdjj.mp3" },

{ title: "apfs - Голая, красивая", file: "https://files.catbox.moe/7ge1ni.mp3" },
{ title: "apfs - Оргазм", file: "https://files.catbox.moe/7br7cv.mp3" },
{ title: "apfs - Сонный паралич", file: "https://files.catbox.moe/dwiaph.mp3" },
{ title: "apfs - Давай поправимся", file: "https://files.catbox.moe/5llyx5.mp3" },
{ title: "apfs - Ты", file: "https://files.catbox.moe/puj1e9.mp3" },

{ title: "apfs - Убегу", file: "https://files.catbox.moe/k1mehn.mp3" },
{ title: "apfs - Хочешь, я стану проблемой твоей", file: "https://files.catbox.moe/a2nevk.mp3" },
{ title: "apfs - Я впадаю в кому", file: "https://files.catbox.moe/tmvofo.mp3" },
{ title: "apfs - Я некрасивый", file: "https://files.catbox.moe/cgn3jl.mp3" },
{ title: "apfs - Я заебал", file: "https://files.catbox.moe/ju51ng.mp3" },

{ title: "apfs - Открой мне", file: "https://files.catbox.moe/9hhsp2.mp3" },
{ title: "apfs - Сильнее соли", file: "https://files.catbox.moe/gehkq1.mp3" },
{ title: "apfs - Salt snuff", file: "https://files.catbox.moe/p923lr.mp3" },
{ title: "apfs - Таблетки", file: "https://files.catbox.moe/pmhorr.mp3" },
{ title: "apfs - 105 оттенков автобуса", file: "https://files.catbox.moe/8wkkjd.mp3" },

{ title: "apfs - Слепые", file: "https://files.catbox.moe/8qeulk.mp3" },
{ title: "apfs - Комната", file: "https://files.catbox.moe/8fsy0q.mp3" },
{ title: "apfs - -5326364312", file: "https://files.catbox.moe/gc70yl.mp3" },
{ title: "apfs - Я умру в Североморске", file: "https://files.catbox.moe/srq08l.mp3" },
{ title: "apfs - Героиновый шейк", file: "https://files.catbox.moe/0aib0b.mp3" },

{ title: "apfs - Метадон", file: "https://files.catbox.moe/trzu9t.mp3" },
{ title: "apfs - Панацея", file: "https://files.catbox.moe/n4qi25.mp3" },
{ title: "apfs - Опианариум", file: "https://files.catbox.moe/l0ajor.mp3" },
{ title: "apfs - Девочка", file: "https://files.catbox.moe/kty8tf.mp3" },
{ title: "apfs - Аф", file: "https://files.catbox.moe/eoe6p7.mp3" },
{ title: "apfs - Я хочу убить себя", file: "https://files.catbox.moe/a30x44.mp3" }
        ]
    },
    {
        name: "Собачий вальс",
        cover: "https://static.hitmos.fm/album/000/014/403/374427_large.jpg",
        songs: [
           { title: "apfs - Раздевайся", file: "https://files.catbox.moe/xuhnng.mp3" },
{ title: "apfs - Дискотека 90-х", file: "https://files.catbox.moe/9hyqct.mp3" },
{ title: "apfs - Диссоциальное расстройство", file: "https://files.catbox.moe/x013oa.mp3" },
{ title: "apfs - Я настоящий", file: "https://files.catbox.moe/nrpvs0.mp3" },
{ title: "apfs - Скорость", file: "https://files.catbox.moe/81ikvm.mp3" },
{ title: "apfs - Не вспоминай меня", file: "https://files.catbox.moe/r4o5fn.mp3" },
{ title: "apfs - Собачий вальс", file: "https://files.catbox.moe/o43f3r.mp3" },
{ title: "apfs - Просто погафкай", file: "https://files.catbox.moe/dk5mxq.mp3" },
{ title: "apfs - Покурил и упал в обморок", file: "https://files.catbox.moe/50ftp4.mp3" },
{ title: "apfs - Идите нахуй", file: "https://files.catbox.moe/21p8kj.mp3" },
            
        ]
    },




    {
        name: "Не забирай меня домой",
        cover: "https://static.hitmos.fm/album/000/014/402/374426_large.jpg",
        songs: [
           { title: "apfs - Мне не нужна эта новая жизнь", file: "https://files.catbox.moe/5jtlcn.mp3" },
{ title: "apfs - Я летаю во вселенной", file: "https://files.catbox.moe/3vckd0.mp3" },
{ title: "apfs - Господи, что со мной такое", file: "https://files.catbox.moe/re44rv.mp3" },
{ title: "apfs - Stop life", file: "https://files.catbox.moe/mjwjv3.mp3" },
{ title: "apfs - Нам пизда", file: "https://files.catbox.moe/x8fhll.mp3" },
{ title: "apfs - Щёлк щёлк щёлк", file: "https://files.catbox.moe/pdejlh.mp3" },
{ title: "apfs - Нет!Нет!Нет!Нет!Нет!Нет!Нет!Нет!", file: "https://files.catbox.moe/91o1b5.mp3" },
{ title: "apfs - Что мне делать", file: "https://files.catbox.moe/dfv5ht.mp3" },
{ title: "apfs - Не в адеквате", file: "https://files.catbox.moe/afs26s.mp3" },
{ title: "apfs - Котик, зайчик", file: "https://files.catbox.moe/wve4kh.mp3" },
{ title: "apfs - Benjamin Button", file: "https://files.catbox.moe/o3094e.mp3" },
{ title: "apfs - Закончим", file: "https://files.catbox.moe/8kqo6c.mp3" },
{ title: "apfs - Кислота", file: "https://files.catbox.moe/70owgs.mp3" },
{ title: "apfs - Вьеби мне в четверг", file: "https://files.catbox.moe/inh1pb.mp3" },
{ title: "apfs - Не забирай меня с собой", file: "https://files.catbox.moe/9sflsw.mp3" },
{ title: "apfs - После смерти", file: "https://files.catbox.moe/3kka2k.mp3" },
{ title: "apfs - Тот самый", file: "https://files.catbox.moe/3e0odu.mp3" },
{ title: "apfs - Привет, малышка", file: "https://files.catbox.moe/lum5v4.mp3" },
            
        ]
    },


    {
        name: "Движение",
        cover: "https://static.hitmos.fm/album/000/014/404/374428_large.jpg",
        songs: [
            { title: "apfs - Движение", file: "https://files.catbox.moe/hrlh9q.mp3" },
{ title: "apfs - Вечер выпускников вечерней школы", file: "https://files.catbox.moe/i925r9.mp3" },
{ title: "apfs - Чё", file: "https://files.catbox.moe/5fvpiz.mp3" },
{ title: "apfs - Зажечь кровать", file: "https://files.catbox.moe/q7lpev.mp3" },
{ title: "apfs - Помню как вчера", file: "https://files.catbox.moe/7etnd8.mp3" },
{ title: "apfs - Убей меня", file: "https://files.catbox.moe/4kcipg.mp3" },
{ title: "apfs - Зачем я сегодня проснулся", file: "https://files.catbox.moe/i8ta0f.mp3" },
{ title: "apfs - Ширево", file: "https://files.catbox.moe/qsh7n0.mp3" },
{ title: "apfs - Канет в низ", file: "https://files.catbox.moe/ddj9jg.mp3" },
{ title: "apfs - Ку-ку", file: "https://files.catbox.moe/gvhdc3.mp3" },
{ title: "apfs - Сперма", file: "https://files.catbox.moe/kd7ki0.mp3" },
{ title: "apfs - Спина старика", file: "https://files.catbox.moe/k6y5wo.mp3" },
{ title: "apfs - Я впадаю в кому 2", file: "https://files.catbox.moe/9gn45z.mp3" },
{ title: "apfs - 21", file: "https://files.catbox.moe/vuluc1.mp3" },
{ title: "apfs - Картонка", file: "https://files.catbox.moe/80hqeg.mp3" },
{ title: "apfs - Один среди дорог", file: "https://files.catbox.moe/9roirj.mp3" },
{ title: "apfs - Упс", file: "https://files.catbox.moe/qrbgvh.mp3" },
{ title: "apfs - Танцы на Vy большого пса", file: "https://files.catbox.moe/4q27zj.mp3" },
{ title: "apfs - Я твоя сука", file: "https://files.catbox.moe/w6ic7w.mp3" },
            
        ]
    },



    {
        name: "Лайтово",
        cover: "https://static.hitmos.fm/album/000/014/401/374425_large.jpg",
        songs: [
         { title: "apfs - Лайтово", file: "https://files.catbox.moe/8tjgym.mp3" },
{ title: "apfs - Утиль", file: "https://files.catbox.moe/b8cr0t.mp3" },
{ title: "apfs - Мы затаимся в фильтрах выкуренных сигарет", file: "https://files.catbox.moe/9bgg8d.mp3" },
{ title: "apfs - Там, где нас нет", file: "https://files.catbox.moe/2dc9aa.mp3" } 
           
        ]
    },



    {
        name: "Кругосветка в рамках черепной коробки",
        cover: "https://static.hitmos.fm/album/000/014/405/374429_large.jpg",
        songs: [
            { title: "apfs - Спокойной ночи, Максим", file: "https://files.catbox.moe/l5x2iw.mp3" },
{ title: "apfs - Выплакайся", file: "https://files.catbox.moe/fi0hn1.mp3" },
{ title: "apfs - Выпить или выпилиться", file: "https://files.catbox.moe/3v05ut.mp3" },
{ title: "apfs - Кругосветка в рамках черепной коробки", file: "https://files.catbox.moe/iifcm1.mp3" },
{ title: "apfs - Intro", file: "https://files.catbox.moe/erge2l.mp3" },
{ title: "apfs - Эхо 51", file: "https://files.catbox.moe/foshu7.mp3" }
        ]
    },

    {
        name: "Синглы",
        cover: "https://i.scdn.co/image/ab67616d0000b273ffe032fc54c024dbd5697d27",
        songs: [
            { title: "apfs - Давит весна", file: "https://files.catbox.moe/o4tl7y.m4a" },
{ title: "apfs - Болотная блювота", file: "https://files.catbox.moe/6n2mka.m4a" },
{ title: "apfs - Маэстро, дай мне дури", file: "https://files.catbox.moe/19afu3.mp3" },
{ title: "apfs - Собачка", file: "https://files.catbox.moe/dslrtb.mp3" },
{ title: "apfs - Смерть на вкус как попа любимой", file: "https://files.catbox.moe/t0bf5o.mp3" },
{ title: "apfs - Деньги, суки, ауе v2", file: "https://files.catbox.moe/nylw3c.mp3" },
{ title: "apfs - Не пугай случайных тварей", file: "https://files.catbox.moe/bf1n28.mp3" },
{ title: "apfs - Рвота", file: "https://files.catbox.moe/gufbwa.mp3" },
{ title: "apfs - Ты улыбаешься", file: "https://files.catbox.moe/3e0odu.mp3" },
{ title: "apfs - Blood", file: "https://files.catbox.moe/8t3q3a.mp3" },
{ title: "apfs - Прыгай с крыши, делай сальто", file: "https://files.catbox.moe/pkir67.mp3" },
{ title: "apfs - Ррррррассстаа", file: "https://files.catbox.moe/9fhqv2.mp3" },
{ title: "apfs - Бесконечно", file: "https://files.catbox.moe/h3z2n0.mp3" },
{ title: "apfs - Бред Котара", file: "https://files.catbox.moe/6ts74d.mp3" },
{ title: "apfs - Выдумки", file: "https://files.catbox.moe/ipdtlx.mp3" },
{ title: "apfs - PRORAVE", file: "https://files.catbox.moe/b8yxcn.mp3" },
{ title: "apfs - МА, Я ЛАЮ", file: "https://files.catbox.moe/xoy6e6.mp3" },
{ title: "apfs - Bullterrier", file: "https://files.catbox.moe/xgqz68.mp3" },
{ title: "apfs - Болотная блювота", file: "https://files.catbox.moe/6n2mka.m4a" },
            
           
           




                
            

        ]
    },








{
        name: "Кишлак - 11:11",
        cover: "https://static.hitmos.fm/album/000/015/061/376422_large.jpg",
        songs: [
            {  title: "Кишлак - Космический мусор", file: "https://files.catbox.moe/jgvdbc.mp3" },
{ title: "Кишлак - Я немного пьян", file: "https://files.catbox.moe/3tissx.mp3" },
{ title: "Кишлак - Ложь, жизнь, я", file: "https://files.catbox.moe/xl9x8c.mp3" },
{ title: "Кишлак - Тупые предки", file: "https://files.catbox.moe/nse819.mp3" },
{ title: "Кишлак - Эмо", file: "https://files.catbox.moe/ir9gre.mp3" },
{ title: "Кишлак - Нахуя", file: "https://files.catbox.moe/x7njnz.mp3" },
{ title: "Кишлак - Кошка", file: "https://files.catbox.moe/junxa2.mp3" },
{ title: "Кишлак - Грязь", file: "https://files.catbox.moe/uvq3kp.mp3" },
{ title: "Кишлак - Маленький бандит", file: "https://files.catbox.moe/yi17qd.mp3" },
{ title: "Кишлак - 11:11", file: "https://files.catbox.moe/39ypx2.mp3" },
{ title: "Кишлак - Лягушачий блюз", file: "https://files.catbox.moe/nys3qs.mp3"  }
        ]
    },


    {
        name: "Кишлак - Кто я",
        cover: "https://static.hitmos.fm/album/000/015/062/376424_large.jpg",
        songs: [
             { title: "Кишлак - Хуанихуау", file: "https://files.catbox.moe/7206fe.mp3" },
{ title: "Кишлак - Вы все отбросы", file: "https://files.catbox.moe/o97zkn.mp3" },
{ title: "Кишлак - Но", file: "https://files.catbox.moe/sp4cwm.mp3"  },
        ]
    },

     {
        name: "Кишлак - Синглы",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ef/aa/61/efaa61cb-d1e5-4af5-e918-5bbb8517131c/cover.jpg/316x316bb.webp",
        songs: [
            { title: "Кишлак - Двинулся на тебе", file: "https://files.catbox.moe/e05dt4.mp3" },
{ title: "Кишлак - Марина Обойкина", file: "https://files.catbox.moe/x7kmqe.mp3" },
{ title: "Кишлак - Один дома", file: "https://files.catbox.moe/hwceki.mp3" },
{ title: "Кишлак - Внутри", file: "https://files.catbox.moe/5b40mr.mp3" },
{ title: "Кишлак - По-старому", file: "https://files.catbox.moe/ajk59a.mp3" },
{ title: "Кишлак - Пацанский эмо рэп", file: "https://files.catbox.moe/feujop.mp3" },
{ title: "Кишлак - Марсиане", file: "https://files.catbox.moe/alxpy1.mp3" },
{ title: "Кишлак - Апноэ", file: "https://files.catbox.moe/npdzsh.mp3" },
          

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



