import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpotList from "../components/SpotList";
import { asyncPopulateSpots, asyncPopulateVaccinations } from "../states/shared/action";

function RegisterVaccinationPage(){
    const {
        vaccinations = [],
        spots = null,
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateVaccinations());
        dispatch(asyncPopulateSpots());
    }, [dispatch])

    const firstDose = vaccinations.first;
    const secondDose = vaccinations.second;

    return (
        <>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">{firstDose ? "Second" : "First"} Vaccination</h1>
                </div>
            </header>

                <SpotList spots={spots}/>

        </>

        
    )
}

export default RegisterVaccinationPage;