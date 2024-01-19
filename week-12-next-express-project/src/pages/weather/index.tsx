
import Layout from "@/layouts";
// import Head from "next/head";
import { Card } from "@/components";
// import Link from "next/link";
import axios from 'axios';
import search_icon from '../../components/Assets/search.png';
import suhu_max from '../../components/Assets/suhumax.png';
import humidity_icon from '../../components/Assets//humidity.png';
import angin_icon from '../../components/Assets/angin.png';
import Image from "next/image";
import { useRef } from "react";


interface LocationData {
    lat: number;
    lon: number;
    localtime: number;
    name: string;
    country:string;
  
  }
  
  interface ConditionData5{
      text:string;
      icon:string;
      code: number;
  }
  
  
  
  interface HourData {
      heatindex_c: number;
      condition: ConditionData5;
      wind_mph: number;
      pressure_mb:number;
      humidity: number;
      feelslike_c:number;
      temp_c: number;  
      time: string  
    }
  interface ForecastDay {
      hour: {[key:number]:HourData};
      date: string;
  }
  
  interface ForcaseData {
      forecastday : {[key:number]:ForecastDay}
  }
  
  interface ConditionData{
      text:string;
      icon:string;
      code: number;
  }
  
  interface CurrentData {
    speed: number;
    condition: ConditionData;
    wind_mph: number;
    pressure_mb:number;
    humidity: number;
    feelslike_c:number;
    temp_c: number;
    
  }
  
  interface AppData {
    location: LocationData;
    current: CurrentData;
    forecast: ForcaseData;
  }

const Weather = ({ data }: { data: AppData[] }) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSearch = async (location: string) => {
    try {
      // Perform the search or update the component state accordingly
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=6cd366cb3d634eb8b0c21922241201&q=${location}&days=7`);
      const newData: AppData[] = [response.data];
      // Update your component state or do something with the new data
    } catch (error) {
      console.error('Error during search:', error);
    }
  };

  const handleSearch = () => {
    const location = searchRef?.current?.value || "Indonesia";
    onSearch(location);
  };
  
    return (
      <main className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}>
        <Layout>
          <Card>
            <section className="w-full pt-10 backdrop-blur-xl bg-sky-100/[.9] text-black flex flex-row justify-center gap-1">
              <input 
              type="text" 
              className="cityInput " 
              placeholder="Search Location" 
              ref={searchRef} />
              <div className="search-icon" onClick={handleSearch}>
                <Image className="h-7 w-7" src={search_icon} alt="search logo" />
              </div>
            </section>
    
            <section className='backdrop-blur-xl bg-sky-100/[.9] rounded-xl p-10'>
                {data.map((item, index) => (
                  <section key={index} className="flex flex-wrap flex-col items-center">
                          <h2 className='font-bold text-xl text-slate-500'>{item.location.country}</h2>
                          <p>{item.location.localtime}</p>

                          <img
                          className="m-5 bg-violet-50 hover:bg-violet-200 active:bg-violet-700 rounded-full p-5"
                          src= {item.current.condition.icon}
                          alt="logo cuaca"
                          />
                          <p className="description">{item.current.condition.text}</p>

                          <div className='flex gap-7 justify-center items-center mt-4'>
                              <p className='flex justify-center items-center'><Image className='h-8 w-auto' src={suhu_max} alt="logo suhu udara"/> {item.current.temp_c}°C</p>
                              <p className='flex justify-center items-center'><Image className='h-8 w-auto' src={humidity_icon} alt="logo kelembaban udara"/>{item.current.humidity}%</p>
                              <p className='flex justify-center items-center'><Image className='h-8 w-auto' src={angin_icon} alt="logo kecepatan udara"/>{item.current.wind_mph} m/s</p>
                          </div>                
                  </section>
                ))}
            </section>

          </Card>
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