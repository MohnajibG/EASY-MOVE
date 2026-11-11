import { Component, type ErrorInfo, type ReactNode } from "react";
import StatusPage from "../pages/StatusPage";

type Props = { children: ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <StatusPage variant="error" />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
