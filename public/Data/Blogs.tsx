export default async function blogsData() {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    return result.json()

}