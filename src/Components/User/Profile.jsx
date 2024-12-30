import {
  Avatar,
  Card,
  CardBody,
  Spacer,
} from "@nextui-org/react";
import React from "react";

export default function Profile() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="max-w-4xl mx-auto p-4">
        {/* Profile Header Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
          <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-center">
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                size="xl"
                bordered
                color="primary"
                className="mx-auto md:mx-0"
              />
              <div className="text-center md:text-left md:ml-4 mt-4 md:mt-0">
                <h1 className="text-2xl font-bold">John Doe</h1>
                <p className="text-gray-600">johndoe@example.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
          <div className="space-y-4">
            <Card isHoverable className="hover:shadow-xl transition-shadow duration-300">
              <CardBody>
                <h3 className="text-lg font-semibold">Post Title 1</h3>
                <p className="text-gray-600">This is a brief description of the post.</p>
              </CardBody>
            </Card>
            <Card isHoverable className="hover:shadow-xl transition-shadow duration-300">
              <CardBody>
                <h3 className="text-lg font-semibold">Post Title 2</h3>
                <p className="text-gray-600">This is a brief description of the post.</p>
              </CardBody>
            </Card>
            {/* Add more posts as needed */}
          </div>
        </div>

        {/* Recent Reports Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Reports</h2>
          <div className="space-y-4">
            <Card isHoverable className="hover:shadow-xl transition-shadow duration-300">
              <CardBody>
                <h3 className="text-lg font-semibold">Report Title 1</h3>
                <p className="text-gray-600">This is a brief description of the report.</p>
              </CardBody>
            </Card>
            <Card isHoverable className="hover:shadow-xl transition-shadow duration-300">
              <CardBody>
                <h3 className="text-lg font-semibold">Report Title 2</h3>
                <p className="text-gray-600">This is a brief description of the report.</p>
              </CardBody>
            </Card>
            {/* Add more reports as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}