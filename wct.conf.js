module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    },
    sauce: {
             "disabled" : false,
             "browsers": [
         
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
             
           

        
        
      ]
             
           
            
            
        }
    }
};


