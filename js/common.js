let inputPhone = document.querySelector(".reguest__phone");
const checksInput = document.querySelector(".checks-input");
const reguestButton = document.querySelector(".reguest__button");
const inputFile = document.querySelector(".input-file");
const addTitle = document.querySelector(".form-group .title");

inputPhone.oninput = () => phoneMask(inputPhone);
function phoneMask(inputEl) {
  let patStringArr = "+_(___)___-__-__".split("");
  let arrPush = [1, 3, 4, 5, 7, 8, 9, 11, 12, 14, 15];
  let val = inputEl.value;
  let arr = val.replace(/\D+/g, "").split("").splice(0);
  let n;
  let ni;
  arr.forEach((s, i) => {
    n = arrPush[i];
    patStringArr[n] = s;
    ni = i;
  });
  arr.length < 10
    ? (inputEl.style.color = "red")
    : (inputEl.style.color = "black");
  inputEl.value = patStringArr.join("");
  n
    ? inputEl.setSelectionRange(n + 1, n + 1)
    : inputEl.setSelectionRange(17, 17);
}


inputFile.addEventListener("change", () => {
	let inputArr = inputFile.value.split('.')
	let format = inputArr[inputArr.length - 1]
  if (inputFile.value != "" && (format == "pdf" || format == "doc" || format == "docx")) {
    addTitle.innerHTML = "Файл загружен";
  } else {
	addTitle.innerHTML = "Файл должен быть в формате pdf, docx, doc";
	addTitle.style.color = 'red'
  }
});


checksInput.addEventListener("click", () => {
	reguestButton.toggleAttribute("disabled");
	inputFile.addEventListener("change", () => {
	let inputArr = inputFile.value.split('.')
	let format = inputArr[inputArr.length - 1]
  if(format != "pdf" || format != "doc" || format != "docx"){
	reguestButton.setAttribute("disabled", "disabled")
  }})
  inputPhone.addEventListener("input", ()=>{
	console.log(inputPhone.value);
  })
});

function send(event, php){
console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); // Ебанный internet explorer 11
    	console.log(json);
        
    	// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
    	if (json.result == "success") {
    		// Если сообщение отправлено
    		alert("Сообщение отправлено");
    	} else {
    		// Если произошла ошибка
    		alert("Ошибка. Сообщение не отправлено");
    	}
    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {alert("Ошибка отправки запроса");};
req.send(new FormData(event.target));
}