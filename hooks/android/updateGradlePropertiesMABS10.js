var fs = require('fs-extra');
var path = require('path');

module.exports = function(context) {
    var settingsGradlePath = path.join(context.opts.projectRoot, 'platforms/android/gradle.properties');
    var settingsContent = fs.readFileSync(settingsGradlePath, 'utf8');
    if (!settingsContent.includes('android.enableJetifier=true')) {
        fs.appendFileSync(settingsGradlePath, '\nandroid.enableJetifier=true');
        console.log('✅ --- Updated gradle.properties with success');
    } else {
        console.log('❌ -- Error to update the gradle.properties');
    }
};