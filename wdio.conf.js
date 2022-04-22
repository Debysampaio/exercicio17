require('dotenv').config()

const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'deborasampaio_3vXa0o',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'x7k1y7Sne5etsAdcWt4L',
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        project: "First Webdriverio Android Project",
        build: "browserstack-build-1",
        name: "local_test",
        device: "Samsung Galaxy S22 Ultra",
        os_version: "12.0",
        app: process.env.BROWSERSTACK_APP_ID || 'bs://d8b428c79d2c9423f679aaf1fd7c80340de099b8',
    'browserstack.local': false
    }],
    waitForTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
        [video, {
            saveAllVideos: true,      
            videoSlowdownMultiplier: 50,
          }]
    ],
    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(() => reject(reportError), 30000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        driver.takeScreenshot();
    }
}