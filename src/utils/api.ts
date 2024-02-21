async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.error("Error fetching data", error)
    throw error
  }
}

export { fetchData }
