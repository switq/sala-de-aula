import { useEffect, useState } from "react";
import ConnectionProvider from "../../providers/ConnectionProvider";
import DesksContainer from "../../components/DesksContainer";

function Classroom() {
    const [desks, setdesks] = useState();
    useEffect(() => {

    }, []);

    return (
        <ConnectionProvider>
            <DesksContainer />
        </ConnectionProvider>
    );
}

export default Classroom;