// prettier.config.cjs
(async () => {
  const tailwindPlugin = await import("prettier-plugin-tailwindcss");

  module.exports = {
    plugins: [tailwindPlugin.default],
  };
})();
