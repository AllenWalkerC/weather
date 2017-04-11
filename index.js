#!/usr/bin/env node

var axios = require('axios');
var data = {};
if(process.argv[2]){
	data.params = {
		city: process.argv[2]
	}
}
axios.get('http://api.jirengu.com/weather.php',data)
     .then(function(result){
     	console.log('          今日天气');
     	console.log('——————————————————————————————————————————')
     	console.log('城市 :'+result.data.results[0].currentCity);
     	console.log(result.data.results[0].weather_data[0].date);
     	console.log('   天气 :'+result.data.results[0].weather_data[0].weather);
     	console.log('   温度 :'+result.data.results[0].weather_data[0].temperature);
     	console.log('   风向风力 :'+result.data.results[0].weather_data[0].wind);
     	console.log('   PM25 :'+result.data.results[0].pm25);
     	console.log('——————————————————————————————————————————')
     	console.log('           天气预报')
     	console.log('——————————————————————————————————————————')
     	console.log(result.data.results[0].weather_data[1].date);
     	console.log('   天气 :'+result.data.results[0].weather_data[1].weather);
     	console.log('   温度 :'+result.data.results[0].weather_data[1].temperature);
     	console.log('   风向风力 :'+result.data.results[0].weather_data[1].wind);
     	console.log('——————————————————————————————————————————')
     	console.log(result.data.results[0].weather_data[2].date);
     	console.log('   天气 :'+result.data.results[0].weather_data[2].weather);
     	console.log('   温度 :'+result.data.results[0].weather_data[2].temperature);
     	console.log('   风向风力 :'+result.data.results[0].weather_data[2].wind);
     	console.log('——————————————————————————————————————————')
     	console.log(result.data.results[0].weather_data[3].date);
     	console.log('   天气 :'+result.data.results[0].weather_data[3].weather);
     	console.log('   温度 :'+result.data.results[0].weather_data[3].temperature);
     	console.log('   风向风力 :'+result.data.results[0].weather_data[3].wind);
     	console.log('——————————————————————————————————————————')
     }).catch(function(error){
     	console.log(error);
     })