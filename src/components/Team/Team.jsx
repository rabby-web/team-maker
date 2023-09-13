import Cart from "../Cart/Cart";
import './Team.css'


const Team = () => {
    return (
        <div className="container">
            {/* team */}
            <div className="team-container">
                <div className="team-cart">
                    <div className="card-img">
                        <img src="" alt="" />
                    </div>
                    <h1>Name:</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!</p>
                    <div className="card-body">
                        <div>
                            <h3>Salary:</h3>
                        </div>
                        <div>Writer</div>
                    </div>
                    <button className="btn-cart">Select</button>
                </div>
                <div className="team-cart">
                    <div className="card-img">
                        <img src="" alt="" />
                    </div>
                    <h1>Name:</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!</p>
                    <div className="card-body">
                        <div>
                            <h3>Salary:</h3>
                        </div>
                        <div>Writer</div>
                    </div>
                    <button className="btn-cart">Select</button>
                </div>
                <div className="team-cart">
                    <div className="card-img">
                        <img src="" alt="" />
                    </div>
                    <h1>Name:</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!</p>
                    <div className="card-body">
                        <div>
                            <h3>Salary:</h3>
                        </div>
                        <div>Writer</div>
                    </div>
                    <button className="btn-cart">Select</button>
                </div>
                <div className="team-cart">
                    <div className="card-img">
                        <img src="" alt="" />
                    </div>
                    <h1>Name:</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, maxime!</p>
                    <div className="card-body">
                        <div>
                            <h3>Salary:</h3>
                        </div>
                        <div>Writer</div>
                    </div>
                    <button className="btn-cart">Select</button>
                </div>
            </div>
            {/* calculate container */}
            <div className="calculate-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Team;