const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    console.log(this.ctx.isIOS)
    this.ctx.body = 'Hello world'
  }
}

module.exports = HomeController
