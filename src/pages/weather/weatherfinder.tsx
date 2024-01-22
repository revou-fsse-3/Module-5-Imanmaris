
import { useState, useRef, useEffect } from "react";
import Layout from "@/layouts";
import { OldCard } from "@/components";
import axios from 'axios';
import search_icon from '../../components/Assets/search.png';
import suhu_max from '../../components/Assets/suhumax.png';
import humidity_icon from '../../components/Assets/humidity.png';
import angin_icon from '../../components/Assets/angin.png';
import panas_icon from '../../components/Assets/panas.png';
import Image from "next/image";

interface LocationData {
  lat: number;
  lon: number;
  localtime: number;
  name: string;
  country: string;
  tz_id:string;
}

interface ConditionData5 {
  text: string;
  icon: string;
  code: number;
}

interface HourData {
  heatindex_c: number;
  condition: ConditionData5;
  wind_mph: number;
  pressure_mb: number;
  humidity: number;
  feelslike_c: number;
  temp_c: number;
  time: string;
}

interface ForecastDay {
  hour: { [key: number]: HourData };
  date: string;
}

interface ForcaseData {
  forecastday: { [key: number]: ForecastDay };
}

interface ConditionData {
  text: string;
  icon: string;
  code: number;
}

interface CurrentData {
  speed: number;
  condition: ConditionData;
  wind_mph: number;
  pressure_mb: number;
  humidity: number;
  feelslike_c: number;
  temp_c: number;
}

interface AppData {
  location: LocationData;
  current: CurrentData;
  forecast: ForcaseData;
}

const WeatherFinder = () => {
  const [data, setData] = useState<AppData[]>([]);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSearch = async () => {
    try {
      const location = searchRef?.current?.value || "Indonesia";
      console.log (location);
      
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6cd366cb3d634eb8b0c21922241201&q=${location}&days=7`);
      const newData: AppData[] = [response.data];
      setData(newData);
      console.log(newData);

      // Reset the search input field
      if (searchRef.current) {
        searchRef.current.value = "";
      }

    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    const defaultLocation = "Indonesia";
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6cd366cb3d634eb8b0c21922241201&q=${defaultLocation}&days=7`);
        const initialData: AppData[] = [response.data];
        setData(initialData);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once on mount

  return (
    <main className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}>
      <Layout>
        <OldCard direction="column">
          <section className="w-full p-5 backdrop-blur-xl bg-sky-100/[.9] text-black flex flex-row justify-center item-center">
            <input
              type="text"
              className="cityInput rounded-l-2xl pl-3 pt-2 pb-2"
              placeholder="Search Location"
              ref={searchRef} />
            <div className="search-icon bg-sky-50/[.9] rounded-r-2xl pl-2 pr-2 pt-2 pb-2" onClick={onSearch}>
              <Image className="h-7 w-7 cursor-pointer" src={search_icon} alt="search logo" />
            </div>
          </section>

          <section className='backdrop-blur-xl bg-sky-100/[.9] rounded-b-xl p-10'>
            {data.map((item, index) => (
                <section key={index} className="flex flex-wrap flex-col items-center">
                    <h2 className='font-bold text-2xl text-slate-500 pb-2'>{item.location.country}</h2>
                    <h3 className='font-bold text-l text-slate-500 pb-2'>{item.location.tz_id}</h3>
                    <p>{item.location.localtime}</p>

                    <img
                    className="m-5 bg-violet-50 hover:bg-violet-200 active:bg-violet-700 rounded-full p-5"
                    src={item.current.condition.icon}
                    alt="logo cuaca"
                    />
                        
                    <p className='flex justify-center text-2xl pb-2 items-center'><Image className='h-8 w-auto' src={suhu_max} alt="logo suhu udara" /> {item.current.temp_c+"°C"}</p>

                    <p className="description">{"Condition :"+ item.current.condition.text}</p>

                </section>
            ))}
          </section>

          <section className='backdrop-blur-xl bg-sky-100/[.9] rounded-b-xl p-10'>
            {data.map((item, index) => (

                <section key={index} className='flex flex-row gap-1 justify-center items-center '>

                    <div className='flex flex-col gap-2 p-2 justify-center items-center'>
                        <p className='flex flex-col justify-center text-l items-center'><Image className='h-8 w-auto' src={humidity_icon} alt="logo kelembaban udara" />{item.current.humidity+"%"}</p>
                        <p className='flex justify-center text-sm items-center'>{'Kelembapan %'}</p>
                    </div>

                    <div className='flex flex-col gap-2 p-2 justify-center items-center'>
                        <p className='flex flex-col justify-center text-l items-center'><Image className='h-8 w-auto' src={angin_icon} alt="logo kecepatan udara" />{item.current.wind_mph+"m/s"}</p>
                        <p className='flex justify-center text-sm items-center'>{'Laju Angin m/s'}</p>
                    </div>

                    <div className='flex flex-col gap-2 p-2 justify-center items-center'>
                        <p className='flex flex-col justify-center text-l items-center'><Image className='h-8 w-auto' src={panas_icon} alt="logo kecepatan udara" />{item.current.pressure_mb+"hPa"}</p>
                        <p className='flex justify-center text-sm items-center'>{'Tekanan hPa'}</p>
                    </div>
                </section>

            ))}
          </section>

        </OldCard>
      </Layout>
    </main>
  );
};

export default WeatherFinder;
