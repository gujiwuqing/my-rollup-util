import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

export default defineConfig([
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/bundle.cjs",
        format: "umd",
        name: "ToolBundle",
      },
      {
        file: "dist/bundle.mjs",
        format: "esm",
      },
    ],
    plugins: [typescript({ compilerOptions: { lib: ["esnext", "dom"] } })],
    watch: {
      exclude: "node_modules/**",
    },
  },
  {
    input: "./src/index.ts",
    output: [{ file: "dist/bundle.d.ts", format: "esm" }],
    plugins: [dts()],
  },
]);
