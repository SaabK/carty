import React, { useEffect, useState } from "react";

interface Dimension {
    width: number | undefined;
}

function useDimension() {
    const [dimension, setDimension] = useState<Dimension>({
        width: undefined,
    });

    function handleResize() {
        setDimension({
            width: window.innerWidth,
        });
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return dimension;
}

export default useDimension;
