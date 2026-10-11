/** @param {{number: string, label: string, children: import('react').ReactNode, description?: string}} props */
export default function SectionHeading({
  number,
  label,
  children,
  description,
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow section-label">
          <span className="accent">{number}</span>
          <span className="muted">/ {label}</span>
        </p>
        <h2>{children}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
