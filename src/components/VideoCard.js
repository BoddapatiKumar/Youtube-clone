const VideoCard = ({ info }) => {
    if (!info) {
        console.error("info is undefined or null");
        return null;
    }

    // Destructure snippet and statistics safely
    const {
        snippet = {},
        statistics = {},
    } = info;

    const {
        title = "No Title",
        thumbnails = {},
        channelTitle = "Unknown Channel",
    } = snippet;

    const { medium = {} } = thumbnails;

    return (
        <div className="m-2 p-2 w-72 shadow-lg rounded-lg">
            <img className="rounded-lg" src={medium.url || "default-thumbnail.jpg"} alt="thumbnail" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount/1000 || "No Views"}K views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
