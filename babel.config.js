module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    ["import", { "libraryName": "antd-mobile", "style": true }], // `style: true` for less
    ["styled-components", { "ssr": true }]
  ]
}