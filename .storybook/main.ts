import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        docs: true,
      },
    },
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-styling-webpack",
  ],

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  staticDirs: ["..\\public"],

  docs: {
    autodocs: true,
  },

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
};
export default config;
