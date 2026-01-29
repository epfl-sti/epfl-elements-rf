import type { StoryObj } from "@storybook/react-vite";
import { Search, SearchMobile } from "../components/Search";

const meta = {
  title: "Molecules/Search",
  tags: ["docsPage"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

/** Classic desktop search: dropdown with search form (visible from xl breakpoint) */
export const Classic: StoryObj<typeof Search> = {
  render: (args) => <Search {...args} />,
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    submitLabel: "Submit",
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Search submitted");
    },
  },
};

export const ClassicCustomLabels: StoryObj<typeof Search> = {
  render: (args) => <Search {...args} />,
  args: {
    placeholder: "Search the site",
    label: "Search",
    submitLabel: "Go",
  },
};

/** Mobile search: form with toggle and close (visible below xl breakpoint) */
export const Mobile: StoryObj<typeof SearchMobile> = {
  render: (args) => <SearchMobile {...args} />,
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form",
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Mobile search submitted");
    },
    onToggle: (open: boolean) => {
      console.log("Mobile search", open ? "opened" : "closed");
    },
  },
};

export const MobileCustomLabels: StoryObj<typeof SearchMobile> = {
  render: (args) => <SearchMobile {...args} />,
  args: {
    placeholder: "Search",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form",
  },
};
