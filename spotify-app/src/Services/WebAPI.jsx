export default async function getSavedALbums() {
  const token = await getToken();
  const response = await fetch(
    "https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc",
    {
      method: `GET`,
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  if (!response.ok) throw new Error("Bir Hata Oluştu: " + response.status);
  const data = await response.json();
  console.log(data);
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
  console.log(data);
  return data.access_token;
}
