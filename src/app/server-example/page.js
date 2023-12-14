export default async function Page() {
  const noWIsoString = new Date().toLocaleString();
  return (
    <div>
      <h1>Server Example</h1>
      <p>{noWIsoString}</p>{" "}
    </div>
  );
}
