import { FadeLoader } from "react-spinners"; 

const Loading = () => {
   const loadingColor = "#9F62F2";
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] min-h-screen text-center">
      <h1 className="text-7xl font-bold flex items-center gap-2 text-gray-800">
        L
        <FadeLoader color={loadingColor}
          size={30}/>
          ading<span className="text-[#9F62F2]">...</span>
      </h1>
      <p className="text-gray-500 mt-4 text-lg">
        Please wait, preparing your experience
      </p>
    </div>
  );
};

export default Loading;