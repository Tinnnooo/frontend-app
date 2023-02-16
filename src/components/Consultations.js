import React from "react";
import ConsultationItem from "./ConsultationItem";

function Consultations({consultations}){

    return (
        
        <section className="consultation-section mb-5">
            <div className="row">
                {consultations && consultations.length < 2 ? (
                    <>
                        <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h5 className="mb-0">Consultation</h5>
                                </div>
                                <div className="card-body">
                                    <button type="button" className="btn">+ Request consultation</button>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}

                {consultations.length > 0 ? (
                    <>  
                    {consultations.map((consultation) => (
                        <ConsultationItem 
                        key={consultation.id}
                        {...consultation}
                        />
                    ))}
                    </>
                ): (
                    <>
                        <p>You haven't request consultation yet.</p>
                    </>
                )}

                    
            </div>
        </section>
    );
}

export default Consultations;