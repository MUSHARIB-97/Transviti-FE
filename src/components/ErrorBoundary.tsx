import { Component, ErrorInfo, ReactNode } from "react";
import CustomButton from "./CustomButton";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(): Partial<State> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error caught by boundary:", error, errorInfo);
    this.setState({
      error,
      errorInfo,
    });
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
    window.location.href = "/";
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <main className="w-full h-screen flex flex-col items-center justify-center bg-[#F4F4F4] px-4">
          <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-text-black mb-2">
                Oops! Something went wrong
              </h1>
            </div>

            <p className="text-text-secondary text-base mb-6 leading-relaxed">
              We're sorry for the inconvenience. An unexpected error has
              occurred. Please try refreshing the page or return to the
              homepage.
            </p>

            <details className="mb-6 text-left bg-gray-50 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-sm text-gray-700 mb-2">
                Error Details (Development Only)
              </summary>
              <div className="text-xs text-red-600 font-mono overflow-auto max-h-40">
                <p className="mb-2">{this.state?.error?.toString()}</p>
                {this.state.errorInfo?.componentStack && (
                  <pre className="whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            </details>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <CustomButton
                title="Refresh Page"
                onClick={() => window.location.reload()}
                customStyles="w-full sm:w-auto"
              />
              <CustomButton
                title="Go to Homepage"
                onClick={this.handleReset}
                customStyles="w-full sm:w-auto"
              />
            </div>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
