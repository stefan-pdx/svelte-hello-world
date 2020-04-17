import svelte from "rollup-plugin-svelte";
import resolve from "@rollup/plugin-node-resolve";

export default {
    input: "index.js",
    output: {
        file: "public/build.js",
        format: "es"
    },
    plugins: [
        svelte(),
        resolve()
    ]
}