module.exports = {
<<<<<<< HEAD
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    },
    sauce: {
             "disabled" : false,
             "browsers": [
=======
    verbose: true,
    plugins: {
        local: {
            browsers: ['chrome', 'firefox']
        },
        sauce: {
          disabled: false,
          "browsers": [
          
          {
          "browserName": "internet explorer",
          "platform": "Windows 7",
          "version": "10"
        },
        {
          "browserName": "chrome",
          "platform": "Windows 10",
          "version": "44"
        },
         {
          "browserName": "microsoftedge",
          "platform": "Windows 10"
>>>>>>> utc-hotfix
         
         {
          "browserName": "safari",
          "platform": "OS X 10.10",
          "version": "8"
        },
         
        
         {
          "browserName": "chrome",
          "platform": "OS X 10.11",
          "version": "48"
        }
             
           
<<<<<<< HEAD

=======
        {
          "browserName": "safari",
          "platform": "OS X 10.11",
          "version": "9"
        },
             
         {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad Retina",
          "deviceOrientation": "portrait"
          
        },
        
        {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad 2",
          "deviceOrientation": "portrait"
          
        },
        {
          "browserName": "iphone",
          "platform": "OS X 10.10",
          "version": "9.2",
          "deviceName": "iPad 2",
          "deviceOrientation": "portrait"
          
        }
>>>>>>> utc-hotfix
        
      ]
        }
    }
};
