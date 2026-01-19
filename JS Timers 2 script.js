// TIMER - using setInterval for a regular-interval timer that clears after 5 seconds

function say(Hello) {
  console.log("Hello world!");
}

const myInterval = setInterval(() => {
  console.log("I`m a message!");
},  1000);

setTimeout(() => {
  clearInterval(myInterval);
}, 5000);
