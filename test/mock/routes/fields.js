const devField = require('./../dev/fields-page-1.json');
const devField2 = require('./../dev/fields-page-2.json');
const devField3 = require('./../dev/fields-page-3.json');
const prodField = require('./../prod/fields.json');

exports.getFields = function(req, res) {
  let orgId = req.params.org;

  if (orgId === 'dev') {
    let response = {};
    if (req.query.page == 0) {
      response = devField;
    } else if (req.query.page == 1) {
      response = devField2;
    } else if (req.query.page == 2) {
      response = devField3;
    } else {
      response = {
        'items': [],
        'totalPages': 2,
        'totalEntries': 6
      };
    }

    // Add latency to the response
    setTimeout((() => { res.send(response) }), 4);

  } else if (orgId === 'prod') {
    setTimeout((() => { res.send(prodField) }), 2);
  } else {
    res.status(404).send({ 'errorCode': 'ORGANIZATION_NOT_FOUND' });
  }
};

exports.createFields = function(req, res) {
  res.status(204).send();
};

exports.updateFields = function(req, res) {
  setTimeout((() => { res.status(204).send({}) }), 4);
};

exports.deleteFields = function(req, res) {
  setTimeout(() => {
    res.status(404).send({
      "message": "Full authentication is required to access this resource",
      "errorCode": "UNAUTHORIZED"
    })
  }, 4000);
};