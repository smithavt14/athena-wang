const SpotifyPlayer = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-10 px-48 py-4 opacity-90">
            <iframe 
            src="https://open.spotify.com/embed/track/47BBI51FKFwOMlIiX6m8ya?utm_source=generator&theme=0"  
            height="152"
            width="100%"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
            </iframe>
        </div>
    );
};

export default SpotifyPlayer;

