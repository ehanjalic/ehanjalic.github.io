import { ShowsContextInterface } from "./ShowsContext";

const showsContext: ShowsContextInterface = {
    shows: [{ image: "https://upload.wikimedia.org/wikipedia/en/2/29/Movie_poster_for_%22Scary_Movie%22.jpg", name: "SCARY MOVIE",  video: "" },
    { image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Sonic_the_Hedgehog_poster.jpg", name: "SONICLINJEMA", video: "" },
    { image: "https://m.media-amazon.com/images/M/MV5BOTVhMzYxNjgtYzYwOC00MGIwLWJmZGEtMjgwMzgxMWUwNmRhXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_.jpg", name: "DORA",  video: "" },
    { image: "https://lumiere-a.akamaihd.net/v1/images/riseofskywalker-moviepage-emeagrid-m_a2600ffe.jpeg?region=0,0,800,600", name: "STAR WARS",  video: "" },
    { image: "https://static.toiimg.com/photo/73491567.jpeg", name: "TRANCE", video: "" }
  ]
}

function getShowsContext(){

    return showsContext;
}

export default getShowsContext