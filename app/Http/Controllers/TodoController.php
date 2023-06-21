<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TodoController extends Controller
{
    public function index(){
        $todo = Todo::query()->get();
        return Inertia::render('Dashboard', compact('todo'));
    }

    public function create(){
        $todo = Todo::all();
        return Inertia::render('Form/Add', compact('todo'));
    }

    public function store(Request $request){
        Todo::create([
            'todo' => $request['todo'],
        ]);

        return to_route('dashboard');
        // return redirect()->back();
    }

    public function edit(Request $request){
        $myTodo = Todo::find($request->id);
        return Inertia::render('Form/Edit',compact('myTodo'));
    }

    public function update(Request $request){
        Todo::find($request->id) -> update([
            'todo' => $request['todo'],
        ]);
        return to_route('dashboard');
    }

    public function destroy(Request $request){
        Todo::find($request->id) ->delete();
        return to_route('dashboard');
    }

}
