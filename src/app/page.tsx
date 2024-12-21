"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent, useEffect } from "react";
import { IconCopy, IconVolume } from "@tabler/icons-react";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import TextArea from "@/components/Inputs/TextArea";
import { IconLanguage } from "@tabler/icons-react";
import SvgDecorations from "@/components/SvgDecorations";

type Language = "amharic" | "oromo" | "tigrigna" | "gamootho";
interface Translation {
  amharic: string;
  oromo: string;
  tigrigna: string;
  gamootho: string;
  audio: {
    amharic: string;
    oromo: string;
    tigrigna: string;
    gamootho: string;
  };
}

const Home: React.FC = () => {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [copied, setCopied] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [language, setLanguage] = useState<Language>("oromo");

  useEffect(() => {
    const fetchTranslations = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/translations");
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error("Error fetching translations:", error);
      }
    };
    fetchTranslations();
  }, []);

  const translate = () => {
    const translation = translations.find((t) => t.amharic === input);
    if (translation) {
      setOutput(translation[language]);
    } else {
      setOutput("Translation not found!");
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleAudioPlayback = (language: Language) => {
    const translation = translations.find((t) => t[language]);
    if (translation) {
      const audioPath = translation.audio[language];
      const audio = new Audio(audioPath);
      audio.play();
    }
  };

  return (
    <div className="w-full bg-black bg-dot-white/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-neutral-200">
              ኢትዮ<span className="text-[#f87315]">ትርጉም</span>
            </h1>
            <p className="mt-3 text-neutral-400">
              ኢትዮትርጉም፡ ድምፆችን አገናኝ ፣ ቋንቋዎችን መማሪያ።
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="source-language"
                    value={input}
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setInput(e.target.value)}
                    placeholder="የአማርኛ ቃል ያስገቡ"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent setSourceText={setInput} />
                      <IconVolume
                        size={22}
                        onClick={() => handleAudioPlayback("amharic")}
                      />
                      <button
                        onClick={translate}
                        className="px-2 py-1 bg-orange-500 rounded-full hover:bg-orange-400"
                      >
                        ይተርጉሙ
                      </button>
                    </span>
                    <span className="text-sm pr-4">{input.length} / 2000</span>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col space-x-3 p-3 border rounded-lg shadow-lg bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                  <TextArea
                    id="target-language"
                    value={output}
                    onChange={() => {}}
                    placeholder="ትርጉም"
                  />
                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex items-center space-x-2 flex-row">
                      <span className="cursor-pointer rounded-full space-x-1 pl-2 bg-[#000000] flex items-center flex-row">
                        <IconLanguage size={20} />
                        <select
                          value={language}
                          onChange={(e) =>
                            setLanguage(e.target.value as Language)
                          }
                          className="bg-[#000000] flex flex-row rounded-full py-1 text-white"
                        >
                          <option value="oromo">Oromo</option>
                          <option value="tigrigna">Tigrigna</option>
                          <option value="gamootho">Gamootho</option>
                        </select>
                      </span>
                      <IconVolume
                        size={22}
                        onClick={() => handleAudioPlayback(language)}
                      />
                    </span>
                    <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                      <IconCopy size={22} onClick={handleCopyToClipboard} />
                      {copied && (
                        <span className="text-xs text-green-500">Copied!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <SvgDecorations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
