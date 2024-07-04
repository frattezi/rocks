import DownloadButton from "./downloadbutn";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-center text-4xl font-bold">Rock Climb</h1>
      <DownloadButton />
    </main>
  );
}
