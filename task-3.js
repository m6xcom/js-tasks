const names = [
  "Sunisup",
  "SirMJme",
  "MaxiPad",
  "Zolker",
  "Nanilui",
  "Wio",
  "Wuk0ng",
  "lio",
  "Sibbi",
  "Kukukok0",
  "Nocturne",
  "Uberzoe",
  "Mr3vil",
  "Kurama",
  "curaj",
  "Dazyzab",
  "Oups",
  "AndroidNumero16",
  "Devileye",
  "PreZaKas",
];
const wrapper = document.querySelector(".names__wrapper");

names.map((name) => {
  const textField = document.createElement("p");
  textField.textContent = name;
  textField.style.marginTop = `${Math.round(Math.random() * 40)}px`;
  textField.style.marginLeft = `${Math.round(Math.random() * 40)}px`;
  textField.style.fontSize = `${Math.round(Math.random() * 4 + 10)}px`;
  const textCase = Math.round(Math.random());
  if (textCase === 1) {
    textField.style.textTransform = "uppercase";
  }
  wrapper.insertAdjacentElement("beforeEnd", textField);
});
