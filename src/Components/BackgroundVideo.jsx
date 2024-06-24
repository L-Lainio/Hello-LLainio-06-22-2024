// Correctly defining the VideoBackground component
const BackgroundVideo = () => {
    return (
        <video className="h-full w-full rounded-lg" autoPlay>
            <source src="../assets/vecteezy_technology-wave-connect_4827538.mp4" type="video/mp4" />
        </video>
    );
};

export default BackgroundVideo;
