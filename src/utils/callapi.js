export default async function callApi(path, options = {}) {
  const data = await fetch(
    `https://social-media-mern-john.herokuapp.com/${path}`,
    options
  )
    .then((data) => data.json())
    .catch((data) => {
      console.log(data);
    });
  return data;
}
