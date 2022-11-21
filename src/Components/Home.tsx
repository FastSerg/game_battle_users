import Clock from './Clock'
import './Home.scss'
type Props = {}

const Home = (props: Props) => {
    return (
        <div className="container">
            <h1>Github Battle: Battle your friends ...and stuff</h1>
            <h2 className="home-title">Time to game</h2>
            <Clock />
        </div>
    )
}

export default Home
