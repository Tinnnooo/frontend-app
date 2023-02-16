import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Consultations from "../components/Consultations";
import Vaccinations from "../components/Vaccinations";
import { asyncPopulateSocietyAndConsultations, asyncPopulateVaccinations } from "../states/shared/action";

function DashboardPage(){

    const {
        consultations = null,
        vaccination = null,
        authSociety,
    } = useSelector((states) => states);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncPopulateSocietyAndConsultations());
        dispatch(asyncPopulateVaccinations());
    }, [dispatch]);

    return(
        <>
        <main>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Dashboard</h1>
                </div>
            </header>

            <div className="container">
                <Consultations consultations={consultations}/>
                <Vaccinations vaccination={vaccination} />
            </div>
        </main>
        </>
    );
}

export default DashboardPage;