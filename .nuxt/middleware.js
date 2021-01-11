const middleware = {}

middleware['funnelCreated'] = require('../middleware/funnelCreated.js')
middleware['funnelCreated'] = middleware['funnelCreated'].default || middleware['funnelCreated']

middleware['hasSelectedLocation'] = require('../middleware/hasSelectedLocation.js')
middleware['hasSelectedLocation'] = middleware['hasSelectedLocation'].default || middleware['hasSelectedLocation']

middleware['isAuthenticated'] = require('../middleware/isAuthenticated.js')
middleware['isAuthenticated'] = middleware['isAuthenticated'].default || middleware['isAuthenticated']

export default middleware
