interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    message && (
      <section className="hero is-danger">
        <div className="hero-body">
          <p className="title">{message}</p>
        </div>
      </section>
    )
  );
}
