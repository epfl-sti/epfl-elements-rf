import type { StoryObj } from "@storybook/react-vite";
import { Search, SearchMobile } from "../components/Search";

const meta = {
  title: "Molecules/Search",
  tags: ["docsPage"],
};

export default meta;

/** Classic desktop search: dropdown with search form (visible from xl breakpoint) */
export const Classic: StoryObj<typeof Search> = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minHeight: '60px' }}>
      <Search {...args} />
    </div>
  ),
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    submitLabel: "Submit",
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

export const ClassicCustomLabels: StoryObj<typeof Search> = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minHeight: '60px' }}>
      <Search {...args} />
    </div>
  ),
  args: {
    placeholder: "Search the site",
    label: "Search",
    submitLabel: "Go",
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/** Mobile search: form with toggle and close (visible below xl breakpoint) */
export const Mobile: StoryObj<typeof SearchMobile> = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minHeight: '60px' }}>
      <SearchMobile {...args} />
    </div>
  ),
  args: {
    action: "#",
    placeholder: "Search",
    label: "Search the site",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form",
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    },
    onToggle: (open: boolean) => {
      // Toggle handler
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};

export const MobileCustomLabels: StoryObj<typeof SearchMobile> = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', minHeight: '60px' }}>
      <SearchMobile {...args} />
    </div>
  ),
  args: {
    placeholder: "Search",
    toggleLabel: "Show / hide search form",
    closeLabel: "Hide search form",
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile',
    },
  },
};
