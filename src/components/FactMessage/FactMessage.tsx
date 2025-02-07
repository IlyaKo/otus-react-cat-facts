interface FactMessageProps {
  message: string;
}

export default function FactMessage({ message }: FactMessageProps) {
  return (
    <section className="hero is-halfheight is-info">
      <div className="hero-body">
        <p className="title">{message}</p>
      </div>
    </section>
  );
}
