async function fetchData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products")
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data", error)
    throw error
  }
}

async function fetchCategory(category: string) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    )
    if (!response.ok) {
      throw new Error("Failed to fetch data")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching data", error)
    throw error
  }
}

export { fetchData, fetchCategory }
