export default function SectionCard({ title, subtitle, cards, CardComponent }) {
  console.log(cards);
  console.log(CardComponent);

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 mt-4">{title}</h2>
      <h3 className="text-xl mb-4 mt-4">{subtitle}</h3>
      <div
        className={`${
          title === "الشواحن الاعلى أداء"
            ? "grid grid-cols-3 gap-4 overflow-x-auto"
            : "grid grid-cols-4 gap-4 overflow-x-auto"
        }`}
      >
        {cards.map((card, index) => (
          <CardComponent key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
