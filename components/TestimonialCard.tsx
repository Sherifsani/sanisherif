
const TestimonialCard = ({
  text,
  img,
  name,
  location,
}: {
  text: string;
  img: string;
  name: string;
  location: string;
}) => {
  return (
    <div className="bg-white p-6 flex flex-col gap-[100px]">
      <p className="text-2xl">{text}</p>
      <div className="pro flex items-center gap-4">
        <img
          src={img}
          alt="/"
          className="w-[50px] h-[50px] object-cover rounded-full"
        />
        <p className="flex flex-col ">
          <span>{name}</span>
          <span>{location}</span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
