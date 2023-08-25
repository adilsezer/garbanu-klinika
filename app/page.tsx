import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import IntentionalErrorComponent from "./components/ErrorBoundary/IntentionalErrorComponent";
import FullPageSlider from "./components/Slide/FullPageSlider";

export default function Home() {
  return (
    <div>
      <ErrorBoundary>
        <IntentionalErrorComponent />
        <FullPageSlider />
      </ErrorBoundary>
    </div>
  );
}
