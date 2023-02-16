import React from "react";
import { useNavigate } from "react-router-dom";

function ConsultationItem({
    id,
    status,
    disease_history,
    current_symptoms,
    doctor_notes,
    doctor,
}){

    return (
        <>
            <div className="col-md-4">
                    <div className="card card-default">
                        <div className="card-header border-0">
                            <h5 className="mb-0">Consultation</h5>
                        </div>
                        <div className="card-body p-0">
                            <table className="table table-striped mb-0">
                                <tbody>
                                <tr>
                                    <th>Status</th>
                                    <td><span className="badge badge-info">{status}</span></td>
                                </tr>
                                <tr>
                                    <th>Disease History</th>
                                    <td className="text-muted">{disease_history ? disease_history : '-'}</td>
                                </tr>
                                <tr>
                                    <th>Current Symptoms</th>
                                    <td className="text-muted">{current_symptoms ? current_symptoms : '-'}</td>
                                </tr>
                                <tr>
                                    <th>Doctor Name</th>
                                    <td className="text-muted">{doctor.name ? doctor.name : '-'}</td>
                                </tr>
                                <tr>
                                    <th>Doctor Notes</th>
                                    <td className="text-muted">{doctor_notes ? doctor_notes : '-'}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        </>
    )

}

export default ConsultationItem;