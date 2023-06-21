import { Link } from "@inertiajs/react";

const todo = (todos) => {
    return todos?.map((data, i) => {
        return (
            <tr key={data.id}>
                <th>{i + 1}</th>
                <td>{data.todo}</td>
                <td>
                    <Link
                        href={route("edit.todo")}
                        method="get"
                        data={{ id: data.id }}
                        as="button"
                    >
                        Edit
                    </Link>
                </td>
                <td>
                    <Link
                        href={route("delete.todo")}
                        method="post"
                        data={{ id: data.id }}
                        as="button"
                    >
                        Delete
                    </Link>
                </td>
            </tr>
        );
    });
};

const TodoList = ({ todos }) => {
    console.log(todos);
    return todo(todos);
};

export default TodoList;
