import React from "react";
import { Link } from "react-router-dom";
import formattedDate from "../utils";

function VaccinationItem({
  firstDose,
  secondDose,
}) {
  return (
    <>
      {!firstDose ? (
        <>
          <div className="col-md-4">
            <div className="card card-default">
              <div className="card-header border-0">
                <h5 className="mb-0">First Vaccination</h5>
              </div>
              <div className="card-body">
                <Link to="/register-vaccination">
                  + Register vaccination
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
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
                      <td className="text-muted">
                        <span className="badge badge-info">
                          {firstDose.status}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th>Date</th>
                      <td className="text-muted">
                        {firstDose.vaccination_date
                          ? formattedDate(firstDose.vaccination_date)
                          : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>Spot</th>
                      <td className="text-muted">
                        {firstDose.spot.name ? firstDose.spot.name : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>Vaccine</th>
                      <td className="text-muted">
                        {firstDose.vaccine.name ? firstDose.vaccine.name : "-"}
                      </td>
                    </tr>
                    <tr>
                      <th>Vaccinator</th>
                      <td className="text-muted">
                        {firstDose.vaccinator.name
                          ? firstDose.vaccinator.name
                          : "-"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {firstDose.status === "done" && !secondDose.dose ? (
            <>
              <div className="col-md-4">
                <div className="card card-default">
                  <div className="card-header border-0">
                    <h5 className="mb-0">Second Vaccination</h5>
                  </div>
                  <div className="card-body">
                    <Link to="/register-vaccination">
                      + Register vaccination
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
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
                          <td className="text-muted">
                            <span className="badge badge-info">{secondDose.status ? secondDose.status : '-'}</span>
                          </td>
                        </tr>
                        <tr>
                          <th>Date</th>
                          <td className="text-muted">{secondDose.vaccination_date ? formattedDate(secondDose.vaccination_date) : '-'}</td>
                        </tr>
                        <tr>
                          <th>Spot</th>
                          <td className="text-muted">{secondDose.spot.name ? secondDose.spot.name : '-'}</td>
                        </tr>
                        <tr>
                          <th>Vaccine</th>
                          <td className="text-muted">{secondDose.vaccine.name ? secondDose.vaccine.name : '-'}</td>
                        </tr>
                        <tr>
                          <th>Vaccinator</th>
                          <td className="text-muted">{secondDose.vaccinator.name ? secondDose.vaccinator.name : '-'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default VaccinationItem;
