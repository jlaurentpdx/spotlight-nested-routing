export default async function fetchHyrule() {
  const resp = await fetch('https://botw-compendium.herokuapp.com/api/v2');
  const data = await resp.json();
  console.log(data);

  return data;
}
