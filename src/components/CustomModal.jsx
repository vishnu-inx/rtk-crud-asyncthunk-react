import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
function CustomModal({ id, setShowPopup }) {

    const allusers = useSelector((state) => state.app.users);
    const singleUser = allusers.filter((ele) => ele.id === id);

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <button className="btn btn-primary mb-4" onClick={() => setShowPopup(false)}>Close</button>
                <h2>{singleUser[0].name}</h2>
                <h4>{singleUser[0].email}</h4>
                <h4>{singleUser[0].age}</h4>
                <p>{singleUser[0].gender}</p>
            </div>
        </div>
    )
}

export default CustomModal;