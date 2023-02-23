import React from "react";
import { useNavigate } from "react-router-dom";

function SpotItem({
    id,
    address,
    available_vaccines,
    capacity,
    name,
    serve,
}){

    const navigate = useNavigate();
    
    const onClick = () => {
        navigate(`/spot-detail/${id}`)
    }

    const trueVaccines = Object.keys(available_vaccines).filter(vaccine => available_vaccines[vaccine] === true).join(", ");

    return (
        <div className="row" onClick={onClick}>
            <div className="col-5">
                        <h5 className="text-primary">{name}</h5>
                        <span className="text-muted">{address}</span>
                    </div>
                    <div className="col-4">
                        <h5>Available vaccines</h5>
                        <span className="text-muted">{trueVaccines}</span>
                    </div>
                    <div className="col-3">
                        <h5>Serve</h5>
                        <span className="text-muted">
                        {serve === 1 && "Only first vaccination"}
                        {serve === 2 && "Only second vaccination"}
                        {serve === 3 && "Both vaccination"}
                    </span>
                    </div>
        </div>
    )

}

export default SpotItem;