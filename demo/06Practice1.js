module.exports = {
    'Can I enter a value into a textbox' : browser => {
      browser
        .url('https://www.phptravels.net/register')
        // we need to wait for the web page to load in the browser before we test anything
        .waitForElementVisible('body')
        .setValue('input[name=firstname]', 'test1')
        .setValue('input[name=lastname]', 'test2')
        .setValue('input[name=phone]', '5555555')
      
        // i am waiting for a fake element so that the browser will  not close for demo purposes
        .waitForElementVisible('sdfsdfdsf',99999);
    }
  };