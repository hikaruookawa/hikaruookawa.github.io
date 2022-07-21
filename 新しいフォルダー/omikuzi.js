
mres = new Array();
mcom = new Array();

mres[0] = '大吉'; mcom[0] = 'おめでとう！';
mres[1] = '中吉'; mcom[1] = '焦らず行動すればいいことあるかも！';
mres[2] = '小吉'; mcom[2] = '「ありがとう」を忘れずに行動しよう';
mres[3] = ' 吉 '; mcom[3] = '何事もない平和な日';
mres[4] = '末吉'; mcom[4] = '大丈夫だといいね';

function ShowKuji(kRes,kCom) {

   var kuji = Math.floor(Math.random()*mres.length);

   document.getElementById(kRes).innerHTML = mres[kuji];
   document.getElementById(kCom).innerHTML = mcom[kuji];
}
