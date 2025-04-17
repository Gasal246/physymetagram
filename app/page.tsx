import InstaSheet from "@/components/shared/InstaSheet";
import { Button } from "@/components/ui/button";
import { Avatar } from "antd";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col bg-gradient-to-b from-slate-800 to-slate-950">
      <div className="bg-slate-900 rounded py-2 px-5 w-full flex justify-between items-center">
        <Avatar src="/images/tony.jpg" size={30} />
        <h1 className="text-neutral-300 font-semibold">Janna Qita (Zalu)</h1>
      </div>
      <div className="w-full justify-center items-center flex flex-col">
        <h1 className="text-2xl font-black mb-2 text-center text-neutral-400 mt-5">New Video Uploaded</h1>
        <h2 className="text-lg font-semibold mb-8 text-center text-neutral-400 ">Hey, Guys Chekout Our New Page, <br /><span className="text-orange-800">Uploaded New Video In Instagram</span> </h2>
        <div className="mb-5  ">
          <InstaSheet>
          <Image width={300} height={250} alt="thumbnail" src="/images/thumbnail.jpg" className="rounded-lg shadow-xl shadow-[#1f1f1f82]" />
          </InstaSheet>
        </div>
        <div className="mb-5">
          <InstaSheet>
          <Image width={300} height={250} alt="thumbnail" src="/images/thumbnail2.jpg" className="rounded-lg shadow-xl shadow-[#1f1f1f82]" />
          </InstaSheet>
        </div>
        <h1 className="text-neutral-400 mb-3">don&apos;t miss any videos, subscribe!</h1>
          <InstaSheet>
            <Button variant="outline" color="pink" className="cursor-pointer border-pink-600 text-pink-700 mb-2">Watch Instagram</Button>
          </InstaSheet>
          <InstaSheet>
            <Button variant="outline" color="pink" className="cursor-pointer border-pink-600 text-pink-700">More Videos </Button>
          </InstaSheet>
      </div>
    </div>
  );
}
