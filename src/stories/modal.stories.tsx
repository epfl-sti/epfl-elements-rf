import type { StoryObj } from "@storybook/react";
import { Modal } from "../components/Modal/"

const meta = {
  title: "Organisms/Modal",
  component: Modal,
  tags: ["docsPage"],
};

export default meta;
type Story = StoryObj<typeof meta>;

let show = true;

function handleClose() {
  show = false;
}

export const Default: Story = {
    args: {
        title: "Modal Title",
        children: <span>...</span>,
        handleClose: handleClose,
      },
};
