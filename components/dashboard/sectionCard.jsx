import Card from "./Card";
export default function SectionCard({ title, cards }) {
  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 mt-4">{title}</h2>
      <div className="grid grid-cols-4 gap-4 overflow-x-auto">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            value={card.value}
          />
        ))}
      </div>
    </div>
  )}