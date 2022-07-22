import Lottie from 'react-lottie';
import animationData from '../assets/cyclist-animation.json';

export function Loading() {
    const options = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-zinc-100">
            <div className="w-full max-w-[500px]">
                <Lottie
                    options={options}
                    isClickToPauseDisabled={true}
                    style={{ cursor: 'default' }}
                />
            </div>
            <p className="text-md font-medium tracking-wide">
                Loading...
            </p>
        </div>
    );
}