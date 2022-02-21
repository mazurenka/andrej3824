import React from "react";
import Preloader from "../components/common/Preloader/preloader";

export const withSuspense = (Component: React.ComponentType) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}







