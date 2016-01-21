module.exports = {
  verbose: true,
  plugins: {
    local: {
      browsers: ['chrome','firefox']
    }
  },

  suites: ['test/fixtests','test/rangepicker-fixture.html']
};
