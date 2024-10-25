import { useSelector } from "react-redux";
import Desk from "../Desk";
import { DesksWrapper } from "./styles";
import { useState, useEffect } from "react";

function DesksContainer() {
    const [desks, setDesks] = useState([]);
    const users = useSelector(state => state.users);

    useEffect(() => {
        const newDesks = []
        for (let i = 0; i < 20; i++) {
            newDesks.push({
                id: i,
                variation: 0,
                userId: null
            })
        }
        setDesks(newDesks);
    }, []);

    useEffect(() => {
        console.log(users)
        setDesks((oldDesks) => {
            const newDesks = [...oldDesks];
            return newDesks.map(desk => {
                const user = users?.find((user) => user?.desk == desk.id);
                return ({
                    ...desk,
                    userId: user?.id,
                })
            })
        })
    }, [users]);

    useEffect(() => {
        console.log(desks)
    }, [desks]);

    return (
        <DesksWrapper>
            {desks.map(({ id, userId }) => (
                <Desk key={id} userId={userId} />
            ))}
        </DesksWrapper>
    );
}

export default DesksContainer;