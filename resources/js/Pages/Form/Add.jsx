import { router } from "@inertiajs/react";
import React, { useState } from "react";

export default function (props) {
    const [todo, setTodo] = useState("");

    const handleBtnSubmit = () => {
        const dataTodo = {
            todo,
        };
        router.post("/todo/add", dataTodo);
    };
    console.log(props.myTodo);
    return (
        <div className="min-h-screen bg-slate-200">
            <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                <div className="form-control">
                    <form action={route("store.todo")} method="post">
                        <label htmlFor="todo" className="label">
                            TODO
                        </label>
                        <input
                            type="text"
                            className="input input-bordered"
                            placeholder="Masukkan Kegiatan"
                            onChange={(e) => setTodo(e.target.value)}
                            value={todo}
                        />
                        <button
                            className="btn text-white ms-2"
                            onClick={handleBtnSubmit}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
