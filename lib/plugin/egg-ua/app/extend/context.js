module.exports = {
  get isIOS() {
    const iosReg = /iphone|ipad|ipod/i
    console.log(this.get('user-agent'))
    return iosReg.test(this.get('user-agent'))
  }
}
