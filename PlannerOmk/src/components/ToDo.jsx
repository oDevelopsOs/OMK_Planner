import { useEffect, useRef, useState } from "react";

export default function ToDo() {
  const inputRef = useRef(null);
  const [toDoNotes, setNotes] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Enter") {
        const newNote = inputRef.current.value.trim();
        if (newNote) {
          setNotes(prevNotes => [...prevNotes, { text: newNote, done: false }]);
          inputRef.current.value = "";
        }
      }
    };

    const element = inputRef.current;
    if (element) {
      element.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      if (element) {
        element.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  const handleDelete = (index) => {
    setNotes(prevNotes => prevNotes.filter((_, i) => i !== index));
  };

  const handleDone = (index) => {
    setNotes(prevNotes => 
      prevNotes.map((note, i) => 
        i === index ? { ...note, done: !note.done } : note
      )
    );
  };

  return (
    <div>
      <section className=" min-h-80 h-auto w-11/12 rounded-lg shadow-md border mx-auto p-2 my-4 md:w-96 md:m-4 ">
        <div className="flex justify-between w-full px-2 mt-2">
          <h2 className="inline font-bold">Untitled Note</h2>
          <button className="inline font-bold text-lg text-gray-400">...</button>
        </div>
        <input
          ref={inputRef}
          id="textToDo"
          type="text"
          placeholder="+ new item"
          className="bg-transparent border rounded-xl p-2 w-full outline-none"
        />
        <ul>
          {toDoNotes.map((note, index) => (
            <div className="w-full flex justify-between px-4 my-3" key={index}>
              <li className={`inline ${note.done ? "line-through text-gray-500" : ""}`}>{note.text}</li>
              <div>
                <button onClick={() => handleDone(index)} className="hover:text-green-400 mx-2">✔</button>
                <button onClick={() => handleDelete(index)} className="hover:text-red-600 mx-2">✘</button>
              </div>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}
