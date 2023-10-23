import axios from "axios";
import lodash from "lodash";

const url: string = "http://localhost:2255";

export const copyToRight = async (data: any) => {
  try {
    return axios.post(`${url}/data`, data);
  } catch (error) {
    console.log(error);
  }
};

export const copyToRead = async () => {
  try {
    return axios.get(`${url}/reading`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

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
    // localStorage.setItem("youtubeVideoss", JSON.stringify(response.data));

    // (async function (response) {
    //   if (lodash.some(copyToRead(), copyToRight(response))) {

    //   } else {
    //     copyToRead();
    //   }
    // })();

    const responseData = await axios.request(options);

    let dataSearched = `${search}`;

    const response = {
      data: {
        [dataSearched]: responseData.data.items,
      },
    };

    console.log("done!", responseData.data.items);

    copyToRight(response);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
