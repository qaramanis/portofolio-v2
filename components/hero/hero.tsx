import React, { useState } from "react";

interface Word {
  text: string;
  fancy?: boolean; // Adding a property to mark "fancy" words
}

interface Line {
  words: Word[];
}

interface TextData {
  lines: Line[];
}

interface TextDisplayProps {
  data?: TextData;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ data }) => {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const displayData = data || {
    lines: [
      {
        words: [{ text: "A", fancy: false }, { text: "Person" }],
      },
      {
        words: [{ text: "YouTube", fancy: true }, { text: "&" }],
      },
      {
        words: [{ text: "CodePen", fancy: true }],
      },
      {
        words: [{ text: "@qaramanis", fancy: true }],
      },
    ],
  };

  return (
    <div id="text" className="group z-10 p-4 bg-gray-800 rounded-lg">
      {displayData.lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex justify-between gap-4 text-white"
          onMouseEnter={() => setHoveredLine(lineIndex)}
          onMouseLeave={() => setHoveredLine(null)}
        >
          {line.words.map((word, wordIndex) => (
            <p
              key={wordIndex}
              className={`text-xl m-0 p-0 transition-opacity duration-300 ${
                hoveredLine !== null && hoveredLine !== lineIndex
                  ? "opacity-20"
                  : "opacity-100"
              }`}
            >
              {word.text}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Hero() {
  return (
    <div className="hero-container p-8 max-w-3xl mx-auto">
      <TextDisplay />
    </div>
  );
}
