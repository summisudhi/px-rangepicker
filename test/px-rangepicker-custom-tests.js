// This is the wrapper for custom tests, called upon web components ready state
function runCustomTests() {
  // Place any setup steps like variable declaration and initialization here

  // This is the placeholder suite to place custom tests in
  // Use testCase(options) for a more convenient setup of the test cases
  suite('Custom Automation Tests for px-rangepicker', function() {
    /*
    var timeValue;
    var rangeFieldsToTime = document.querySelector('#rangeFields #toTime input');
    testCase({
      description: 'Clicking Cancel reverts changes in the range fields initiated from modal range picker',
      root: '#rangepickerModal',
      eventSource: '#submitButton',
      event: 'click',
      modifyFunction:
        function(rootElement){
          timeValue = rangeFieldsToTime.value; // save the old value
          // modify the value before the click event is dispatched
          var modalToTime = document.querySelector('#rangepickerModal #toTime');
          modalToTime.value = '10:07:00 PM';
          var toTime = document.querySelector('#rangeFields #toTime input');
          // modalToTime.dispatchEvent(new Event('change'));
          alert(toTime.value + ' ******* ' + modalToTime.value);
        },
      assertFunction:
        function(rootElement){
          var toTime = document.querySelector('#rangeFields #toTime input');
          alert(toTime.value + '********' + timeValue);
          return toTime.value === timeValue;
        }
    });
    */
    test('Clicking Cancel reverts changes in the range fields initiated from modal range picker',
      function(done){
        var timeValue = document.querySelector('#rangeFields #toTime input').value;
        var thisDone = done;
        var cancelButton = document.querySelector('#rangepickerModal #cancelButton');
        var rangeFieldsToTime = document.querySelector('#rangeFields #toTime input');
        var rangepickerModalToTime = document.querySelector('#rangepickerModal #toTime input');

        cancelButton.addEventListener('click', function() {
          assert.equal(timeValue, rangeFieldsToTime.value);
          thisDone();
        })
        rangepickerModalToTime.addEventListener('change', function(){
          cancelButton.dispatchEvent(new Event('click'));
        });
        rangeFieldsToTime.addEventListener('click', function(){
          rangepickerModalToTime.value = '10:07:00 PM';
          rangepickerModalToTime.dispatchEvent(new Event('change'));
        });

        rangeFieldsToTime.dispatchEvent(new Event('click'));
      }
    );
  });
};
