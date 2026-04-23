export default function Loading() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4 animate-pulse">
          O
        </div>
        <div className="flex gap-1 justify-center">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0ms]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:150ms]" />
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}
