
const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/19e26c7d780c6018cf11a5da583a1a93/' + latitude + ',' + longitude + '?units=si'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const summary = body.daily.data[0].summary ;
            const temperature = body.currently.temperature ;
            const preci =  body.currently.precipProbability;
            const highTemp = body.daily.data[0].temperatureHigh ;
            const lowTemp = body.daily.data[0].temperatureLow ;
            callback(undefined,` ${summary}  It is currently  ${temperature} degress out. High today is ${highTemp} with a low of ${lowTemp}. There is a ${preci} % chance of rain. `)
        }
    })
}

module.exports = forecast