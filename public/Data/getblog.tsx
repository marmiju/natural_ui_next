

export default async function getblog(id: string) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!result.ok) throw new Error(`Failed to get blog Data for ${id}`)
    return result.json()
}
