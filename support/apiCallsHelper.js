// Helper functions for different types of requests
const supertest = require('supertest');
const logger = require('logger').createLogger();

async function sendPOSTRequest(baseUrl, apiEndPoint, requestBody, contentType) {
  try {
    const res = await supertest(baseUrl)
      .post(apiEndPoint)
      .retry(2)
      .set('Accept', contentType)
      .set('Content-Type', contentType)
      .send(requestBody);
    return res;
  } catch (err) {
    logger.info('Error in sending POST Request: ', err);
    return err;
  }
}

async function sendPOSTRequestAuth(baseUrl, apiEndPoint, requestBody, authentication) {
  try {
    const res = await supertest(baseUrl)
      .post(apiEndPoint)
      .retry(2)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${authentication}`)
      .send(requestBody);
    return res;
  } catch (err) {
    logger.info('Error in sending POST Request: ', err);
    return err;
  }
}

module.exports = {
  sendPOSTRequest,
  sendPOSTRequestAuth,
};
