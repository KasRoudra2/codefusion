import React from "react";
import WindowsImg from "../assets/windows.svg";
import LinuxImg from "../assets/linux.svg";
import MacOSImg from "../assets/macos.svg";
import DropButton from "./DropButton";

const downloads = [
  {
    os: "Windows",
    image: WindowsImg,
    arch: [
      // {
      //   name: "32 Bit",
      //   url: "",
      // },
      {
        name: "64 Bit",
        url: "https://github.com/M-YOUSUF-M/CodeFusion-Editor/releases/latest/download/codefusion-windows.exe",
      },
    ],
  },
  {
    os: "Linux",
    image: LinuxImg,
    arch: [
      // {
      //   name: "arm(e.g. rpi)",
      //   url: "",
      // },
      // {
      //   name: "arm64",
      //   url: "",
      // },
      // {
      //   name: "amd",
      //   url: "",
      // },
      {
        name: "amd64",
        url: "https://github.com/M-YOUSUF-M/CodeFusion-Editor/releases/latest/download/codefusion-linux",
      },
    ],
  },
  {
    os: "MacOS",
    image: MacOSImg,
    arch: [
      // {
      //   name: "arm64(Silicon)",
      //   url: "",
      // },
      {
        name: "amd64(Intel)",
        url: "",
      },
    ],
  },
];

const Download = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="text-3xl w-full text-center text-bw underline underline-offset-8 mb-8">
        Downloads
      </div>
      <div className="cards flex w-full justify-between px-36 py-12">
        {downloads.map((download) => (
          <div  key={download.os} className="card flex flex-col justify-center items-center gap-4">
            <div className="head">
              <img className="w-24" src={download.image} />
            </div>
            <div className="body">
              <div className="text-bw">{download.os}</div>
              <DropButton text="Download" options={download.arch}></DropButton>
            </div>
            <div className="end"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Download;
