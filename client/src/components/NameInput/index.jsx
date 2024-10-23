import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUsername } from "../../store/reducers/authReducer";

function NameInput() {
    const [name, setName] = useState('');
    const dispatch = useDispatch();

    const onChange = (e) => {
        const value = e.target.value || "";
        setName(value);
        dispatch(setUsername(value));
    }

    return (
        <>
            <h3>Name:</h3>
            <input value={name} onChange={onChange} type="text" />
        </>
    );
}

export default NameInput;