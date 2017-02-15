module.exports.routes = {
  'get /look-adv': 'LookAdvController.index',
  'post /look-adv': 'LookAdvController.store',
  'post /look-adv/actions/find': 'LookAdvController.find',
};
