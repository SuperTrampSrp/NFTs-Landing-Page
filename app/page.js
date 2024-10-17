import Image from "next/image";

export default function Home() {
  return (
    <div className="text-slate-50 flex flex-col justify-between h-screen">
      <nav className="flex p-5 items-center pl-28 ">
        <div className="w-5/12 animate-jump-in animate-once animate-delay-[2800ms] animate-ease-in">
          <Image
            width={80}
            height={50}
            src='/logo.png'
          />
        </div>
        <div className="w-7/12 flex justify-around animate-fade-down animate-delay-[1800ms] animate-ease-in">
          <ul className="flex justify-between gap-5 font-bold items-center">
            <li className="hover:text-red-600">Top Artists</li>
            <li className="hover:text-red-600">Marketpalce</li>
            <li className="hover:text-red-600">Collection</li>
            <li className="hover:text-red-600">About Us</li>
          </ul>
          <button className="bg-gradient-to-r from-red-600 to-red-300 font-bold px-5 py-2 border border-none rounded-sm">Get Started</button>
        </div>
      </nav>
      <main className="flex px-28">
        <div className="flex flex-col w-6/12 animate-fade-right animate-ease-in">
          <div>
            <h1 className="font-bold text-7xl">Discover, <span className="bg-gradient-to-r from-red-600 to-red-300 text-transparent bg-clip-text"> Collect</span>, and sell <span className="bg-gradient-to-r from-red-600 to-red-300 text-transparent bg-clip-text">Extraordinary</span>  NFTs</h1>
            <p className="font-bold mt-10 text-xl">A marketplace  that has popular  artist from all  around </p>
          </div>
          <div className="flex gap-5 mt-10">
            <button className="bg-gradient-to-r from-red-600 to-red-300 font-bold text-slate-50 px-5 py-2 border border-red-600 rounded-sm">Explore Now</button>
            <button className="px-5 text-red-600 border-2 border-red-600 rounded-sm">Collect Wallet</button>
          </div>
        </div>
        <div className="relative flex ">
          <Image
            width={280}
            height={50}
            src='/hero.png'
            className="bg-transparent animate-jump-in animate-delay-700 animate-ease-in-out animate-duration-500"
          />
          <div className="flex h-20 bg-slate-50 p-5 absolute gap-10 justify-around bg-opacity-20 top-96 left-28 border border-none rounded-lg text-white animate-flip-down animate-delay-1000 animate-ease-in">
            <div className="flex flex-col min-w-28 justify-center items-center font-bold">
              <span className="text-slate-400">Current Bid</span>
              <span>$5.56</span>
            </div>
            <div className="flex flex-col min-w-28 justify-center items-center font-bold">
              <span className="text-slate-400">Upcoming Bid</span>
              <span>$7.26</span>
            </div>
            <button className="bg-gradient-to-r from-red-600 to-red-300 font-bold text-slate-50 px-5 py-2 border border-red-600 rounded-sm w-28">Bid Now</button>
          </div>

        </div>
      </main>
      <footer className="px-28 items-end bottom-0 float-end py-5 flex gap-10 pb-10 animate-fade-right animate-delay-[1500ms] animate-ease-in">
        <div className="flex flex-col gap-2">
          <span className="text-xl font-bold">1526K</span>
          <p>Users</p>
        </div>
        <div className="flex flex-col gap-2 border-l-4 pl-7">
          <span className="text-xl font-bold">326K</span>
          <p>Artworks</p>
        </div>
        <div className="flex flex-col gap-2 border-l-4 pl-7">
          <span className="text-xl font-bold">316K</span>
          <p>Artists</p>
        </div>
      </footer>
    </div>
  );
}
