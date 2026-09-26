import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import WorkoutActions from "@/features/workout-details/components/WorkoutActions";
import WorkoutInstructions from "@/features/workout-details/components/WorkoutInstructions";
import WorkoutMedia from "@/features/workout-details/components/WorkoutMedia";
import WorkoutOverview from "@/features/workout-details/components/WorkoutOverview";
import WorkoutSpecs from "@/features/workout-details/components/WorkoutSpecs";
import { getWorkoutById } from "@/services/workout.service";

export async function generateMetadata({ params }: PageProps<"/workouts/[id]">): Promise<Metadata> {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) return { title: "Workout not found" };

  return { title: workout.name, description: workout.description };
}

export default async function WorkoutDetailsPage({ params }: PageProps<"/workouts/[id]">) {
  const { id } = await params;
  const workout = await getWorkoutById(id);

  if (!workout) notFound();

  return (
    <main>
      <Container className="py-10 lg:py-12">
        {/* Workout Details Section Start */}
        <section className="grid items-start gap-10 md:grid-cols-2 md:gap-8 lg:gap-14">
          <WorkoutMedia image={workout.image} name={workout.name} />

          <div>
            <WorkoutOverview
              name={workout.name}
              description={workout.description}
              muscleGroups={workout.muscleGroups}
            />
            <WorkoutSpecs workout={workout} />
            <WorkoutInstructions instructions={workout.instructions} />
            <WorkoutActions workout={workout} />
          </div>
        </section>
        {/* Workout Details Section End */}
      </Container>
    </main>
  );
}
