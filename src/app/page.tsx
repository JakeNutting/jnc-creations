import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { Navbar } from "./_components/navbar";
import { Button } from "@/components/ui/button";
import { Coffee, Shirt, Sticker } from "lucide-react";

export default async function Home() {
  const hello = await api.post.hello.query({ text: "from tRPC" });

  return (
    <>
     <Navbar></Navbar>
     <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 py-20">
      <div className="mx-auto max-w-screen-xl px-2 xl:px-0">
        <h1 className="text-3xl font-semibold text-dark md:text-center">Custom designs made specifically for <span className="font-bold text-cyan-600">you</span></h1>
        <p className="text-lg font-normal mt-1 flex md:justify-center">View our gallery and contact us to get started.</p>
        <div className="flex md:justify-center">
        <Button variant={"default"} className="mt-3 flex justify-center">Contact Us</Button>
        </div>
        <h4 className="text-lg mt-20 font-semibold mb-3">What we do</h4>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="shadow-lg bg-white p-3 rounded-xl">
              <div className="flex justify-center">
                  <Shirt size={64} className="text-gray-400"></Shirt>
              </div>
              <div className="flex justify-center">
                  <h4 className="text-xl font-semibold mt-2">Clothing / Attire</h4>
              </div>
              <h4 className="mt-4 font-semibold text-center text-sm text-gray-500">Elevate your style with bespoke apparel: Where personal flair meets professionally pressed images and art, transforming garments into unique statements.</h4>
          </div>
          <div className="shadow-lg bg-white p-3 rounded-xl">
              <div className="flex justify-center">
                  <Coffee size={64} className="text-gray-400"></Coffee>
              </div>
              <div className="flex justify-center">
                  <h4 className="text-xl font-semibold mt-2">Tableware / Drinkware</h4>
              </div>
              <h4 className="mt-4 font-semibold text-center text-sm text-gray-500">Elevate your dining experience with our custom tableware and drinkware: Where personal style meets professionally crafted designs, turning ordinary settings into unique expressions of taste and sophistication.</h4>
          </div>
          <div className="shadow-lg bg-white p-3 rounded-xl">
              <div className="flex justify-center">
                  <Sticker size={64} className="text-gray-400"></Sticker>
              </div>
              <div className="flex justify-center">
                  <h4 className="text-xl font-semibold mt-2">Stickers / Notepads</h4>
              </div>
              <h4 className="mt-4 font-semibold text-center text-sm text-gray-500">Personalize your world with custom stickers and notepads—express yourself effortlessly.</h4>

          </div>
        </div>
       
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
