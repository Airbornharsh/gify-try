import { useState } from "react";
import "./App.css";

function App() {
  const [gif, setGif] = useState("");
  const [search, setSearch] = useState("");

  const generateGif = () => {
    fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=tVCCUOZgUH4mMMLLJDje8pWGQGbfJ8LM&tag=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGif(data.data.embed_url);
      });
  };

  return (
    <div className="bg-blue-400 w-screen h-screen flex flex-col items-center gap-28">
      <div className="bg-white w-[80%] h-16 flex justify-center items-center font-bold text-[2rem] mt-16">
        Random Gifs
      </div>
      <div className="flex items-center flex-col gap-4">
        <div className="w-[50rem] h-[33rem] bg-white flex justify-center items-center">
          <iframe
            src={gif}
            className="giphy-embed w-[40rem] h-[28rem] object-cover"
          />
        </div>
        <div className="w-[50rem] bg-white h-36 flex flex-col items-center justify-center gap-4">
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="text"
            className="w-[80%] h-10 bg-slate-200 px-3"
          />
          <button
            className="bg-blue-700 text-white w-[80%] h-10"
            onClick={generateGif}
          >
            Generate Gif
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
