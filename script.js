const abc = document.getElementById('abc')
const abd = document.getElementById('abd')
const abe = document.getElementById('abe')
const abf = document.getElementById('abf')
let ukrainianMusic = [abc, abd, abe, abf]
let ukrainianShuffle = ukrainianMusic
/*let dailyMelody = ukrainianShuffle[0] */

window.setInterval(function(){ // Set interval for checking
    let hour = new Date(); // Create a Date object to find out what time it is
    if(date.getHours() === 10 && date.getMinutes() === 0){ // Check the time
    let ukrainianShuffle = ukrainianMusic
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    }
}, 60000); // Repeat every 60000 milliseconds (1 minute)



console.log(ukrainianShuffle)