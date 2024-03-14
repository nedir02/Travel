// script.js
const languageChanger = document.getElementById('language-changer');
const languageOptions = document.getElementById('language-options');

languageChanger.addEventListener('click', () => {
  // Toggle the display of language options
  languageOptions.style.display = (languageOptions.style.display === 'block') ? 'none' : 'block';
});

function changeLanguage(languageCode) {
  // Add logic to change the language
  // For example, you can update the text content on your website accordingly
  document.getElementById('current-language').textContent = languageCode;

  // Close the language options menu
  languageOptions.style.display = 'none';
}
