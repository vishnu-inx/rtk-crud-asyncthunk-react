import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../features/userDetailSlice";

const Create = () => {
    const [users, setUsers] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(users));
        setUsers({});
        navigate("/read");
    };

    return (
        <div className="container w-50 text-center my-5">
            <h2 className="my-2 fw-lighter">Fill the data</h2>
            <form
                className="w-50 mx-auto my-3 bg-body shadow p-3 rounded"
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className="mb-3 d-flex justify-contet-start gap-2">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        onChange={getUserData}
                        required
                        role="button"
                    />
                    <label className="form-check-label">Male</label>

                    <input
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        onChange={getUserData}
                        role="button"
                    />
                    <label className="form-check-label">Female</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;