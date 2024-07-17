import type { StoryObj } from "@storybook/react";
import { Avatar } from "../components/navigations/avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["docsPage"]
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
    user: {
      firstName: 'Juan',
      lastName: 'Convers',
      sciper: '00000',
      photoUrl: 'https://avatars.githubusercontent.com/u/12231812'
    },
    logOutUrl: 'https://tequila.epfl.ch/logout'
  }
}

export const CustomLogo: Story = {
  args: {
    user: {
      firstName: 'Juan',
      lastName: 'Convers',
      sciper: '00000',
      photoUrl: 'https://avatars.githubusercontent.com/u/12231812'
    },
    logOutUrl: 'https://tequila.epfl.ch/logout',
    logoUrl: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
    logoAltText: 'white space placeholder'
  }
}
