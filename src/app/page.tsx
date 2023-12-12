import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { Navbar } from "./_components/navbar";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
     <Navbar></Navbar>
     <div className="bg-gray-200 py-20">
      <div className="mx-auto max-w-screen-xl px-2 xl:px-0">
          <h1 className="text-3xl font-semibold">Custom designs made specifically for you</h1>
          <p className="text-lg font-normal mt-1">View our gallery and contact us to get started.</p>
          <button className="bg-blue-700 rounded-md p-2 text-white mt-4">Contact Us</button>
      </div>

     </div>
    </>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
