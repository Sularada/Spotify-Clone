import Input from "./Input";

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
