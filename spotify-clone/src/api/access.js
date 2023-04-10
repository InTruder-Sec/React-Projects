const CLIENT_ID = "fcbded662beb4c43b6a56f7a7f5ea1d9";
const CLIENT_SECRET = "6fe0d82f44284068b2c057daec29e2cb";
const ENDPOINT = "https://accounts.spotify.com/api/token";

async function GetToken() {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
  });
  const accessToken = await response.json();
  return accessToken;
}

async function GetCategories(TOKEN) {
  const response = await fetch(
    "https://api.spotify.com/v1/browse/categories?country=IN&limit=3",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const Category = await response.json();
  return Category;
}

async function GetCategorySongs(TOKEN, categoryID, limit) {
  const response = await fetch(
    "https://api.spotify.com/v1/browse/categories/" +
      categoryID +
      "/playlists?limit=" +
      limit,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    }
  );
  const Category = await response.json();
  return Category;
}

async function GetPLaylist(playlistId, token) {
  const url = "https://api.spotify.com/v1/playlists/" + playlistId;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const playlist = await response.json();
  return playlist;
}

async function SearchQuery(query, limit, token) {
  const url = `https://api.spotify.com/v1/search?type=album,artist,playlist,track,show,episode&q=${encodeURIComponent(
    query
  )}&limit=${encodeURIComponent(limit)}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const result = await response.json();
  return result;
}

export default GetToken;
export { GetCategories, GetCategorySongs, GetPLaylist, SearchQuery };
