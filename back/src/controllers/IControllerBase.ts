import express = require("express");

interface IControllerBase {
  retrieve: express.RequestHandler;
  findById: express.RequestHandler;

  create: express.RequestHandler;
  update: express.RequestHandler;
  remove: express.RequestHandler;
}
export default IControllerBase;
