var ACOSSAIL = function () { };

ACOSSAIL.addToHead = function (params) {
  return '<script src="/static/sail/jquery.min.js" type="text/javascript"></script>\n'
    + '<script src="/static/sail/sail-client.min.js" type="text/javascript"></script>\n'
    + '<script src="/static/sail/events.js" type="text/javascript"></script>\n';
};

ACOSSAIL.addToBody = function (params) {
  return '';
};

ACOSSAIL.initialize = function (req, params, handlers, cb) {
  // Initialize the protocol
  params.headContent += ACOSSAIL.addToHead(params);
  params.bodyContent += ACOSSAIL.addToBody(params);

  // Initialize the content type (and content package)
  handlers.contentTypes[req.params.contentType].initialize(req, params, handlers, function () {
    cb();
  });
};

ACOSSAIL.handleEvent = function (event, payload, req, res, protocolData, responseObj, cb) {
  res.json({ 'status': 'OK', 'protocol': responseObj.protocol, 'content': responseObj.content });
  cb(event, payload, req, res, protocolData, responseObj);
};

ACOSSAIL.register = function (handlers) {
  handlers.protocols.sail = ACOSSAIL;
};

ACOSSAIL.namespace = 'sail';
ACOSSAIL.packageType = 'protocol';

ACOSSAIL.meta = {
  'name': 'sail',
  'shortDescription': 'Simple protocol for loading content without any communication with the server.',
  'description': '',
  'author': 'Mohammad Hassany',
  'license': 'MIT',
  'version': '0.1.0',
  'url': ''
};

module.exports = ACOSSAIL;
