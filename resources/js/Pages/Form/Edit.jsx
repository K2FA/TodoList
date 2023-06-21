import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function (props) {
    const [todo, setTodo] = useState("");

    const handleBtnSubmit = () => {
        const dataTodo = {
            id: props.myTodo.id,
            todo,
        };
        router.post("/todo/update", dataTodo);
    };
    console.log(props);
    return (
        <div className="min-h-screen bg-slate-200">
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="form-control">
                    <label htmlFor="todo" className="label">
                        TODO
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-1/2"
                        placeholder="Masukkan Kegiatan"
                        onChange={(e) => setTodo(e.target.value)}
                        defaultValue={props.myTodo.todo}
                    />
                    <button
                        className="btn text-white w-20 my-2"
                        onClick={handleBtnSubmit}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
