module.exports = function render() {
  var $header = $(`
    <header>
      <nav>
        <ul>
          <li><a href="/">ホーム</a></li>
          <li><a href="/">ライブリロードについて</a></li>
          <li><a href="/">参考URL13</a></li>
        </ul>
      </nav>
    </header>
  `);
  $("body").append( $header );
}


if (module.hot) {
  // このモジュールが差し替え可能とする
  module.hot.accept(function(err) {
    if (err) console.error(err);
    
    console.log( "### header.js: HMR accept" );
  });
  // このモジュールが差し替え可能とする
  module.hot.dispose(function() {
    
    console.log( "### header.js: HMR dispose" );
    $("header").remove();
  });
}
