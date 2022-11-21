import Clock from './Clock'
import './Home.scss'
type Props = {}

const Home = (props: Props) => {
    return (
        <div className="container">
            <h1>Github Battle: Battle your friends ...and stuff</h1>
            <Clock />
        </div>
    )
}

export default Home
