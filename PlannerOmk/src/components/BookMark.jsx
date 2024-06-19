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


  return (
    <div>
      <section className="min-h-80 h-auto w-11/12 rounded-lg shadow-md border mx-auto p-2 my-4 md:w-96 md:m-4 ">
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
            <div className=" w-full flex justify-between px-4 my-3" key={index}>
              <li className='flex align-middle justify-center items-center'>
                <div className="h-6 w-[0.1px] rounded-full bg-slate-400 mr-3 "></div>
                <a className=" text-gray-500" href={`https://www.${note.text}.com`} target="_blank" rel="noopener noreferrer">
                  {note.text}🔗
                </a>
              </li>
            </div>
          ))}
        </ul>
      </section>
    </div>
  );
}
