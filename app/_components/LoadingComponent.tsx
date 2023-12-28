"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

function LoadingComponent() {
    const [progress, setProgress] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        setProgress((prev) => prev + 30);

        const time = setTimeout(() => {
            setProgress(100);
        }, 1000);

        return () => clearTimeout(time);
    }, [pathname]);

    return (
        <LoadingBar
            color="#f11946"
            progress={progress}
            waitingTime={400}
            onLoaderFinished={() => setProgress(0)}
        />
    );
}

export default LoadingComponent;
