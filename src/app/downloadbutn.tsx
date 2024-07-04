import { list } from '@vercel/blob';
export default async function  DownloadButton() {
  const response = await list();
  
  return (    
  <>
    {response.blobs.map((blob) => (
      <a key={blob.pathname} href={blob.downloadUrl}>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-44">
        {blob.pathname}
      </button> 
      </a>
    ))}
  </>
  );
}
