interface SkeletonPostCardProps {
  index: number;
}

function SkeletonPostCard({ index }: SkeletonPostCardProps) {
  return (
    <div 
      className="mb-4 p-4 border border-gray-200 dark:border-gray-800 rounded-md shadow-sm animate-pulse"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-red-200 dark:bg-red-900/30 rounded w-32 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      </div>
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-20"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-16"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
      </div>
    </div>
  );
}

function SkeletonHeader() {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b dark:border-red-900 animate-pulse">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-48 mx-auto mb-4"></div>
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-24 mx-auto"></div>
    </header>
  );
}

interface SkeletonLoaderProps {
  count?: number;
  showHeader?: boolean;
}

function SkeletonLoader({ count = 5, showHeader = true }: SkeletonLoaderProps) {
  return (
    <div className="w-full">
      {showHeader && <SkeletonHeader />}
      <div className="max-w-5xl mx-auto px-6">
        {Array.from({ length: count }).map((_, index) => (
          <SkeletonPostCard key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

export default SkeletonLoader;
