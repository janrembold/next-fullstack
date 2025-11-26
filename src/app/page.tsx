export default async function Page() {
    const formattedTimestamp = new Date().toLocaleString()

    return (
        <div>
            <h1>TODO: Add something here</h1>
            <p>{formattedTimestamp}</p>
        </div>
    )
}
