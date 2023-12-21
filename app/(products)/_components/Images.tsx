import { ImagesProps } from "@/types";
import Image from "next/image";
import React from "react";

import { Carousel } from "react-responsive-carousel";

function Images({ images }: ImagesProps) {
    return (
        <div>
            <Carousel showStatus={false} showThumbs={false}>
                {images.map((image) => (
                    <div className="w-full h-96 relative">
                        <Image
                            src={image}
                            alt="Product"
                            layout="fill"
                            className="object-cover"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Images;
