import React from "react";
import VaccinationItem from "./VaccinationItem";

function Vaccinations({vaccinations, consultations}){

    const firstDose = vaccinations.first;
    const secondDose = vaccinations.second;
    
    return (
            <section className="consultation-section mb-5">

            <div className="section-header mb-3">
                <h4 className="section-title text-muted">My Vaccinations</h4>
            </div>
            
            <div className="section-body">
                <div className="row mb-4">
            
            {consultations.length <= 0 || consultations[0].status === 'pending' ? (
                <>
                    <div className="col-md-12">
                        <div className="alert alert-warning">
                            Your consultation must be approved by doctor to get the vaccine.
                        </div>
                    </div>
                </>
            ) : (
                <>
                        <VaccinationItem
                        firstDose={firstDose}
                        secondDose={secondDose}
                        />
                </>
            )}

                </div>
                </div>
        </section>
    )
}

export default Vaccinations;