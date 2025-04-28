interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="font-semibold text-2xl md:text-3xl color-dark-red">
      {title}
    </div>
  );
}