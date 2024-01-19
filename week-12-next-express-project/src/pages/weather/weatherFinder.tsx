// Import necessary components, interfaces, and images

import Layout from "@/layouts";
import Head from "next/head";
import { Card } from "@/components";
import Link from "next/link";
import axios from 'axios';
import search_icon from '../../components/Assets/search.png'
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
    location: LocationData[];
    current: CurrentData[];
    forecast: ForcaseData[];
  }

const Weather = ({ data }: { data: AppData[] }) => {
    const searchRef = useRef<HTMLInputElement | null>(null);
  
    const search = async () => {
      let location = searchRef?.current?.value ? searchRef?.current?.value : "Indonesia";

    };
  
    return (
      <main className={`bg-sky-50/[.9] rounded-b-xl flex min-h-screen flex-col items-center justify-center`}>
        <Layout>
          <section className="top-bar mb-10 ">
            <input type="text" className="cityInput " placeholder="Search" ref={searchRef} />
            <div className="search-icon" onClick={() => search()}>
              <Image className="h-7 w-auto" src={search_icon} alt="search logo" />
            </div>
          </section>
  
          <section className='backdrop-blur-xl bg-white/70 rounded-3xl pb-5'>
            <Card>
              {data.map((item, index) => (
                <section key={index} className="flex flex-wrap flex-col items-center mt-10">
                  {/* ... Render weather details based on the structure of your data */}
                </section>
              ))}
            </Card>
          </section>
        </Layout>
      </main>
    );
  };
  
  export async function getServerSideProps() {
    try {
      const api_key = "6cd366cb3d634eb8b0c21922241201";
      const location = "Indonesia";
  
      const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${api_key}&q=${location}&days=7`);
      const data = [response.data];
  
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
        },
      };
    }
  }
  
  export default Weather;

function setData(arg0: any[]) {
    throw new Error("Function not implemented.");
}
  