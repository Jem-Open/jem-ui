import "../app/globals.css";

export const parameters = {
  controls: { expanded: true },
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ["Overview", "Design Tokens", "Atoms", "*"],
    },
  },
  backgrounds: {
    default: "light grey",
    values: [
      { name: "light grey", value: "#f5f5f5" },
      { name: "white", value: "#ffffff" },
      { name: "dark", value: "#333333" },
    ],
  },
};
