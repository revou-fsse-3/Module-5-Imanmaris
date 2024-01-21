
import { ReactNode, createContext, useState } from "react";

interface Forecast {
    date: string;
    date_epoch:number;
}

interface Props {
    children: ReactNode;
}

interface Context {
    forecast?: Forecast;
    setForecast?: React.Dispatch<React.SetStateAction<Forecast | undefined>>;
}

const defaultValue: Context = {
    forecast: undefined,
    setForecast: undefined
}

export const AppContext = createContext(defaultValue);

const AppProvider = ({children}: Props) => {
    const [forecast, setForecast] = useState<Forecast>();

    return (
        <AppContext.Provider value= {{ forecast, setForecast}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider