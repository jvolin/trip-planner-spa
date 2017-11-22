
module.exports = function() {

return fetch('/api')
  .then(result => result.json())
  .then(data => {
    return data
  })
  .catch(console.error)

}
