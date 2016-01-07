module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome', 'firefox']
    }
  },

  suites: ['test/rangepicker-fixture.html','test/fixtests.html']
};
