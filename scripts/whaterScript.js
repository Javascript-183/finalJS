const geoDBApiKey = "33e09db09emsh58fb8eed337669cp151758jsn3968fbeb3e59";
const weatherAPIKey = "58e5d6ac88e34210b3873052250102";

document
  .getElementById("getWeatherByCity")
  .addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();

    if (!city) {
      alert("გთხოვთ, შეიყვანეთ ქალაქის სახელი.");
      return;
    }

    try {
      // GeoDB Cities API - კოორდინატების მიღება
      const geoDBUrl = `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${encodeURIComponent(
        city
      )}`;
      const geoDBResponse = await fetch(geoDBUrl, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": geoDBApiKey,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
        }
      });
      const geoDBData = await geoDBResponse.json();

      if (!geoDBData.data || geoDBData.data.length === 0) {
        alert("ქალაქი ვერ მოიძებნა, გთხოვთ სცადოთ თავიდან.");
        return;
      }

      const { latitude, longitude } = geoDBData.data[0];

      // WeatherAPI - ამინდის მონაცემების მიღება
      const weatherURL = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${latitude},${longitude}&lang=ka`;
      const weatherResponse = await fetch(weatherURL);
      if (!weatherResponse.ok) {
        throw new Error("ამინდის მონაცემების მიღებისას მოხდა შეცდომა.");
      }

      const weatherData = await weatherResponse.json();
      displayWeather(weatherData);
      displayWindInfo(weatherData.current.wind_kph);
    } catch (error) {
      console.error(error);
      alert(
        "მონაცემების მიღება ვერ მოხერხდა. შეამოწმეთ ქალაქის სახელი ან ინტერნეტი."
      );
    }
  });

function displayWeather(data) {
  const weatherElement = document.getElementById("weatherByCity");
  weatherElement.innerHTML = `
    <strong>მდებარეობა:</strong> ${data.location.name}, ${data.location.country} <br>
    <strong>ტემპერატურა:</strong> ${data.current.temp_c}°C <br>
    <strong>ტენიანობა:</strong> ${data.current.humidity}% <br>
    <strong>ამინდი:</strong> ${data.current.condition.text}
  `;
}

function displayWindInfo(speed) {
  const windInfoDiv = document.getElementById("windInfo");
  let image = "";

  if (speed < 10) {
    image = "../image/image/low-wind.png";
  } else if (speed >= 10 && speed < 30) {
    image = "../image/image/medium-wind.png";
  } else {
    image = "../image/image/high-wind.png";
  }

  windInfoDiv.innerHTML = `
    <strong>ქარის სიჩქარე:</strong> ${speed} კმ/სთ <br>
    <img src="${image}" alt="Wind speed indicator" style="width: 100px;">
  `;
}
