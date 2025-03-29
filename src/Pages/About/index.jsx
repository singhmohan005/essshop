import { useNavigate } from "react-router-dom";
import { Counter } from "../../components/Counter";

const About = () => {
    const navigate = useNavigate()

    return (<div>
        <h3>About</h3>
        <button onClick={() => {navigate('/')}}>Home</button>
        <Counter />
    </div>)
}

export default About;