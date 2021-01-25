import weather from 'openweather-apis'

weather.setLang('pt')
weather.setAPPID(process.env.NEXT_PUBLIC_OPENWEATHER_TOKEN);

export default weather