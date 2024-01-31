import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchUser, deleteUser } from "../features/userDetailSlice";
import CustomModal from "./CustomModal";

function Read() {
    const dispatch = useDispatch();
    const [id, setId] = useState();
    const [radioData, setRadioData] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const { users, loading, searchData } = useSelector((state) => state.app);

    if (loading) {
        return <h2 className="mt-5">Loading</h2>;
    }

    const filteredUsers = users.filter((ele) => {
        const isNameMatch =
            searchData.length === 0 || ele.name.toLowerCase().includes(searchData.toLowerCase());

        const isGenderMatch =
            radioData === "" || ele.gender === radioData;

        return isNameMatch && isGenderMatch;
    });

    const resetFilters = () => {
        setRadioData("");
        dispatch(searchUser(""));
    };

    return (
        <div className="my-5">
            {showPopup && <CustomModal id={id} showPopup={showPopup} setShowPopup={setShowPopup} />}

            <h2 className="fw-lighter">All Users</h2>

            {/* Radio buttons */}
            <div className="radioButtons d-flex justify-content-center gap-2">
                {["", "Male", "Female"].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            className="form-check-input"
                            name="gender"
                            checked={radioData === value}
                            value={value}
                            type="radio"
                            onChange={() => setRadioData(value)}
                            role="button"
                        />
                        <label className="form-check-label" style={{ marginTop: "2px" }}>
                            {value === "" ? "All" : value}
                        </label>
                    </React.Fragment>
                ))}
            </div>

            {/* Users card */}
            <div>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((ele) => (
                        <div key={ele.id} className="card mx-auto my-2 rounded-3">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.email}</h6>
                                <p className="card-text">{ele.gender}</p>
                                <button
                                    className="card-link btn btn-primary w-25"
                                    onClick={() => [setId(ele.id), setShowPopup(true)]}
                                >
                                    View
                                </button>
                                <Link to={`/edit/${ele.id}`} className="card-link btn btn-success w-25">
                                    Edit
                                </Link>
                                <button
                                    className="card-link btn btn-danger w-25"
                                    onClick={() => dispatch(deleteUser(ele.id))}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="card mx-auto my-2 py-5 rounded-3">
                        <div className="d-flex justify-content-center align-items-baseline gap-3">
                            <p className="card-text">Search result not found!</p>
                            <Link className="card-link btn btn-danger w-25" onClick={resetFilters}>
                                Back
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Read;
