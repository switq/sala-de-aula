import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharacters, setDesks } from "../store/reducers/assetsReducer";
import loadCharacters from "../assets/character-sprites";
import loadDesks from "../assets/furniture-sprites/desks";

function AssetsProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const loadAssets = async () => {
        setIsLoading(true);
        const [
            characters,
            desks
        ] = await Promise.all([
            loadCharacters(),
            loadDesks(),
        ])

        dispatch(setCharacters(characters));
        dispatch(setDesks(desks));

        setIsLoading(false);
    }

    useEffect(() => {
        loadAssets();
    }, []);

    if (isLoading) return <div>Loading</div>
    return (children);
}

export default AssetsProvider;