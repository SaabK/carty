import { ImagesProps } from "@/types";
import Image from "next/image";
import React from "react";

import { Carousel } from "react-responsive-carousel";

function Images({ images }: ImagesProps) {
    return (
        <div className="md:-mb-12">
            <Carousel
                showStatus={false}
                renderThumbs={() =>
                    images.map((image, index) => (
                        <Image
                            src={image}
                            alt="Product"
                            key={index}
                            width={70}
                            height={30}
                        />
                    ))
                }
                // showThumbs={false}
            >
                {images.map((image, index) => (
                    <div className="w-full h-72 md:h-96 relative" key={index}>
                        <Image
                            src={image}
                            alt="Product"
                            // height={384}
                            // width={500}
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
