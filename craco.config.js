const CracoAntDesignPlugin = require("craco-antd");
const path = require("path");

module.exports = {
  context: path.join(__dirname, "src"),
  entry:{
    index:'index.js',
    main:{
      dependOn:'index',
      import:'./main.js'
    }
  },
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#1DA57A",
        },
      },
    },
  ],
};
