
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../Card";
import Text from "../Text";


interface Props {
    onSubmit: (data: Form) => void;
}

interface Form {
    email: string;
    username: string;
    password: string;
}

const LoginForm = ({onSubmit}: Props) => {

    
    const {
        handleSubmit, 
        register, 
        formState: { errors },
    } = useForm<Form>();

    const submit : SubmitHandler<Form> = (data) => onSubmit(data);
    

    return (
        <Card>

            <Text>{'Login to Continue'}</Text>
            <Card>
                <form onSubmit={handleSubmit(submit)}>
                    
                    <Card>
                        <Text>{'Email'}</Text>
                        <input
                            type="email"
                            {...register("email", {
                            required: true,
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            //     message: "invalid email address"
                            // }
                            })}
                            placeholder="email"
                        />
                    </Card>
                    
                    <Card>
                        <Text>{'Username'}</Text>
                        <input
                            {...register("username", {
                            required: true,
                            })}
                            placeholder="username"
                        />
                    </Card>

                    <Card>
                        <Text>{'Password'}</Text>
                        <input
                            type="password"
                            {...register("password", {
                            required: true,
                            // pattern: {
                            //     value: /^[A-Z0-9._%+-]+[A-Z]{2,}$/i,
                            //     message: "invalid password"
                            // }
                            })}
                            placeholder="password"
                        /> 
                    </Card>
                                
                    <button type="submit">{'Submit'}</button>
                </form>
            </Card>

        </Card>
    )
}

export default LoginForm;