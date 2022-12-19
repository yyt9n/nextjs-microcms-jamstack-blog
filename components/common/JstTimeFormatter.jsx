export default function JstTimeFormatter({dateTime}) {
  const date = new Date({dateTime}.dateTime);
  let dateText = dateFormat(date)
  return (
    <p>{dateText}</p>
  )
}

// dateFormat 関数の定義
function dateFormat(date) {
  var y = date.getFullYear();
  var m = date.getMonth() + 1;
  var d = date.getDate();
  var w = date.getDay();
  var weekNames = ['日', '月', '火', '水', '木', '金', '土'];

  m = ('0' + m).slice(-2);
  d = ('0' + d).slice(-2);

  // フォーマット整形済みの文字列を戻り値にする
  return y + '年' + m + '月' + d + '日 (' + weekNames[w] + ')';
}