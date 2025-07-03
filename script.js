let speech = new SpeechSynthesisUtterance();
speech.lang = "en-US";
speech.volume = 1;
speech.rate = 1;
speech.pitch = 1;

let select = document.querySelector("select");
let btn = document.querySelector("button");

let voices = [];
window.speechSynthesis.addEventListener("voiceschanged", () => {
  voices = window.speechSynthesis.getVoices();
  for (let voice of voices) {
    // console.log(voice);
    let option = document.createElement("option");
    option.value = voice.lang;
    option.textContent = `${voice.name} ${voice.lang}`;
    select.appendChild(option);
  }
});
select.addEventListener("change", () => {
  speech.lang = select.value;
});

btn.addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
