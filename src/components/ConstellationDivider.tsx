const ConstellationDivider = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`w-full py-2 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
      </div>
    </div>
  );
};

export default ConstellationDivider;
