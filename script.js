// 1. Find the button in the HTML
const themeBtn = document.querySelector('button');

// 2. Tell the button to listen for a "click"
themeBtn.addEventListener('click', () => {
  // 3. Change the background color of the body
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
  alert("Theme switched!");
  const clearBtn = document.querySelector('#clear-btn');
const textField = document.querySelector('textarea');

clearBtn.addEventListener('click', () => {
  textField.value = ""; // This sets the text box to be empty
});
});
// 1. Set the date we're counting down to
const targetDate = new Date("May 25, 2026").getTime();

// 2. Create a function that runs every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // 3. Math to calculate days
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // 4. Put the result in your "days-to-go" ID
  document.getElementById("days-to-go").innerText = days + " days until May 25th";

  // If the countdown is finished
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("days-to-go").innerText = "IT'S GO TIME!";
  }
}, 1000);
