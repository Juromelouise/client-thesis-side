import {
  Avatar,
  Button,
  Card,
  CardBody,
  Input,
  Spacer,
  Textarea,
} from "@nextui-org/react";
import React from "react";

export default function Profile() {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#f3f4f6", minHeight: "100vh", marginTop:"43px"}}>
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Card>
          <CardBody> 
            {/* Profile Picture */}
            <div style={{ textAlign: "center", marginBottom: "1rem" }}>
              <Avatar
                src="https://i.pravatar.cc/150?img=3"
                size="xl"
                bordered
                color="primary"
              />
              <h1 style={{ marginTop: "0.5rem", fontSize: "1.5rem", fontWeight: "bold" }}>
                John Doe
              </h1>
              <p style={{ color: "gray", fontSize: "0.9rem" }}>johndoe@example.com</p>
            </div>

            <Spacer y={1.5} />

            {/* Editable Profile Info */}
            <div>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Edit Profile
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <Input
                  fullWidth
                  label="Name"
                  placeholder="Enter your name"
                  defaultValue="John Doe"
                />
                <Input
                  fullWidth
                  label="Email"
                  placeholder="Enter your email"
                  type="email"
                  defaultValue="johndoe@example.com"
                />
                <Textarea
                  fullWidth
                  label="About Me"
                  placeholder="Write a brief bio"
                  defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  rows={4}
                />
              </div>
            </div>

            <Spacer y={1.5} />

            {/* Action Buttons */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem" }}>
              <Button color="danger" variant="flat">
                Cancel
              </Button>
              <Button color="primary">Save Changes</Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
    // <></>
  );
}
