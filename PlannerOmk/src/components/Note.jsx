export default function Note() {
  return (
    <div>
      <section className=" h-80 w-11/12 rounded-lg shadow-md border mx-auto p-2 my-4 md:w-96 md:m-4">
      <div className="flex justify-between w-full px-2 mt-2"><h2 className="inline font-bold">Untitled Note</h2> <button className="inline font-bold text-lg text-gray-400">...</button></div>
        <textarea name="" id=""  className="w-11/12 h-5/6 m-2 bg-transparent resize-none outline-none" placeholder="What's on your mind?">
        </textarea>
      </section>
    </div>
  )
}
