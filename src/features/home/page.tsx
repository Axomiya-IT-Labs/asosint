import { Hero } from "./sections/hero";
import { TrustStrip } from "./sections/trust-strip";

// import your future sections here
// import { Categories } from "./sections/categories";
// import { FeaturedTools } from "./sections/featured-tools";
// import { LearningPaths } from "./sections/learning-paths";
// import { DigitalSafety } from "./sections/digital-safety";
// import { Community } from "./sections/community";

import { HighlightBar } from "@/features/highlight/components/highlight-bar";

export function HomePage() {
  return (
    <>
      <Hero />

      <TrustStrip />

      {/* Future homepage sections */}

      {/* <Categories /> */}
      {/* <FeaturedTools /> */}
      {/* <LearningPaths /> */}
      {/* <DigitalSafety /> */}
      {/* <Community /> */}

      {/* Final Safety Reminder */}
      <HighlightBar />
    </>
  );
}