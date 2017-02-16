module.exports.routes = {
  //LookAdv
  'get /look-adv': 'LookAdvController.index',
  'post /look-adv': 'LookAdvController.store',
  'post /look-adv/actions/find': 'LookAdvController.find',

  // Ebay
  'get /ebay': 'EbayController.index',
  'post /ebay/actions/find': 'EbayController.find',

  //Clothing
  'get /clothing/': 'ClothingController.index',
  'post /clothing/actions/find': 'ClothingController.find',
};
