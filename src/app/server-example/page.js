export default async function Page() {
    const dateString = new Date().toLocaleString()

    return (
        <div>
            <h1>Server Example</h1>
            <p>{dateString}</p>{' '}
        </div>
    )
}
