import SkeletonLoader from "@/components/SkletonLoading";

export default function Loading() {
  return (
    <div className="min-h-screen">
      <SkeletonLoader count={5} showHeader={true} />
    </div>
  );
}
