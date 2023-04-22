export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '4a4155375fmsh12321b51b702564p1c468fjsnf2bc8a3141c9' //process.env.REACT_APP_RAPID_API_KEY
    },
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4a4155375fmsh12321b51b702564p1c468fjsnf2bc8a3141c9' /*process.env.REACT_APP_RAPID_API_KEY */ ,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };