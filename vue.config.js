module.exports = {
  //配置静态路径，如果不是根目录作为路径，如8080/api 则要把api加进去
  publicPath: '',
  devServer: {
    host: 'localhost',
    //改端口
    port: 8080,
    //设置代理
    proxy: {
      '/mock': {
        target: 'http://localhost:8080', 
        //是否需要开启websocket
        ws: false,
        //将主机头的原点改为目标的URL
        changeOrigin:false
      }
    }
  }
}