const docs = [
  {
    title: "Open",
    description: "Opens a certatin file along with the project directory",
  },
  {
    title: "New",
    description: "Creates a new file in the project directory",
  },
  {
    title: "Folder",
    description: "Opens a certatin directory",
  },
  {
    title: "Run",
    description: "Runs the current open file if executable like python or c",
  },
  {
    title: "Send",
    description: "Write your query in input box and press send to get AI help",
  },
];

const Docs = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="text-3xl w-full text-center text-bw underline underline-offset-8 mb-8">
        Docs
      </div>
      <div className="cards flex flex-col w-full justify-between px-36 py-12 gap-8">
        {docs.map((doc) => (
          <div className="card flex flex-col justify-between">
            <div className="text-lg font-bold text-bw">{doc.title}</div>
            <div className="mt-2 text-base text-bw">{doc.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Docs;
