
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="text-center">
        <h1 className="text-9xl font-bold mb-4 text-yellow-500 inline">404</h1>
        <h2 className="text-7xl font-semibold mb-20">Page Not Found</h2>
        <p className="text-4xl mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link
          to="/"
          className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
