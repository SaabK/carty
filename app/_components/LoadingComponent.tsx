"use client";

import { adjustProgress } from "@/lib/features/loading/loadingSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React from "react";
import LoadingBar from "react-top-loading-bar";

function LoadingComponent() {
    const { progress } = useAppSelector((state) => state.loading);
    const dispatch = useAppDispatch();

    return (
        <LoadingBar
            color="#f11946"
            progress={progress}
            onLoaderFinished={() => dispatch(adjustProgress(0))}
        />
    );
}

export default LoadingComponent;
