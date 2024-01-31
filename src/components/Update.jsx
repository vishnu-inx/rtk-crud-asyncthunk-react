import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../features/userDetailSlice";

function Update() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateData, setUpdateData] = useState();

    const { users } = useSelector((state) => state.app);

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            setUpdateData(singleUser[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChangeUpdate = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/");
    };

    return (
        <div className="container w-50 text-center my-5">
            <h2 className="fw-lighter">Update User</h2>
            <form
                className="w-50 mx-auto mt-3 bg-body shadow p-3 rounded"
                onSubmit={handleUpdate}
            >
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={updateData && updateData.name}
                        onChange={handleChangeUpdate}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={updateData && updateData.email}
                        onChange={handleChangeUpdate}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        value={updateData && updateData.age}
                        onChange={handleChangeUpdate}
                    />
                </div>
                <div className="mb-3 d-flex justify-contet-start gap-2">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        type="radio"
                        checked={updateData && updateData.gender === "Male"}
                        onChange={handleChangeUpdate}
                    />
                    <label className="form-check-label">Male</label>

                    <input
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        type="radio"
                        checked={updateData && updateData.gender === "Female"}
                        onChange={handleChangeUpdate}
                    />
                    <label className="form-check-label">Female</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Update;