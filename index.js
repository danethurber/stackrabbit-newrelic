var co = require('co')
var newrelic = require('newrelic')

module.exports = function(transactionName, groupName) {
  groupName = groupName || 'rabbit:listener'

  return newrelic.createBackgroundTransaction(
    transactionName,
    groupName,
    co.wrap(function * (next) {
      try {
        yield next
      } catch(err) {
        newrelic.noticeError(err)
        throw err
      } finally {
        newrelic.endTransaction()
      }
    })
  )
}
