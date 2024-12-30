import {
  Button,
  Spacer,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Spacer y={20} />

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 md:px-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            VoBo System
          </h1>
          <h3 className="text-primary text-xl md:text-2xl mt-2 md:mt-4">
            Smart Parking Violation Management
          </h3>
          <p className="mt-4 text-gray-600">
            Effortlessly report, monitor, and analyze parking violations with
            advanced AI tools. Optimize urban parking systems with semantic and
            sentiment analysis.
          </p>
          <Button size="lg" className="mt-6">
            Learn More
          </Button>
        </div>

        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <Card className="p-8 bg-blue-100">
            <CardBody>
              <img
                src="https://via.placeholder.com/300x200" // Replace with actual system-related illustration
                alt="VoBo system illustration"
                className="w-full rounded-lg"
              />
            </CardBody>
          </Card>
        </div>
      </div>

      <Spacer y={3} />

      {/* Features Section */}
      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-8">
        <div className="w-full sm:w-1/3">
          <Card isHoverable>
            <CardBody>
              <h4 className="text-xl font-semibold">AI-Powered Reporting</h4>
              <p>
                Seamless reporting of parking violations using intelligent
                algorithms.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="w-full sm:w-1/3">
          <Card isHoverable>
            <CardBody>
              <h4 className="text-xl font-semibold">Analytics Dashboard</h4>
              <p>
                Visualize data insights and patterns for better parking
                management.
              </p>
            </CardBody>
          </Card>
        </div>
        <div className="w-full sm:w-1/3">
          <Card isHoverable>
            <CardBody>
              <h4 className="text-xl font-semibold">Sentiment Analysis</h4>
              <p>
                Gauge user satisfaction with built-in sentiment analysis tools.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>

      <Spacer y={2} />

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-100 px-4 md:px-8">
        <p className="text-sm">
          © {new Date().getFullYear()} VoBo System. All Rights Reserved.
        </p>
        <div className="mt-2">
          <Button auto flat size="sm" as="a" to="#" className="mr-2">
            Facebook
          </Button>
          <Button auto flat size="sm" as="a" to="#" className="mr-2">
            Twitter
          </Button>
          <Button auto flat size="sm" as="a" to="#">
            LinkedIn
          </Button>
        </div>
      </footer>
    </>
  );
}