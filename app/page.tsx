import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import FullPageSlider from "./components/Slide/FullPageSlider";

export default function Home() {
  return (
    <div>
      <ErrorBoundary>
        <FullPageSlider />
      </ErrorBoundary>
    </div>
  );
}
