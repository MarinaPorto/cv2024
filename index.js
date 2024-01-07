import langContent from './translate.js';


const langDefault = "ru";

let lang = "";


const languageSwitcherEn = document.querySelector(".language-switcher-en");
const languageSwitcherRu = document.querySelector(".language-switcher-ru");
const listDataElements = document.querySelectorAll("[data-translate]");

translate(langDefault);

languageSwitcherEn.addEventListener("click", () => {
  languageSwitcherEn.classList.add('btn-active');
  languageSwitcherRu.classList.remove('btn-active');
  lang = "en";
  translate(lang);
});

languageSwitcherRu.addEventListener("click", () => {
  languageSwitcherEn.classList.remove('btn-active');
  languageSwitcherRu.classList.add('btn-active');
  lang = "ru";
  translate(lang)
});


function translate(lang) {
  listDataElements.forEach(el => {
    el.textContent = langContent[lang][el.dataset.translate]
  })
};

