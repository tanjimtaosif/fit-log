import Container from "@/components/layout/Container";
import Hero from "@/features/home/components/Hero";
import LibrarySection from "@/features/home/components/LibrarySection";

export default function HomePage() {
  return (
    <main>
      <Container>
        {/* Hero Section Start */}
        <Hero />
        {/* Hero Section End */}

        {/* Library Section Start */}
        <LibrarySection />
        {/* Library Section End */}
      </Container>
    </main>
  );
}
