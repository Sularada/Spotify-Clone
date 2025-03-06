export async function getSavedALbums() {
  const token = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/browse/categories/0JQ5DAt0tbjZptfcdMSKl3",
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();

  return data;
}
export async function getUsersPlaylists() {
  const token = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/users/smedjan/playlists",
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();

  return data;
}
export async function getCategories() {
  const token = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/browse/categories?limit=30",
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();

  return data;
}
export async function getPlaylistItems(id = "3cEYpjA9oz9GiPac4AsH4n") {
  const token = await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${id}/tracks?limit=5`,
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();

  return data;
}
export async function getCurrentlyPlayedLastMusic() {
  const token = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=1",
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();
  return data;
}
async function getToken() {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    body:
      "grant_type=client_credentials&client_id=" +
      import.meta.env.VITE_CLIENT_ID +
      "&client_secret=" +
      import.meta.env.VITE_CLIENT_SECRET,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = await response.json();

  return data.access_token;
}
