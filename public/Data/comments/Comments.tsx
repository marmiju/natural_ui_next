export default async function getComments() {
    const result = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10')
    return result.json()

}