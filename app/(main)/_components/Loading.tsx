import Image from "next/image";
import React from "react";

import loadingAnimation from "@/public/gifs/loading.gif";
import { LoadingProps } from "@/types";

function Loading({ loading }: LoadingProps) {
    return (
        <>
            {loading && (
                <div className="flex justify-center items-center my-5">
                    <Image
                        src={loadingAnimation}
                        width={50}
                        height={50}
                        alt="loading..."
                    />
                </div>
            )}
        </>
    );
}

export default Loading;
