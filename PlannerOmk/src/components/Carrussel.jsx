import { useState , useEffect  , useCallback} from "react";
import image1 from '../assets/carruselimg/Image1.png'
import image2 from '../assets/carruselimg/Image2.png'
import image3 from '../assets/carruselimg/Image3.png'
import image4 from '../assets/carruselimg/Image4.png'
import image5 from '../assets/carruselimg/Image5.png'



export default function Carrussel() {
// // Detecta el evento de scroll del usuario
// window.addEventListener('scroll', function() {
//   // Obtiene la altura de la barra de navegación
//   var navbar = document.getElementById('navbar');
//   var navbarHeight = navbar ? navbar.offsetHeight : 0;

  // Comprueba la posición actual de desplazamiento
  // var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  
//   // Calcula la altura visible de la página
//   var alturaVisible = window.innerHeight || document.documentElement.clientHeight;
  
//   // Calcula la altura total de la página
//   var alturaTotal = document.body.scrollHeight;
  
//   // Calcula la altura restante
//   var alturaRestante = alturaTotal - (scrollPos + alturaVisible);
  
//   // Calcula la altura a la que se encuentra el usuario (incluyendo la barra de navegación)
//   var alturaUsuario = scrollPos + alturaVisible + navbarHeight;
  
//   // Muestra los resultados en la consola
//   console.log("Altura de la barra de navegación: " + navbarHeight);
//   console.log("Altura total: " + alturaTotal);
//   console.log("Altura visible: " + alturaVisible);
//   console.log("Altura restante: " + alturaRestante);
//   console.log("Altura del usuario: " + alturaUsuario);
// });

  const [scrollY, setScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  function between(number, min, max) {
    return number >= min && number <= max;
  }

  return (
    <div className="flex flex-row w-full px-60">
      <div className="inline w-3/4 text-start p-10">
        <h1 className={between(scrollY, 1800, 2200) ? "font-bold my-48 text-5xl" : "font-bold my-48 text-5xl text-gray-300"}>
          Make your post-its digital
        </h1>
        <h1 className={between(scrollY, 2300, 2500) ? "font-bold my-48 text-5xl" : "font-bold my-48 text-5xl text-gray-300"}>
          Save and organize your favorite links
        </h1>
        <h1 className={between(scrollY, 2600, 2800) ? "font-bold my-48 text-5xl" : "font-bold my-48 text-5xl text-gray-300"}>
          Track tasks with simple todo lists
        </h1>
        <h1 className={between(scrollY, 2900, 3100) ? "font-bold my-48 text-5xl" : "font-bold my-48 text-5xl text-gray-300"}>
          Instantly share with anyone
        </h1>
        <h1 className={between(scrollY, 3200, 3400) ? "font-bold my-48 text-5xl" : "font-bold my-48 text-5xl text-gray-300"}>
          Use on any device
        </h1>
      </div>
      <div className="inline w-2/4">
        <div className="h-[30rem] w-[30rem] rounded-xl bg-slate-200 sticky top-28">
          <img src={image1} className={between(scrollY, 1800, 2299) ? "relative top-0 rounded-xl" : "hidden"} alt="Image1" />
          <img src={image2} className={between(scrollY, 2300, 2599) ? "relative top-0 rounded-xl" : "hidden"} alt="Image1" />
          <img src={image3} className={between(scrollY, 2600, 2899) ? "relative top-0 rounded-xl" : "hidden"} alt="Image1" />
          <img src={image4} className={between(scrollY, 2900, 3199) ? "relative top-0 rounded-xl" : "hidden"} alt="Image1" />
          <img src={image5} className={between(scrollY, 3200, 3400) ? "relative top-0 rounded-xl" : "hidden"} alt="Image1" />
        </div>
      </div>
    </div>
  );
}