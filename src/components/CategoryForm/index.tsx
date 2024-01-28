
import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../Card";
import Text from "../Text";

interface Form {
    name: string;
}

interface Props {
    onSubmit: (data: Form) => void;
}

const CategoryForm= ({onSubmit}: Props) => {

    const {
        register,
        handleSubmit,
    } = useForm<Form>()

    const submit : SubmitHandler<Form> = (data) => onSubmit(data);
    
    return(
        <Card>
            <Text>{'Form Category'}</Text>
            <form onSubmit={handleSubmit(submit)}>
                <Card>
                    <Text>{'Name'}</Text>
                    <input
                        type="text"
                        {...register("name", {
                        required: true,
                        })}
                        placeholder="Input Name"
                    />
                </Card>
                <button type="submit">{'Submit'}</button>
            </form>
        </Card>
    )
}

export default CategoryForm;