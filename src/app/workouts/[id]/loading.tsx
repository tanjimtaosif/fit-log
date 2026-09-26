import Spinner from "@/components/ui/Spinner";

export default function WorkoutDetailsLoading() {
  return (
    <main className="flex flex-1 items-center justify-center py-32">
      <Spinner label="Loading workout…" />
    </main>
  );
}
