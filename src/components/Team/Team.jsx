import { useState } from "react";
import Cart from "../Cart/Cart";
import './Team.css'
import { useEffect } from "react";


const Team = () => {
    const [allActor, setAllActor] = useState([])
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllActor(data))
    },[])
    console.log(allActor)

    return (
        <div className="container">
            {/* team */}
            <div className="team-container">
                {
                    allActor.map(actor =>  ( 
                        // eslint-disable-next-line react/jsx-key
                        <div className="team-cart">
                    <div className="card-img">
                        <img src={actor.image} alt="" />
                    </div>
                    <h1>{actor.name}</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!</p>
                    <div className="card-body">
                        <div>
                            <h3>Salary: {actor.salary} $</h3>
                        </div>
                        <div><h3>{actor.role}</h3></div>
                    </div>
                    <button className="btn-cart">Select</button>
                </div>
                    ))
                }
            </div>
            {/* calculate container */}
            <div className="calculate-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Team;