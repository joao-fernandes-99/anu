'use client';
import Image from "next/image";

const moveButton = (e: any) => {
  const marginX = Math.floor(Math.random() * 600);
  const marginY = Math.floor(Math.random() * 600);

  e.target.style.margin = marginY.toString() + "px " + marginX.toString() + "px";
};

const showMessage = (e: any) => {
  alert('Eu te amo ❤️ ❤️ ❤️ ❤️, seu amor, panzão ❤️')
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="mb-3 text-2xl font-semibold">Amor, rola um cuzinho? </h2>
      <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={showMessage}>
          Sim
        </button>
      <div className="inline-block">

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onMouseOver={moveButton}>
          Não
        </button>
      </div>
    </main>
  );
}
