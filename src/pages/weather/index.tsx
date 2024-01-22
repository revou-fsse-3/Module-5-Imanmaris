import Layout from "@/layouts";
import { OldCard } from "@/components";
import axios from 'axios';
import search_icon from '../../components/Assets/search.png';
import suhu_max from '../../components/Assets/suhumax.png';
import humidity_icon from '../../components/Assets/humidity.png';
import angin_icon from '../../components/Assets/angin.png';
import Image from "next/image";
import { useRef } from "react";

interface LocationData {
  lat: number;
  lon: number;
  localtime: number;
  name: string;
  country: string;
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

const Weather = ({ data, setData }: { data: AppData[]; setData: React.Dispatch<React.SetStateAction<AppData[]>> }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSearch = async () => {
    try {
      // Retrieve the value from the input field
      const location = searchRef?.current?.value || "Indonesia";
      console.log(location);
      // Perform the search or update the component state accordingly
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6cd366cb3d634eb8b0c21922241201&q=${location}&days=7`);
      const newData: AppData[] = [response.data];
      setData(newData);
      // Update your component state or do something with the new data
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

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
              <Image className="h-7 w-7" src={search_icon} alt="search logo" />
            </div>
          </section>

          <section className='backdrop-blur-xl bg-sky-100/[.9] rounded-b-xl p-10'>
            {data.map((item, index) => (
              <section key={index} className="flex flex-wrap flex-col items-center">
                <h2 className='font-bold text-xl text-slate-500'>{item.location.country}</h2>
                <p>{item.location.localtime}</p>

                <img
                  className="m-5 bg-violet-50 hover:bg-violet-200 active:bg-violet-700 rounded-full p-5"
                  src={item.current.condition.icon}
                  alt="logo cuaca"
                />
                <p className="description">{item.current.condition.text}</p>

                <section className='flex flex-row gap-1 justify-center items-center mt-10'>
                  <div className='flex flex-col gap-2 p-2 justify-center items-center '>
                    <p className='flex flex-col justify-center text-2xl items-center'><Image className='h-8 w-auto' src={suhu_max} alt="logo suhu udara" /> {item.current.temp_c} °C</p>
                    <p className='flex justify-center items-center'> {'Temperature °C'}</p>
                  </div>

                  <div className='flex flex-col gap-2 p-2 justify-center items-center'>
                    <p className='flex flex-col justify-center text-2xl items-center'><Image className='h-8 w-auto' src={humidity_icon} alt="logo kelembaban udara" />{item.current.humidity} %</p>
                    <p className='flex justify-center items-center'>{'Kelembapan %'}</p>
                  </div>

                  <div className='flex flex-col gap-2 p-2 justify-center items-center'>
                    <p className='flex flex-col justify-center text-2xl items-center'><Image className='h-8 w-auto' src={angin_icon} alt="logo kecepatan udara" />{item.current.wind_mph} m/s</p>
                    <p className='flex justify-center items-center'>{'Laju Angin m/s'}</p>
                  </div>
                </section>

              </section>
            ))}
          </section>

        </OldCard>
      </Layout>
    </main>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const api_key = "6cd366cb3d634eb8b0c21922241201";
    const location = context.query.location || "Indonesia"; // Use the query parameter for location

    const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=7`);
    const data: AppData[] = [response.data];

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: [],
        error: 'Failed to fetch weather data',
      },
    };
  }
}

export default Weather;
