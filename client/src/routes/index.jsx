import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Join from "../pages/Join";
import { useSelector } from 'react-redux';
import Classroom from '../pages/Classroom'

const Private = ({ Item, canJoin }) => {
    return canJoin ? <Item /> : <Join />
}

function RoutesApp() {
    const isConnected = useSelector(state => state?.auth?.isConnected)

    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/classroom" element={<Private Item={Classroom} canJoin={isConnected} />} />
                    <Route path="/" element={<Join />} />
                    <Route path="*" element={<Join />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;