import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";
import progress from "rollup-plugin-progress";

export default {
  input: `index.js`,
  output: {
    name: "DatartGeo",
    file: `dist/index.min.js`,
    format: "umd",
  },
  plugins: [
    progress({
      clearLine: false,
    }),
    json(),
    terser(),
  ],
  watch: {
    include: "**/**",
  },
};
