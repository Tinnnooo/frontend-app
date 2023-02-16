import React from "react";

function Vaccinations({vaccination}){
    return (
            <section className="consultation-section mb-5">
            <div className="section-header mb-3">
                <h4 className="section-title text-muted">My Vaccinations</h4>
            </div>
            <div className="section-body">
                <div className="row mb-4">

                    <div className="col-md-12">
                        <div className="alert alert-warning">
                            Your consultation must be approved by doctor to get the vaccine.
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            <div className="card-body">
                                <button type="button" className="btn">+ Register vaccination</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-info">Registered</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">First Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-primary">Vaccinated</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">Sinovac</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">Dr. Raina Pradipta</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body">
                                <button type="button" className="btn">+ Register vaccination</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-info">Registered</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">-</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-default">
                            <div className="card-header border-0">
                                <h5 className="mb-0">Second Vaccination</h5>
                            </div>
                            <div className="card-body p-0">
                                <table className="table table-striped mb-0">
                                    <tbody>
                                    <tr>
                                        <th>Status</th>
                                        <td className="text-muted"><span className="badge badge-primary">Vaccinated</span></td>
                                    </tr>
                                    <tr>
                                        <th>Date</th>
                                        <td className="text-muted">October 27, 2021</td>
                                    </tr>
                                    <tr>
                                        <th>Spot</th>
                                        <td className="text-muted">Usamah Hospital</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccine</th>
                                        <td className="text-muted">Sinovac</td>
                                    </tr>
                                    <tr>
                                        <th>Vaccinator</th>
                                        <td className="text-muted">Dr. Raina Pradipta</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
        </section>
    )
}

export default Vaccinations;