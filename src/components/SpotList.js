import React from "react";
import SpotItem from "./SpotItem";

function SpotList({spots}){
    return (
        <article className="spot">
            {spots.map((spot) => (
                <SpotItem 
                key={spot.id}
                {...spot}
                />
            ))}
        </article>
    )

}

export default SpotList;