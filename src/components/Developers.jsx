import RoudraImg from "../assets/roudra.jpg";
import YouSufImg from "../assets/yousuf.jpg";

const developers = [
  {
    name: "MD Yousuf",
    title: "Founder",
    image: YouSufImg,
  },
  {
    name: "Roudra Sarker",
    title: "Developer",
    image: RoudraImg,
  },
];

const Developers = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="text-3xl w-full text-center text-bw underline underline-offset-8 mb-8">
        Developers
      </div>
      <div className="cards flex w-full justify-between px-36 py-12">
        {developers.map((developer) => (
          <div className="card flex flex-row justify-center items-center gap-4">
            <div className="head">
              <img
                className="w-32 rounded-[50%] border-4 border-blue-500"
                src={developer.image}
              />
            </div>
            <div className="body">
              <div className="text-bw">{developer.name}</div>
              <div className="text-bw">{developer.title}</div>
            </div>
            <div className="end"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
