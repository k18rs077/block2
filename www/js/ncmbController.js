// This is a JavaScript file

var ncmbController = {

  APPLICATION_KEY: appKey,
  CLIENT_KEY: clientKey

   // 初期化
    init: function(screenSize) {
        var self = this;
        self.ncmb = new NCMB(self.APPLICATION_KEY, self.CLIENT_KEY);    // mobile backendの初期化
        self.screenSize = screenSize;
    }

}