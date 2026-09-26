import type { Metadata } from "next";

import Container from "@/components/layout/Container";
import MyPlanDashboard from "@/features/my-plan/components/MyPlanDashboard";

export const metadata: Metadata = {
  title: "My Plan",
  description: "Cap of five lifts for today. Finish them, then load more.",
};

export default function MyPlanPage() {
  return (
    <main>
      <Container className="py-10 lg:px-12 lg:py-12">
        {/* Page Header Section Start */}
        <header>
          <h1 className="font-display text-[32px] font-bold uppercase text-white">My Plan</h1>
          <p className="mt-1 text-sm text-muted">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </header>
        {/* Page Header Section End */}

        <MyPlanDashboard />
      </Container>
    </main>
  );
}
