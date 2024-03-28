/*
Задание 1 (тайминг 125 минут)
1. Создание медиа плеера
2. Создать файл index.html
3. Создать папку img в которую загрузить изображение
кнопок play, pause
4. Скачать произвольное видео из интернета
5. Добавить Тег видео в html
6. Продумать внешний вид progress и volume
7. Продумать время проигрывателя
8. Реализовать функционал своего собственного видеоплеера
*/

const container = document.querySelector('div.container');

const videoEl = document.createElement('video');
videoEl.src = 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4';
videoEl.classList.add('video');
container.appendChild(videoEl);

const uiDiv = document.createElement('div');
uiDiv.classList.add('ui');
container.appendChild(uiDiv);

// const brEl = document.createElement('br');
// uiDiv.appendChild(brEl);

const playEl = document.createElement('i');
playEl.classList.add('fas', 'fa-play');
uiDiv.appendChild(playEl);

const pauseEl = document.createElement('i');
pauseEl.classList.add('fas', 'fa-pause', 'hide');
uiDiv.appendChild(pauseEl);

const volumeIconEl = document.createElement('i');
volumeIconEl.classList.add('fas', 'fa-volume-up');
uiDiv.appendChild(volumeIconEl);

const volumeEl = document.createElement('input');
volumeEl.classList.add('volume');
volumeEl.type = 'range';
volumeEl.min = 0;
volumeEl.max = 10;
volumeEl.value = 10;
uiDiv.appendChild(volumeEl);

const progressEl = document.createElement('input');
progressEl.type = 'range';
progressEl.classList.add('progress');
// progressEl.style.width = '360px';
progressEl.min = 0;
progressEl.max = 100;
progressEl.value = 0;
uiDiv.appendChild(progressEl);

const timeEl = document.createElement('span');
timeEl.innerHTML = '0';
uiDiv.appendChild(timeEl);

volumeEl.addEventListener('change', function (e) {
    videoEl.volume = e.target.value / 10;
});

playEl.addEventListener('click', function (e) {
    videoEl.play();
    playEl.classList.toggle('hide');
    pauseEl.classList.toggle('hide');
});

pauseEl.addEventListener('click', function (e) {
    videoEl.pause();
    pauseEl.classList.toggle('hide');
    playEl.classList.toggle('hide');
});

progressEl.addEventListener('change', function (e) {
    videoEl.currentTime = Math.round(e.target.value / 100 * videoEl.duration);
});

videoEl.addEventListener('timeupdate', function (e) {
    timeEl.innerText = Math.round(videoEl.currentTime);
    progressEl.value = Math.round(videoEl.currentTime / videoEl.duration * 100);
});

videoEl.addEventListener('ended', function (e) {
    playEl.classList.remove('hide');
    pauseEl.classList.add('hide');
});
