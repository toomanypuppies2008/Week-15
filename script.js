const cities = ["Санкт-Петербург", "Тулуза", "Стамбул", "Веллингтон"];
const temperatures = [];
const div = document.querySelector(".mainDiv");

const button = document
  .querySelector(".mainButton")
  .addEventListener("click", function getTemperature() {
    document.getElementById("myBtn").disabled = true;
    for (let i = 0; i < cities.length; i++) {
      let number = prompt(`Введите температуру в городе: ${cities[i]}`);
      if (isNaN(number)) alert("Пожалуйста,введите число!");
      temperatures.push(+number);
    }

    for (let i = 0; i < cities.length; i++) {
      const listText = document.createElement("li");
      listText.textContent = `Температура в городе ${cities[i]}: ${temperatures[i]} 'C`;
      div.append(listText);
    }
    let tempMin = Infinity;
    for (let temp of temperatures) {
      if (temp < tempMin) {
        tempMin = temp;
      }
    }
    const pOne = document.createElement("p");
    pOne.innerHTML += `Минимальная температура: ${tempMin} 'C`;
    div.append(pOne);

    let tempMax = -Infinity;
    for (let temp of temperatures) {
      if (temp > tempMax) {
        tempMax = temp;
      }
    }
    const pTwo = document.createElement("p");
    pTwo.innerHTML += `Максимальная температура: ${tempMax} 'C`;
    div.append(pTwo);
  });
