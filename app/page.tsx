import Image from "next/image";

export default function Home() {
  return (
    <div className="flex gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="border rounded-md bg-amber-400">
          No. {i}
        </div>
      ))}
    </div>
  );
}
