import { shallow } from "enzyme";
import React from "react";
import CardList from "./CardList";

it("expect to render Card Component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John Snow",
      username: "JohnJohn",
      email: "john@gmail.com"
    }
  ];
  const cardComponent = shallow(<CardList robots={mockRobots} />);
  expect(cardComponent.debug()).toMatchSnapshot();
});
