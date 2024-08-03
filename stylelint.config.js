module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-prettier/recommended",
    "stylelint-config-recommended-scss",
  ],
  plugins: ["stylelint-scss"],
  rules: {
    "font-family-name-quotes": null,
    "selector-class-pattern": null,
  },
};
