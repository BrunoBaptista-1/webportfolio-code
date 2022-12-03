import React from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BackButton() {
    return (
        <div className="backButton">
            <Link to=".." relative="path" className="backArrow">
                <ArrowBackIcon fontSize="large" />
            </Link>
        </div>
    );
}

export default BackButton;