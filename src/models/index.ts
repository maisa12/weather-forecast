import { getName } from "../utils";

class WeatherCondition {
    public weatherType: string;
    private backgroundImageType: string;

    private rootFolder: string  = "weather";
    
    constructor(
        weatherType: string, 
        backgroundImageType: string = "jpg",  
    ) {
        this.weatherType = weatherType;
        this.backgroundImageType = backgroundImageType;
    }

    get icon(): string {
        return `${this.rootFolder}/${this.weatherType}/favicon.ico`;
    }

    get backgroundImage(): string {
        return `${this.rootFolder}/${this.weatherType}/background.${this.backgroundImageType}`;
    }
}



const weatherConditions: WeatherCondition[] = [
    new WeatherCondition("cloudy"), 
    new WeatherCondition("drizzle"),
    new WeatherCondition("overcast"),
    new WeatherCondition("partly-cloudy"),
    new WeatherCondition("rain"),
    new WeatherCondition("snow"),
    new WeatherCondition("stormy"),
    new WeatherCondition("sunny")
];

class Weather {
    public _city: string;
    private _temperature: number;
    private _cloudyPercent: number | null;
    private _humidity: number | null;
    private _wind: number | null;
    private _rain: number | null;
    private _weatherConditionType: string | null
    private defaultWindUnit: string;
    private defaultTemperatureUnit: string;

    constructor(
        city: string | null = null ,
        temperature: number | null = null,
        weatherConditionType: string | null = null,
        cloudyPercent: number | null = null,
        humidity: number | null = null,
        wind: number | null = null,
        rain: number | null = null,
        defaultWindUnit: string = "km/h",
        defaultTemperatureUnit: string = "celsius"
    ) {
        this._city = city?.toLowerCase() 
            || Weather.defaultCities[this.getRandomNumber(0, Weather.defaultCities.length - 1)];
        this._temperature = temperature || this.getRandomNumber(0, 10);
        this._weatherConditionType = weatherConditionType;
        this._cloudyPercent = cloudyPercent;
        this._humidity = humidity;
        this._wind = wind;
        this._rain = rain;
        this.defaultWindUnit = defaultWindUnit;
        this.defaultTemperatureUnit = defaultTemperatureUnit;
    }

    get cityName(): string {
        return getName(this._city)
    }

    get city(): string {    
        return this._city;
    }

    get temperature(): number {
        return this._temperature;
    }

    get weatherConditionType(): string {
        return this._weatherConditionType 
            || weatherConditions[this.getRandomNumber(0, weatherConditions.length - 1)].weatherType;
    }

    get cloudyPercent(): string {
        return `${this._cloudyPercent || this.getRandomNumber(0, 100)}%`;
    }   

    get humidity(): string {
       return `${this._humidity || this.getRandomNumber(0, 100)}%`;
    }

    get wind(): string {
        return `${this._wind || this.getRandomNumber(0, 50)}${this.defaultWindUnit}`;
    }

    get rain(): string {
        return `${this._rain || this.getRandomNumber(0, 20)}mm`;
    }

    private getRandomNumber(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    static get defaultCities(): string[] {
        return [
            "london",
            "tokyo",
            "delhi",
            "rome",
            "lisbon",
            "berlin",
            "paris"
        ];
    }
       
}



export { WeatherCondition, Weather, weatherConditions };