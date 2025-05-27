// ForestRainBackground.jsx
import React from "react";

export const ForestRainBackground = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden hidden dark:block">
            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/background.jpg')",
                }}
            ></div>


            {/* Optional dark overlay to improve text contrast */}
            <div className="absolute inset-0 bg-black/50" />
        </div>
    );
};
