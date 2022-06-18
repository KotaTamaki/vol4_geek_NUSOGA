function init() {
    var map = L.map('mapcontainer', { zoomControl: true });
    var mpoint = [26.3201025,127.7639222];
    map.setView(mpoint, 11);
    L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png', {
      attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
    }).addTo(map);

    //画像付きの場合
    //ポップアップする文字（HTML可、ここでは画像を表示）
    var sucontents = "埼玉大学!!!<br><img src='test.jpg' width='500' height='375'>"
    //ポップアップオブジェクトを作成
    var popup1 = L.popup({ maxWidth: 550 }).setContent(sucontents);
    //マーカーにポップアップを紐付けする。同時にbindTooltipでツールチップも追加
    L.marker(([26.3201025,127.7639222]), { draggable: false }).bindPopup(popup1).bindTooltip("埼玉大学").addTo(map);

    //画像なしの場合
    //ポップアップオブジェクトを作成
    var popup2 = L.popup().setContent("桜区役所です");
    //マーカーにポップアップを紐付けする。同時にbindTooltipでツールチップも追加
    L.marker([26.2125,127.68111]).bindPopup(popup2).bindTooltip("桜区役所").addTo(map);
  }