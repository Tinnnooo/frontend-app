import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

function ConsultationInput({consultationInput}){
    const [disease_history, onDiseaseChange] = useInput('');
    const [current_symptoms, onSymptomsChange] = useInput('');

    const [hasDiseaseHistory, setHasDiseaseHistory] = useState(true);
    const [hasCurrentSymptoms, setHasCurrentSymptoms] = useState(true);


    const handleHasDiseaseHistoryChange = (e) => {
        setHasDiseaseHistory(e.target.value === 'true');
    }

    const handleHasCurrentSymptomsChange = (e) => {
        setHasCurrentSymptoms(e.target.value === 'true');
    }

    const navigate = useNavigate();

    function consultationInputHandler(e) {
        e.preventDefault();
        consultationInput(disease_history, current_symptoms);
        navigate('/');
        setTimeout(() => {
            window.location.reload();
        }, 300)
    }


    return (
        <form onSubmit={consultationInputHandler}>
            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="disease-history" className="mr-3 mb-0">Do you have disease history ?</label>
                            <select className="form-control-sm" value={hasDiseaseHistory} onChange={handleHasDiseaseHistoryChange}>
                                <option value={true}>Yes, I have</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        {hasDiseaseHistory && (
                            <div>
                                <textarea id="disease-history" className="form-control" cols="30" rows="10" placeholder="Describe your disease history" value={disease_history} onChange={onDiseaseChange}></textarea>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="d-flex align-items-center mb-3">
                            <label htmlFor="current-symptoms" className="mr-3 mb-0">Do you have symptoms now ?</label>
                            <select className="form-control-sm" value={hasCurrentSymptoms} onChange={handleHasCurrentSymptomsChange}>
                                <option value={true}>Yes, I have</option>
                                <option value={false}>No</option>
                            </select>
                        </div>
                        {hasCurrentSymptoms && (
                            <textarea id="current-symptoms" className="form-control" cols="30" rows="10" placeholder="Describe your current symptoms" value={current_symptoms} onChange={onSymptomsChange}></textarea>
                        )}
                    </div>
                </div>
            </div>

            <button className="btn btn-primary">Send Request</button>
        </form>
    )

}

export default ConsultationInput;