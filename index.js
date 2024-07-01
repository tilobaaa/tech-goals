function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const day = now.toLocaleString('en-US', { weekday: 'long' });

    document.getElementById('currentTimeUTC').textContent = utcTime;
    document.getElementById('currentDay').textContent = day;
}

function keepImageSize(){
    const image = document.querySelector('img');
    const {naturalWidth, naturalHeight} = image;

    image.width = naturalWidth;
    image.height = naturalHeight;

}

updateTimeAndDay();
setInterval(updateTimeAndDay, 60000);
document.querySelector('img').addEventListener('load', keepImageSize)