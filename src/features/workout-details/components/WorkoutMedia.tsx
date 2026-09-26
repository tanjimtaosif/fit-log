import Image from "next/image";

interface WorkoutMediaProps {
  image: string;
  name: string;
}

export default function WorkoutMedia({ image, name }: WorkoutMediaProps) {
  return (
    <div className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-xl bg-surface md:sticky md:top-8 md:max-h-none">
      <Image
        src={image}
        alt={name}
        fill
        priority
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
