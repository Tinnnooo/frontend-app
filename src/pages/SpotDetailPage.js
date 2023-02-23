import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asyncGetSpotDetail } from "../states/spotDetail/action";
import useInput from "../hooks/useInput";
import SpotDetailList from "../components/SpotDetailList";
import { asyncAddRegisterVaccination } from "../states/vaccinations/action";

function SpotDetailPage(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const newDate = new Date();
    const formattedDate = newDate.toISOString().slice(0, 10);
    const [date, onDateChange] = useInput(formattedDate);
    const [spot_id] = id;

    const {
        spotDetail = [],
    } = useSelector((states) => states);

    useEffect(() => {
        dispatch(asyncGetSpotDetail(id, date));
    }, [id, date, dispatch]);

    const navigate = useNavigate();

    const registerButtonHandler = () => {
        dispatch(asyncAddRegisterVaccination({date, spot_id}));
        navigate('/');
    }

    return (
        <main>
            <header className="jumbotron">
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <h1 className="display-4">{spotDetail.spot ? spotDetail.spot.name : 'Loading...'}</h1>
                        <span className="text-muted">{spotDetail.spot ? spotDetail.spot.address : 'Loading...'}</span>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={registerButtonHandler}>Register vaccination</button>

                </div>
            </header>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="vaccination-date">Select vaccination date</label>
                            <input type="date" className="form-control" id="vaccination-date" value={date} onChange={onDateChange}/>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    
                    <SpotDetailList spotDetail={spotDetail} />

                </div>
            </div>

        </main>
    ) 
}

export default SpotDetailPage;