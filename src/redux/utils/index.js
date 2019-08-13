import axios from "axios"

export async function fetchLocations() {
  const data = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  .then(res => {
    const persons = res.data;
    this.setState({ persons });
  })
}