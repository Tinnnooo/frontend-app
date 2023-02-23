import React from "react";

function SpotDetailList({spotDetail}){
    return (
        <>
            {spotDetail.spot ? (
                        spotDetail.spot.capacity === 15 ? (
                            <>
                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4>Session 1</h4>
                                                <span className="text-muted">09:00 - 11:00</span>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #1 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #2 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #3 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #4 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #5 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4>Session 2</h4>
                                                <span className="text-muted">13:00 - 15:00</span>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #6 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #7 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot bg-primary text-white"> #8 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #9 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #10 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4>Session 3</h4>
                                                <span className="text-muted">15:00 - 17:00</span>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #11 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #12 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #13 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #14 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #15 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                 <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4>Session 1</h4>
                                                <span className="text-muted">09:00 - 11:00</span>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #1 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #2 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #3 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #4 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #5 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <div className="card card-default">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center justify-content-between mb-3">
                                                <h4>Session 2</h4>
                                                <span className="text-muted">13:00 - 15:00</span>
                                            </div>
                                            <div>
                                                <div className="row">
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #6 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot filled"> #7 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot bg-primary text-white"> #8 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #9 </div>
                                                    </div>
                                                    <div className="col-4 mb-4">
                                                        <div className="slot"> #10 </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    ) : (
                        <div>
                            Loading...
                        </div>
                    )}
        </>
    )
}

export default SpotDetailList;