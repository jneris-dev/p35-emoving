import Lottie from "lottie-react";
import animationData from '../assets/cyclist-animation.json';

export function Loading() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-100">
            <div className="w-full max-w-[500px]">
                <Lottie
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ cursor: 'default' }}
                />
            </div>
            <p className="text-md font-medium tracking-wide">
                Loading...
            </p>
        </div>
    );
}