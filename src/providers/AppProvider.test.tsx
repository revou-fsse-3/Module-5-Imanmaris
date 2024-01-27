
import {screen, fireEvent, render, waitFor} from "@testing-library/react";
import AppProvider, { useUser } from "./AppProvider";

describe('AppProvider unit testing', () => {
    
    test('AppProvider should be return correct value', async () => {
        const dummyUser = {
            date: '27-01-2024',
            date_epoch: 27012024
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
                        <p>{`Name: ${forecast?.date}`}</p>
                        <button onClick={getUserData}>New User</button>
                    </div>  
                </>
            )
        };

        render(
            <AppProvider>
                <TestComponent/>
            </AppProvider>
        )

      expect(screen.getByText('New User')).toBeDefined();
      await waitFor (() => fireEvent.click(screen.getByRole('button')))
      expect(screen.getByText(`Name: ${dummyUser.date}`)).toBeDefined();

    });
  
});