import { useState } from "react";
import Cart from "../Cart/Cart";
import './Team.css'
import { useEffect } from "react";


const Team = () => {
    const [allActor, setAllActor] = useState([])
    const [selectedActors, setSelectedActors] = useState([]);
    const [remaining, setRemaining] = useState(0)
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setAllActor(data))
    },[])
    console.log(allActor)
    const handleSelectCart = actor =>{
        const isExist = selectedActors.find(item => item.id == actor.id);
        let cost = actor.salary;
        if(isExist){
            return alert("Same card add")
        }
        else{
            selectedActors.forEach(item => {
                cost = cost + item.salary;
            })
            const remaining = 20000 -cost;
            if(cost > 20000){
                return alert("budget corse")
            }
            else{
                setRemaining(remaining)
                setTotalCost(cost)
                setSelectedActors([...selectedActors,actor])
            }
        }
    }

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
                    <button onClick={()=> handleSelectCart(actor)} className="btn-cart">Select</button>
                </div>
                    ))
                }
            </div>
            {/* calculate container */}
            <div className="calculate-container">
                <Cart totalCost={totalCost} remaining={remaining} selectedActors={selectedActors}></Cart>
            </div>
        </div>
    );
};

export default Team;