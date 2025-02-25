import Input from "./input";

const meta = {
  component: Input,
};

export default meta;

export const Default = {
  title: `Text Input`,
  component: Input,
  parameters: {
    layout: `centered`,
  },

  args: {
    onchange: () => {
      console.log("changed");
    },
  },
};
