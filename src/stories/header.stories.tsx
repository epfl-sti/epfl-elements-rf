import type { StoryObj } from "@storybook/react-vite";
import { Star } from "react-bootstrap-icons";
import { Header } from "../components/Header";
const meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["docsPage"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.args = {
  topMenuItems: [
    { link: "https://www.epfl.ch/about/", anchor: "About" },
    { link: "https://www.epfl.ch/education", anchor: "Education" },
    { link: "https://www.epfl.ch/research", anchor: "Research" },
    { link: "https://www.epfl.ch/innovation/", anchor: "Innovation" },
    { link: "https://www.epfl.ch/schools/", anchor: "Schools", active: true },
    { link: "https://www.epfl.ch/campus/", anchor: "Campus" },
  ],
  drawerContents: {
    link: "https://www.epfl.ch",
    anchor: "Go to main site",
  },
  user: {
    firstName: "Juan",
    lastName: "Convers",
    sciper: "00000",
    photoUrl: "https://avatars.githubusercontent.com/u/12231812",
  },
  logoutUrl: "https://tequila.epfl.ch/logout",
  avatarMenuItems: [{
    icon: <Star />,
    label: "Test item",
    link: "",
    onClick: () => { alert("Clicked") }
  }],
};

export const LoggedOutLogo: Story = {};
LoggedOutLogo.args = {
  topMenuItems: [
    { link: "https://www.epfl.ch/about/", anchor: "About" },
    { link: "https://www.epfl.ch/education", anchor: "Education" },
    { link: "https://www.epfl.ch/research", anchor: "Research" },
    { link: "https://www.epfl.ch/innovation/", anchor: "Innovation" },
    { link: "https://www.epfl.ch/schools/", anchor: "Schools", active: true },
    { link: "https://www.epfl.ch/campus/", anchor: "Campus" },
  ],
  drawerContents: {
    link: "https://www.epfl.ch",
    anchor: "Go to main site",
  },

  logoutUrl: "https://tequila.epfl.ch/logout",
  avatarMenuItems: [],
  loginAction: () => { alert("Login action clicked") },
};
