
export default function MainGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        min-h-screen
        md:grid md:grid-rows-[auto_1fr]
        block
        background
      "
    >
      <main
        className="
          md:grid md:grid-rows-[auto_1fr]
          block
        "
      >
        {children}
      </main>
    </div>
  );
}
