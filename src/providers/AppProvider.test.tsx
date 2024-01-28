
import {screen, fireEvent, render, waitFor} from "@testing-library/react";
import AppProvider, { useUser } from "./AppProvider";

describe('AppProvider unit testing', () => {
    
    test('AppProvider should be return correct value', async () => {
        const dummyUser = {
            date: '27-01-2024',
            date_epoch: 27012024,
            country: 'indonesia'
        }

        const TestComponent = () => {
        
            const context = useUser()
            const { forecast, setForecast } = context

            const getUserData = () => {
                setForecast?.(dummyUser)
            }

            return (
                <>
                    <div>
                        <p>{`Date: ${forecast?.date}`}</p>
                        <p>{`Date Epoch: ${forecast?.date_epoch}`}</p>
                        <p>{`Country: ${forecast?.country}`}</p>
                        <button onClick={getUserData}>New Location</button>
                    </div>  
                </>
            )
        };

        render(
            <AppProvider>
                <TestComponent/>
            </AppProvider>
        )

      expect(screen.getByText('New Location')).toMatchSnapshot();
      await waitFor (() => fireEvent.click(screen.getByRole('button')))
      expect(screen.getByText(`Date: ${dummyUser.date}`)).toMatchSnapshot();
      expect(screen.getByText(`Date Epoch: ${dummyUser.date_epoch}`)).toMatchSnapshot();    
      expect(screen.getByText(`Country: ${dummyUser.country}`)).toMatchSnapshot();
    });
  
});