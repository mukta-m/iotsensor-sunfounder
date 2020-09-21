const sensor = require("node-dht-sensor");

/*
    function: readDHT
    parameters: N/A

    purpose: using DHT11 sensor, reads temperature + humidity
    return value: JSON 
        {
            humidity: (int)
            temperature: (int)
        }

*/
function readDHT(){
    sensor.read(11, 17, function(err, temperature, humidity) {
        if (!err) {
            let sensorRead = 
                {
                    humidity: humidity,
                    temperature: temperature,
                }
            return sensorRead;
        }
  });
}

exports.readDHT = readDHT;