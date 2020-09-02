// Set to a given theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
  let label = document.getElementById('current-theme')
  label.innerText = themeName
}

// Set label
function setLabel(label) {
  let div = document.getElementById('current-theme')
  div.innerText = label
}

// Toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
    setLabel('Light Mode');
  } else {
    setTheme('theme-dark');
    setLabel('Dark Mode');
  }
}

// Set theme on initial load
if (localStorage.getItem('theme') === 'theme-dark') {
  setTheme('theme-dark');
  setLabel('Dark Mode');
} else {
  setTheme('theme-light');
  setLabel('Light Mode');
}
