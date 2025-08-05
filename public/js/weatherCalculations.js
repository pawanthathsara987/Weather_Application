export function kelvinToCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2);
}

export function formatTimestamp(unixTime) {
    return new Date(unixTime * 1000).toLocaleString();
}

export function mpsToKmph(speed) {
    return (speed * 3.6).toFixed(2);
}

