export default function SectionHeader({ tag, title }) {
  return (
    <div className="section-header mb-10 w-full">
      <h2 className="section-title text-foreground leading-none">
        <span className="section-number">{tag}</span>
        {title}
      </h2>
    </div>
  );
}
