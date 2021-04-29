const { config } = require("./wdio.conf");
const path = require("path");

const chromeConfig = {
    ...config,
    services: ["chromedriver"],
    capabilities: [
        {
            maxInstances: 1,
            browserName: "chrome",
        },
    ],
};

exports.config = chromeConfig;
