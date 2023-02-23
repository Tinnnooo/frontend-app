import React from "react";
import { Link } from "react-router-dom";
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
                                    <Link to="/request-consultation">+ Request consultation</Link>
                                </div>
                            </div>
                        </div>
                    </>
                ) : null}
                {consultations ? (
                    consultations.length > 0 ? (
                        <>  
                        {consultations.map((consultation, index) => (
                            <ConsultationItem 
                            key={index}
                            {...consultation}
                            />
                        ))}
                        </>
                    ): (
                        <>
                            <p>You haven't request consultation yet.</p>
                        </>
                    )
                ) : (
                    <div>
                        Loading...
                    </div>
                )}
                
                    
            </div>
        </section>
    );
}

export default Consultations;