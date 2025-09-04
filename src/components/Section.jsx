export default function Section({ id, title, className = "", children }) {
  return (
    <section
      id={id}
      className={`min-h-screen scroll-mt-24 flex items-center py-16 ${className}`}
    >
      <div className="container mx-auto px-4 md:px-8">
        {title && (
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
