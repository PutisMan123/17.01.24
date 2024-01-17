import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { useState, useEffect } from "react";

const people = [
  {
    name: "Спорт",
    title: "Повседневное",
    role: "Понедельник",
    email: "",
    telephone: "",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },

  // More people...
];

export default function Example() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/todos")
      .then((data) => {
        setTodos(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          {todos?.map((todo) => (
        <>
          <p>
            {todo.id}- {todo?.map} - {String(todo?.idDone)}
          </p>
          
        </>
      ))}  доработать блок визуально и в общем страницу 
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {person.title}
              </p>
            </div>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                  <input
                    id="offers"
                    aria-describedby="offers-description"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  Выполнено
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                  <input
                    id="offers"
                    aria-describedby="offers-description"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  Не выполнено
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
