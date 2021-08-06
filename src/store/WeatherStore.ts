import {observable, action} from "mobx";

class WeatherStore {
    @observable weathers: string[] = []


    @action
    loadWeathers = () => {
        getWeathers().then(weathers => this.weathers = weathers)
    }

    @action
    addCityWeather = (note: string) => {
        this.weathers.push(note)
    }
};


export default new WeatherStore();