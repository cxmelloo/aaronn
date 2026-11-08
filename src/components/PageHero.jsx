function PageHero({ title, desc }) {
  return (
    <div className="">
      <h1 className="font-bold font-syne text-white text-6xl md:text-7xl">{title}</h1>
      <p className="mt-4 font-medium text-[#949494] text-base mb-18">{desc}</p>
      <div className="border border-[#949494] mb-9"></div>
    </div>
  );
}

export default PageHero;