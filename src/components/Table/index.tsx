
import { ReactNode } from "react";
import Card from "../Card";
import Text from "../Text";

interface Category {
    id: number;
    name: string;
    status: string;
    action: ReactNode;
}

interface Props {
    data: Category[];
}

const Table = ({data}:Props) => {

    
    return(
        <Card>
            <Text>{'Category List'}</Text>

            <table>
                <thead>
                    <tr>
                        <th>Nomor</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((category) => (
                        <tr key={category.id}>
                            <td id='id'>{category.id}</td>
                            <td id='name'>{category.name}</td>
                            <td id='status'>{category.status}</td>
                            <td id='action'>{category.action}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button type="submit">{'Submit'}</button>

        </Card>
    )
}

export default Table;