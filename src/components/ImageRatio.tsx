import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import { clsx } from "clsx";
import Image from "next/image";
import React, { FC, Fragment } from "react";

interface AspectRatioProps {
    name: string
    src: any
    src2?: any
    size?: string
}

const AspectRatio: FC<AspectRatioProps> = ({name, src, src2, size}) => {
    return (
        <Fragment>
        <AspectRatioPrimitive.Root
            ratio={16 / 9}
            className={`group relative h-full ${ size ? size : 'w-full'} overflow-hidden rounded-lg shadow-md`}
        >
            <div className="absolute inset-0 z-10 flex items-center justify-center">
            <h3 className="select-none bg-gradient-to-b from-main to-[#A178B9] bg-clip-text text-3xl font-black uppercase text-transparent duration-300 ease-in-out group-hover:opacity-0 sm:text-4xl">
                {name}
            </h3>
            </div>
            <div
            className={clsx(
                `${src2 ? 'flex' : ''}`,
                "absolute inset-0 bg-gray-600 object-cover group-hover:bg-gray-500",
                "transition-colors duration-300 ease-in-out"
            )}
            >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {name === "AirBnb" ?
            <>
                <Image
                src={src}
                alt="Vancouver by Matt Wang"
                className={`h-full w-3/6 mix-blend-overlay`}
                />
                <Image
                src={src2}
                alt="Vancouver by Matt Wang"
                className={`h-full w-3/6 mix-blend-overlay`}
            />
            </>
            :
            <Image
                src={src}
                alt="Vancouver by Matt Wang"
                className={`h-full w-full mix-blend-overlay`}
            />
            }
            </div>
        </AspectRatioPrimitive.Root>
        </Fragment>
    );
};

export { AspectRatio };