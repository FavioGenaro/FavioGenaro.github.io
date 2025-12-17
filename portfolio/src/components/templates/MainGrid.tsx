
export default function MainGrid({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        min-h-screen
        grid grid-rows-[auto_1fr]
        background
      "
    >
      <main
        className="
          mx-auto w-full max-w-6xl
          px-4 sm:px-6 lg:px-8
          py-12
        "
      >
        {children}
      </main>
    </div>
  );
}
