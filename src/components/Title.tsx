interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className="font-medium text-3xl text-white">
      {title}
    </div>
  );
}