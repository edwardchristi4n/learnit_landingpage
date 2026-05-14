import { useTypingEffect } from "../utils/hooks";

export default function TypingLine({ text, startDelay = 0, speed = 30 }) {
  const displayed = useTypingEffect(text, startDelay, speed);

  return (
    <p className="text-cyan-300 break-words min-h-[28px]">
      <span className="text-gray-500 mr-2">$</span>
      {displayed}
      <span className="inline-block w-[8px] ml-1 animate-pulse text-cyan-200">
        |
      </span>
    </p>
  );
}
