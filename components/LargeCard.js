import Image from "next/image";

const LargeCard = ({ img, title, textButton, description }) => {
  return (
    <section className="relative  cursor-pointer my-16 ">
      <div className="relative h-96 min-w[300px] ">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
        ;
      </div>
      <div className="absolute left-12 top-16">
        <h3 className="text-4xl mb-3 w-64">{title}</h3>
        <p className="">{description}</p>
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {textButton}
        </button>
      </div>
    </section>
  );
};

export default LargeCard;
