

// eslint-disable-next-line react/prop-types
const Cart = ({selectedActors, remaining,totalCost}) => {
    return (
        <div>
            <h3>Total Actors: {selectedActors.length}</h3>
            <h4>Remaining: {remaining}</h4>
            <h4>TotalCost: {totalCost}</h4>
            {
                // eslint-disable-next-line react/prop-types
                selectedActors.map((actor,idx) => <li key={idx}>{actor.name}</li>)
            }
        </div>
    );
};

export default Cart;