import GooeyNav from "../gooey-nav";

// update with your own items
const items = [
  { label: "Bio", href: "#" },
  { label: "Experience", href: "#" },
];

export default function AboutNav() {
  return (
    <div style={{ height: "600px", position: "relative" }}>
      <GooeyNav
        items={items}
        animationTime={500}
        particleCount={12}
        particleDistances={[90, 10]}
        particleR={150}
        timeVariance={300}
        colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        initialActiveIndex={0}
      />
    </div>
  );
}
