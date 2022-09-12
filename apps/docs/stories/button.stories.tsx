import { Button, ButtonProps } from "@acme/core/src";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
  argTypes: {
    colorScheme: {
      control: {
        type: "select",
        options: ["main", "women", "men", "familyCarer"],
        default: "main",
      },
    },
  },
  args: {
    withArrow: true,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/4MBsxhUMV7jh9nc2nFcf4R",
    },
  },
} as ComponentMeta<typeof Button>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  brand: "brand-2",
  label: "Button",
};
