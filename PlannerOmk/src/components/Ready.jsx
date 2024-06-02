import { Link } from "react-router-dom";

export default function Ready() {
  return (
    <div className="md:flex md:justify-center md:items-center h-[15em] mx-auto md:w-[75em] my-20 rounded-xl p-10 bg-blue-500">
        <div className="md:w-3/4 my-4 md:my-0 md:mr-4">
            <h2 className="text-white font-semibold text-4xl mb-2">Ready to get started?</h2>
            <p className="text-white text-xl">Start benefiting from our fully free-to-use app immediately, with no restrictions or tiers.</p>
        </div>
        <div className="md:w-1/4 my-4 md:my-0 md:ml-4 flex justify-center items-center">
            <button className="h-14 w-56 bg-white font-medium rounded-xl">
                <Link to={'/singin'}>
                    Get started for free
                </Link>
            </button>
        </div>
    </div>
  );
}
