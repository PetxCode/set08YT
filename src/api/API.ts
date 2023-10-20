import axios from "axios";

export const getVideos = async (search: string) => {
  const options = {
    method: "GET",
    url: "https://youtube-v31.p.rapidapi.com/search",
    params: {
      q: search,
      part: "snippet,id",
      regionCode: "NG",
      maxResults: "10",
      order: "date",
    },
    headers: {
      "X-RapidAPI-Key": "d43233c2camsh5531fe5cecde0fdp19920cjsnfa451c6cc4e7",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    localStorage.setItem("youtubeVideos", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
