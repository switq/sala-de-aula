import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCharacters, setDesks, setEmojis } from "../store/reducers/assetsReducer";
import loadCharacters from "../assets/character-sprites";
import loadDesks from "../assets/furniture-sprites/desks";
import loadEmojis from "../assets/emojis-sprites";
import Loading from "../components/Loading";

function AssetsProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    const loadAssets = async () => {
        setIsLoading(true);
        const [
            characters,
            desks,
            emojis
        ] = await Promise.all([
            loadCharacters(),
            loadDesks(),
            loadEmojis()
        ])

        dispatch(setCharacters(characters));
        dispatch(setDesks(desks));
        dispatch(setEmojis(emojis));

        setIsLoading(false);
    }

    useEffect(() => {
        loadAssets();
    }, []);

    if (isLoading) return <Loading />
    return (children);
}

export default AssetsProvider;