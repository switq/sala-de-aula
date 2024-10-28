import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../store/reducers/authReducer";

function NameInput() {
    const username = useSelector(state => state.auth?.username);
    const [name, setName] = useState(username || '');
    const dispatch = useDispatch();


    const onChange = (e) => {
        const value = e.target.value || "";
        setName(value);
        dispatch(setUsername(value));
    }

    return (
        <div>
            <h3>Name:</h3>
            <input
                className="h-4 p-3  bg-white text-gray-800 placeholder-gray-400 font-pixel text-sm border-4 border-gray-300  outline-none shadow-[4px_4px_0px_#D1D5DB] focus:shadow-[2px_2px_0px_#9CA3AF] transition-shadow"
                value={name}
                onChange={onChange}
                type="text" />
        </div>
    );
}

export default memo(NameInput);