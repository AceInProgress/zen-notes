// 1. Find the button in the HTML
const themeBtn = document.querySelector('button');

// 2. Tell the button to listen for a "click"
themeBtn.addEventListener('click', () => {
  // 3. Change the background color of the body
  document.body.style.backgroundColor = "#ffffff";
  document.body.style.color = "#000000";
  alert("Theme switched!");
});
