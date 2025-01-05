import GitImg from "../assets/git.svg";
import { useClipBoard } from "../hooks/";
import NotifyButton from "./NotifyButton";

const GitClone = () => {
  const [text, copy] = useClipBoard();
  const gitUrl = "https://github.com/M-YOUSUF-M/CodeFusion-Editor/";
  return (
    <div className="cards flex flex-col w-full justify-center px-36 py-12">
      <div className="text-3xl text-center text-bw mb-8">
        Alternatively <span className="font-bold">git clone</span>
      </div>
      <div className="card flex flex-col justify-center items-center gap-4">
        <div className="head">
          <img className="w-24" src={GitImg} />
        </div>
        <div className="body">
          <input
            type="text"
            name="name"
            id="name"
            className="border-[#e5eaf2] border-b outline-none px-4 w-[26rem] py-3 focus:border-[#3B9DF8] transition-colors duration-300 mb-3 ml-6"
            value={gitUrl}
            disabled
          />

          <NotifyButton
            btn={"copy"}
            title={"Info"}
            text={"Copied successfully"}
            callback={() => copy(gitUrl)}
          ></NotifyButton>
        </div>
        <div className="end"></div>
      </div>
    </div>
  );
};

export default GitClone;
