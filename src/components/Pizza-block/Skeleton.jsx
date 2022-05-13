import React from "react"
import ContentLoader from "react-content-loader"

function Skeleton() {
    return (
        <ContentLoader
            speed={10}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="4" y="281" rx="6" ry="6" width="266" height="25" />
            <rect x="-3" y="336" rx="6" ry="6" width="285" height="71" />
            <rect x="4" y="420" rx="6" ry="6" width="82" height="27" />
            <rect x="181" y="421" rx="6" ry="6" width="99" height="25" />
            <circle cx="138" cy="128" r="126" />
        </ContentLoader>
    );
}

export default Skeleton;
