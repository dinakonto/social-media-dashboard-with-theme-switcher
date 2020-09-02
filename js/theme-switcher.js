// Set to a given theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// Toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// Set theme on initial load
if (localStorage.getItem('theme') === 'theme-dark') {
  setTheme('theme-dark');
} else {
  setTheme('theme-light');
}
