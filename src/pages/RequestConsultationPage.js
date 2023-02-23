import React from "react";
import { useDispatch } from "react-redux";
import ConsultationInput from "../components/ConsultationInput";
import { asyncAddConultation } from "../states/consultations/action";


function RequestConsultationPage(){

    const dispatch = useDispatch();

    const onConsultationInput = (disease_history, current_symptoms) => {
        dispatch(asyncAddConultation({disease_history, current_symptoms}));
    }

    return (
        <main>
            <header>
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-4">Request Consultation</h1>
                    </div>
                </div>

                <div className="container">
                    <ConsultationInput consultationInput={onConsultationInput}/>
                </div>
            </header>
        </main>
    )
}

export default RequestConsultationPage;