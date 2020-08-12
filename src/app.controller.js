
console.log("controller");
// AppController.$inject = [];
function AppController() {
    let vm = this;
    // vm.getWeather = getWeather;
    getWeather();

    function getWeather() {
        console.log("weather");
        fetch('http://api.openweathermap.org/data/2.5/weather?q=delhi&appid=6c593e7606df5c875f49e434e924aa32')
            .then(function (response) {
                return response.json();
            }).then(function (result) {
            console.log("weathrr",result.main.temp);
        }).catch(function (error) {
            console.log(error);
        });
    }
}

export default AppController;