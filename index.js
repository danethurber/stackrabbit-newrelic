var co = require('co')
var newrelic = require('newrelic')

module.exports = function(name, group) {
  group = group || 'rabbit:listener'

  return function * () {
    newrelic.createBackgroundTransaction(
      name,
      group,
      co.wrap(function * (next) {
        try {
          yield next
        } catch(err) {
          newrelic.noticeError(err)
          this.onError(err)
        } finally {
          newrelic.endTransaction()
        }
      }.bind(this))
    ).apply(this, arguments)
  }
}
