"use client"

import { useEffect, useRef, useState } from "react";

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <PopularArtits />
      <TopSongs />
      <PlayBar />
    </main>
  );
}


function Header() {
  return (
    <nav
      className="flex items-center justify-between h-20 lg:h-[105px] border-b border-black bg-[#2D2D2D] px-4 lg:px-[46px] w-full"
    >
      <a
        className="text-xl lg:text-[36px] lg:leading-[42px] font-normal text-white"
        href="/"
      >
        <img alt="logo" src="imgs/logo.png" />
      </a>
      <div className="flex items-center gap-3 lg:gap-7"></div>
    </nav>
  )
}

function Hero() {
  return (
    <div
      className="flex flex-col items-center justify-center relative h-[600px] w-full bg-[url('/imgs/hero-banner.png')]"
    >
      <div
        className="flex flex-col items-center justify-center text-center gap-11 px-4"
      >
        <span
          className="text-black text-[40px] lg:text-[67.4px] lg:leading-[78.2px] tracking-[0.01em] mx-auto max-w-[786px]"
        >
          Lissen
          <span className="text-[#FF5014]">
            {" to your "}
          </span>
          Fav
          <br />
          Artits
        </span>
        <img alt="sound-cum" src="imgs/SoundCum.png" />
        <div className="flex gap-4">
          <img href="https://t.me/+kR-lwmz17qM1NDM5" src="./imgs/telegram.png" alt="" height={50} width={50} />
          <img href="" src="./imgs/pump.png" alt="" height={50} width={50} />
          <img href="https://x.com/CumOnTheSound" src="./imgs/x.png" alt="" height={50} width={50} />
        </div>
      </div>
    </div>
  )
}

function PopularArtits() {
  return (
    <div
      className="flex flex-col gap-12 lg:gap-[75px] px-4 lg:px-[43px] mt-12 w-full bg-white"
    >
      <div
        className="text-black text-xl lg:text-[36px] lg:leading-[42px] font-normal"
      >
        Popular Artits
      </div>
      <div className="grid lg:grid-cols-4 gap-[45px] items-start w-full">
        <a
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
          href="artists/1.html"
        ><img
            alt="artist-04"
            src="imgs/artist-01.png"
            className="object-cover w-full"
          /><span
            className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
          >Lil Solami</span
          ></a
        ><a
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
          href="artists/2.html"
        ><img
            alt="artist-04"
            src="imgs/artist-02.png"
            className="object-cover w-full"
          /><span
            className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
          >Lil Jeet</span
          ></a
        ><a
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
          href="artists/3.html"
        ><img
            alt="artist-04"
            src="imgs/artist-03.png"
            className="object-cover w-full"
          /><span
            className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
          >Young Chad</span
          ></a
        ><a
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
          href="artists/4.html"
        ><img
            alt="artist-04"
            src="imgs/artist-04.png"
            className="object-cover w-full"
          /><span
            className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
          >Dwake</span
          ></a
        >
      </div>
    </div>
  )
}

function TopSongs() {
  return (
    <div
      className="flex flex-col gap-16 lg:gap-24 px-4 lg:px-[50px] pt-14 pb-[400px] lg:pb-[200px] lg:py-24 w-full bg-white"
    >
      <div
        className="text-black text-xl lg:text-[36px] lg:leading-[42px] font-normal"
      >
        Top Songs
      </div>
      <div className="grid lg:grid-cols-4 gap-[45px] items-start w-full">
        <div
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
        >
          <div
            className="flex flex-col items-center justify-center w-full relative"
          >
            <img
              alt="artist-04"
              src="imgs/solami.png"
              className="object-cover w-full"
            />
            <div
              className="absolute bottom-[18px] cursor-pointer left-3"
            >
              <img
                alt="artist-05"
                src="imgs/play.png"
                className="w-full"
              />
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center gap-3"
          >
            <span
              className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
            >Solami Nation</span
            ><span
              className="text-[#A3A3A3] text-sm lg:text-base font-normal"
            ></span>
          </div>
        </div>
        <div
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
        >
          <div
            className="flex flex-col items-center justify-center w-full relative lock"
          >
            <img
              alt="artist-04"
              src="imgs/song03.png"
              className="object-cover w-full"
            />
            <div
              className="absolute inset-0 w-full flex items-center justify-center"
            >
              <img alt="lock" src="imgs/lock.png" />
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center gap-3"
          >
            <span
              className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
            ></span
            ><span
              className="text-[#A3A3A3] text-sm lg:text-base font-normal"
            ></span>
          </div>
        </div>
        <div
          className="col-span-1 flex flex-col gap-8 lg:gap-11 items-center justify-center relative w-full"
        >
          <div
            className="flex flex-col items-center justify-center w-full relative lock"
          >
            <img
              alt="artist-04"
              src="imgs/song04.png"
              className="object-cover w-full"
            />
            <div
              className="absolute inset-0 w-full flex items-center justify-center"
            >
              <img alt="lock" src="imgs/lock.png" />
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center justify-center gap-3"
          >
            <span
              className="text-black text-[18px] lg:text-[26px] lg:leading-[30px] font-normal"
            ></span
            ><span
              className="text-[#A3A3A3] text-sm lg:text-base font-normal"
            ></span>
          </div>
        </div>
      </div>
    </div>
  )
}

function PlayBar() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [audioTime, setAudioTime] = useState("0:00");
  const [playing, setPlaying] = useState(false)

  function toggle() {
    if (playing) {
      audioRef.current?.pause()
      setPlaying(false)
    } else {
      audioRef.current?.play()
      setPlaying(true)
    }
  }


  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current) {
        const minutes = Math.floor(audioRef.current.currentTime / 60);
        const seconds = Math.floor(audioRef.current.currentTime % 60);
        setAudioTime(`0${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [])

  return (
    <div
      className="flex flex-col fixed bottom-0 lg:flex-row py-5 gap-5 items-center justify-between lg:h-[105px] bg-[#E5E5E5] px-4 lg:px-[43px] w-full"
    >
      <div
        className="flex flex-col lg:flex-row items-center gap-9 flex-1 w-full"
      >
        <div className="flex items-center gap-6">
          <img alt="" src="imgs/previous.png" />
          <img
            alt="play"
            src={ playing ? "imgs/pause-icon.png" : "imgs/play-icon.png"}
            onClick={toggle}
            className="cursor-pointer"
          />
          <img alt="" src="imgs/next.png" />
          <img
            alt=""
            src="imgs/repeat.png"
          />
          <img alt="" src="imgs/replay.png" />
        </div>
        <div className="flex items-center gap-3.5 w-full lg:w-1/2">
          <span className="time current">{audioTime}</span>
          <input type="range" value="0" />
          <span className="time">01:16</span>
          <audio ref={audioRef} src="music/song.mp3" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img
          alt="img"
          src="imgs/solami.png"
          className="w-[51.52px] h-[51.52px]"
        />
        <span className="text-black text-[23px]">Solami Nation - Lil Solami, Yung Chad, Lil Jeet</span
        >
      </div>
    </div>
  )
}
