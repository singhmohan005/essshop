import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <h3 className="text-red-500">HOME</h3>
            <Link to="/about">
                <button>Go to about</button>
            </Link>
        </div>
    )
}

export default Home;