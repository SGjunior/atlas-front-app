export const FetchAtlasData = () => {
  // floatType === 'OPEN' || floatType === 'CLOSE'
  // return fetch(`http://localhost:3005/api/v1/data`, {
  return fetch(`https://mapatlas.herokuapp.com/api/v1/data`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
    }
  }).then(response => response.json())
  .then(data => {
    console.log("Received Data from the server");
    console.log(data)
    if (data.error) {
      return false;
    } else {
      return data;
    }
  });
}
