const tempTranslator = (temp, unit) => {
  const allTemps = {
    k: {
      value: temp,
      unit: "°k",
    },
    c: {
      value: temp - 273,
      unit: "°C",
    },
    f: {
      value: 1.8 * (temp - 273) + 32,
      unit: "°F",
    },
  };
  console.log(allTemps);
  if (unit === "metric") {
    return allTemps.c;
  } else if (unit === "imperial") {
    return allTemps.f;
  } else {
    return allTemps.k;
  }
};

const windSpeedTranslator = (speed, units) => {
  const allSpeed = {
    ms: {
      value: speed,
      unit: "m/s",
    },
    fts: {
      value: speed * 3.281,
      unit: "ft/s",
    },
  };
  console.log(allSpeed);
  if (units === "metric") {
    return allSpeed.ms;
  } else if (units === "imperial") {
    return allSpeed.fts;
  } else {
    return allSpeed.ms;
  }
};

const weatherCard = (data, units) => {
  return `
    <article class="weathercard">
          <div class="weathercard__meta">
            <div class="weathercard__meta-location">${data.name}, ${
    data.sys.country
  }</div>
          </div>
          <div class="weathercard__temp">
            <span class="temp">${tempTranslator(
              data.main.temp,
              units
            ).value.toFixed(1)}</span><span class="tempunit">${
    tempTranslator(data.main.temp, units).unit
  }</span>
          </div>
          <div class="weathercard__wind">
            <div class="weathercard__wind-speed">
              <span class="speed">${windSpeedTranslator(
                data.wind.speed,
                units
              ).value.toFixed(1)}</span><span class="windunit">${
    windSpeedTranslator(data.wind.speed, units).unit
  }</span>
            </div>
            <div class="weathercard__wind-dir" style="transform:rotate(${
              data.wind.deg + 90
            }deg)">
                <span class="screen-reader-text">${data.wind.deg}</span>
            </div>
          </div>
          <button id="units">Change units</button>
        </article>
    `;
};

export default weatherCard;
