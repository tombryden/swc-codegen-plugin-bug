import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // config: { namingConvention: "change-case-all#upperCaseFirst" },
  overwrite: true,
  schema: "https://spacex-production.up.railway.app/",
  documents: "src/**/*.tsx",
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
