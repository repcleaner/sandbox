module.exports = {
    apps : [
        {
            name: "app-dev",
            script: "yarn",
            args: "dev",
            interpreter: '/bin/bash',
            env: {
                NODE_ENV: 'development'
            }
        },
        {
            name: "app-prod",
            interpreter: '/bin/bash',
            script: "yarn",
            args: "start",
            env: {
                NODE_ENV: 'production'
            }
        }
    ]
};

//yarn run build && pm2 start ecosystem.config.js --only app-prod