export default function SectionHead({ kicker, title, description }) {
  return (
    <div className="section-head">
      {kicker && <span className="mono">{kicker}</span>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
    </div>
  );
}
