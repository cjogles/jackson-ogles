export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center">
      <div className="inline-block text-center justify-center">
        {children}
      </div>
    </section>
  );
}
