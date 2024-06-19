import { Link, useNavigate } from 'react-router-dom';

// Esta función es solo un ejemplo. En una aplicación real, puedes obtener el estado de autenticación desde el contexto, Redux, o cualquier otra forma de manejo de estado global.
const isAuthenticated = () => {
  // Lógica para verificar si el usuario está autenticado
  // Esto puede ser una verificación de token en localStorage, un estado en el contexto, etc.
  return localStorage.getItem('authToken') !== null;
};

export default function Main() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated()) {
      navigate('/create-note');
    } else {
      navigate('/singin');
    }
  };

  return (
    <div className="flex flex-col w-full justify-center items-center mt-10">
      <div className="text-center mb-8">
        <h1 className="z-10 font-extrabold text-5xl sm:text-6xl md:text-8xl">
          The Simplest Way to <br /> Get Organized
        </h1>
      </div>
      <div className="w-10/12 md:w-8/12 lg:w-6/12 flex text-center">
        <p className="text-lg text-gray-600">
          "<span className="font-medium text-black">Planner OMK</span> list is straightforward & free. <span className="font-medium text-black">It simplifies task management</span> with clear categories & flexible features. No payment needed. Try it for easy organization!"
        </p>
      </div>
      <button 
        onClick={handleButtonClick} 
        className="h-16 w-[20rem] bg-blue-600 text-center flex justify-center items-center text-xl font-medium text-white rounded-xl p-0 my-7"
      >
        Create your first note ➔
      </button>
    </div>
  );
}
