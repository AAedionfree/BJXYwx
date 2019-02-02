const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function itemscore(code){
  var array=[
    { itemcode: "00000", score: "0.3" },
    { itemcode: "00010", score: "0.3" },
    { itemcode: "00020", score: "0.5" },
    { itemcode: "00100", score: "0.2" },
    { itemcode: "00110", score: "0.2" },
    { itemcode: "00120", score: "0.3" },
    { itemcode: "00200", score: "0.4" },
    { itemcode: "00201", score: "0.8" },
    { itemcode: "00210", score: "0.3" },
    { itemcode: "00211", score: "0.6" },
    { itemcode: "00220", score: "0.2" },
    { itemcode: "00221", score: "0.4" },
    { itemcode: "00300", score: "0.3" },
    { itemcode: "00400", score: "0.2" },
    { itemcode: "00500", score: "3.0" },
    { itemcode: "00501", score: "2.0" },
    { itemcode: "00502", score: "1.0" },
    { itemcode: "00503", score: "1.0" },
    { itemcode: "00504", score: "0.5" },
    { itemcode: "00510", score: "1.5" },
    { itemcode: "00511", score: "1.0" },
    { itemcode: "00512", score: "0.5" },
    { itemcode: "00513", score: "0.5" },
    { itemcode: "00514", score: "0.2" },
    { itemcode: "00520", score: "0.8" },
    { itemcode: "00521", score: "0.5" },
    { itemcode: "00522", score: "0.3" },
    { itemcode: "00523", score: "0.3" },
    { itemcode: "00524", score: "0.1" },
    { itemcode: "00600", score: "0.6" },
    { itemcode: "00610", score: "0.1" },
    { itemcode: "01000", score: "2.0" },
    { itemcode: "01010", score: "1.0" },
    { itemcode: "01020", score: "1.0" },
    { itemcode: "01021", score: "0.7" },
    { itemcode: "01030", score: "0.2" },
    { itemcode: "01040", score: "0.2" },
    { itemcode: "01050", score: "0.2" },
    { itemcode: "01060", score: "0.2" },
    { itemcode: "01070", score: "0.2" },
    { itemcode: "01100", score: "1.0" },
    { itemcode: "01101", score: "0.8" },
    { itemcode: "01102", score: "0.6" },
    { itemcode: "01103", score: "0.4" },
    { itemcode: "01110", score: "0.4" },
    { itemcode: "01200", score: "3.0" },
    { itemcode: "01201", score: "2.0" },
    { itemcode: "01202", score: "1.0" },
    { itemcode: "01210", score: "1.0" },
    { itemcode: "01220", score: "0.5" },
    { itemcode: "01230", score: "3.0" },
    { itemcode: "01231", score: "2.0" },
    { itemcode: "01232", score: "1.0" },
    { itemcode: "01240", score: "1.0" },
    { itemcode: "01241", score: "0.6" },
    { itemcode: "01250", score: "0.0" },
    { itemcode: "02000", score: "2.0" },
    { itemcode: "02100", score: "1.5" },
    { itemcode: "02200", score: "1.0" },
    { itemcode: "02300", score: "0.8" },
    { itemcode: "02400", score: "0.5" },
    { itemcode: "02500", score: "0.5" },
    { itemcode: "10000", score: "8.0" },
    { itemcode: "10001", score: "7.0" },
    { itemcode: "10002", score: "6.0" },
    { itemcode: "10003", score: "5.0" },
    { itemcode: "10004", score: "4.0" },
    { itemcode: "10005", score: "4.0" },
    { itemcode: "10006", score: "4.0" },
    { itemcode: "10007", score: "4.0" },
    { itemcode: "10008", score: "2.0" },
    { itemcode: "10010", score: "4.0" },
    { itemcode: "10011", score: "3.0" },
    { itemcode: "10012", score: "2.0" },
    { itemcode: "10013", score: "2.0" },
    { itemcode: "10014", score: "2.0" },
    { itemcode: "10015", score: "2.0" },
    { itemcode: "10016", score: "2.0" },
    { itemcode: "10017", score: "2.0" },
    { itemcode: "10018", score: "1.0" },
    { itemcode: "10020", score: "3.0" },
    { itemcode: "10021", score: "2.5" },
    { itemcode: "10022", score: "2.0" },
    { itemcode: "10023", score: "1.5" },
    { itemcode: "10024", score: "1.0" },
    { itemcode: "10025", score: "1.0" },
    { itemcode: "10026", score: "1.0" },
    { itemcode: "10027", score: "1.0" },
    { itemcode: "10028", score: "0.5" },
    { itemcode: "10030", score: "1.0" },
    { itemcode: "10031", score: "0.8" },
    { itemcode: "10032", score: "0.5" },
    { itemcode: "10033", score: "0.2" },
    { itemcode: "10034", score: "0.2" },
    { itemcode: "10035", score: "0.2" },
    { itemcode: "10036", score: "0.2" },
    { itemcode: "10037", score: "0.2" },
    { itemcode: "10038", score: "0.1" },
    { itemcode: "10100", score: "2.0" },
    { itemcode: "10101", score: "1.0" },
    { itemcode: "10102", score: "1.5" },
    { itemcode: "10103", score: "0.8" },
    { itemcode: "10104", score: "1.0" },
    { itemcode: "10105", score: "0.5" },
    { itemcode: "10106", score: "0.5" },
    { itemcode: "10107", score: "0.3" },
    { itemcode: "10110", score: "1.0" },
    { itemcode: "10111", score: "0.8" },
    { itemcode: "10112", score: "0.5" },
    { itemcode: "10113", score: "0.2" },
    { itemcode: "10120", score: "0.5" },
    { itemcode: "10121", score: "0.4" },
    { itemcode: "10122", score: "0.3" },
    { itemcode: "10123", score: "0.1" },
    { itemcode: "11000", score: "0.7" },
    { itemcode: "11100", score: "0.5" },
    { itemcode: "20000", score: "8.8" },
    { itemcode: "20001", score: "5.3" },
    { itemcode: "20002", score: "3.5" },
    { itemcode: "20010", score: "7.5" },
    { itemcode: "20011", score: "4.5" },
    { itemcode: "20012", score: "3.0" },
    { itemcode: "20020", score: "6.3" },
    { itemcode: "20021", score: "3.8" },
    { itemcode: "20022", score: "2.5" },
    { itemcode: "20030", score: "5.0" },
    { itemcode: "20031", score: "3.0" },
    { itemcode: "20032", score: "2.0" },
    { itemcode: "20040", score: "4.5" },
    { itemcode: "20041", score: "2.7" },
    { itemcode: "20042", score: "1.8" },
    { itemcode: "20100", score: "6.0" },
    { itemcode: "201000", score: "3.0" },
    { itemcode: "201001", score: "1.8" },
    { itemcode: "201002", score: "1.2" },
    { itemcode: "201010", score: "2.3" },
    { itemcode: "201011", score: "1.4" },
    { itemcode: "201012", score: "0.9" },
    { itemcode: "201020", score: "1.5" },
    { itemcode: "201021", score: "0.9" },
    { itemcode: "201022", score: "0.6" },
    { itemcode: "201030", score: "1.0" },
    { itemcode: "201031", score: "0.6" },
    { itemcode: "201032", score: "0.4" },
    { itemcode: "20110", score: "4.5" },
    { itemcode: "201100", score: "4.5" },
    { itemcode: "201101", score: "2.7" },
    { itemcode: "201102", score: "1.8" },
    { itemcode: "201110", score: "3.0" },
    { itemcode: "201111", score: "1.8" },
    { itemcode: "201112", score: "1.2" },
    { itemcode: "201120", score: "2.3" },
    { itemcode: "201121", score: "1.4" },
    { itemcode: "201122", score: "0.9" },
    { itemcode: "201130", score: "0.5" },
    { itemcode: "201131", score: "0.3" },
    { itemcode: "201132", score: "0.2" },
    { itemcode: "201200", score: "2.5" },
    { itemcode: "201201", score: "1.5" },
    { itemcode: "201202", score: "1.0" },
    { itemcode: "201210", score: "1.5" },
    { itemcode: "201211", score: "0.9" },
    { itemcode: "201212", score: "0.6" },
    { itemcode: "201220", score: "1.0" },
    { itemcode: "201221", score: "0.6" },
    { itemcode: "201222", score: "0.4" },
    { itemcode: "201230", score: "0.3" },
    { itemcode: "201231", score: "0.1" },
    { itemcode: "201232", score: "0.1" },
    { itemcode: "201300", score: "1.3" },
    { itemcode: "201301", score: "0.8" },
    { itemcode: "201302", score: "0.5" },
    { itemcode: "201310", score: "0.8" },
    { itemcode: "201311", score: "0.5" },
    { itemcode: "201312", score: "0.3" },
    { itemcode: "201320", score: "0.3" },
    { itemcode: "201321", score: "0.3" },
    { itemcode: "201322", score: "0.2" },
    { itemcode: "201330", score: "0.1" },
    { itemcode: "201331", score: "0.1" },
    { itemcode: "201332", score: "0.1" },
    { itemcode: "201400", score: "2.3" },
    { itemcode: "201401", score: "1.4" },
    { itemcode: "201402", score: "0.9" },
    { itemcode: "201410", score: "1.5" },
    { itemcode: "201411", score: "0.9" },
    { itemcode: "201412", score: "0.6" },
    { itemcode: "201420", score: "1.0" },
    { itemcode: "201421", score: "0.6" },
    { itemcode: "201422", score: "0.4" },
    { itemcode: "201430", score: "0.3" },
    { itemcode: "201431", score: "0.1" },
    { itemcode: "201432", score: "0.1" },
    { itemcode: "201500", score: "2.0" },
    { itemcode: "201501", score: "1.2" },
    { itemcode: "201502", score: "0.8" },
    { itemcode: "201510", score: "1.8" },
    { itemcode: "201511", score: "1.1" },
    { itemcode: "201512", score: "0.7" },
    { itemcode: "201520", score: "1.0" },
    { itemcode: "201521", score: "0.6" },
    { itemcode: "201522", score: "0.4" },
    { itemcode: "201530", score: "0.5" },
    { itemcode: "201531", score: "0.3" },
    { itemcode: "201532", score: "0.2" },
    { itemcode: "201540", score: "0.1" },
    { itemcode: "201541", score: "0.1" },
    { itemcode: "201542", score: "0.1" },
    { itemcode: "201600", score: "1.5" },
    { itemcode: "201601", score: "0.9" },
    { itemcode: "201602", score: "0.6" },
    { itemcode: "201610", score: "1.0" },
    { itemcode: "201611", score: "0.6" },
    { itemcode: "201612", score: "0.4" },
    { itemcode: "201620", score: "0.8" },
    { itemcode: "201621", score: "0.5" },
    { itemcode: "201622", score: "0.3" },
    { itemcode: "201630", score: "0.1" },
    { itemcode: "201631", score: "0.1" },
    { itemcode: "201632", score: "0.1" },
    { itemcode: "201700", score: "0.6" },
    { itemcode: "201701", score: "0.3" },
    { itemcode: "201710", score: "0.3" },
    { itemcode: "201711", score: "0.1" },
    { itemcode: "201720", score: "0.2" },
    { itemcode: "201721", score: "0.1" },
    { itemcode: "201730", score: "0.0" },
    { itemcode: "201731", score: "0.0" },
    { itemcode: "201800", score: "0.8" },
    { itemcode: "201801", score: "0.5" },
    { itemcode: "201802", score: "0.3" },
    { itemcode: "201810", score: "0.5" },
    { itemcode: "201811", score: "0.3" },
    { itemcode: "201812", score: "0.2" },
    { itemcode: "201820", score: "0.3" },
    { itemcode: "201821", score: "0.2" },
    { itemcode: "201822", score: "0.1" },
    { itemcode: "201830", score: "0.1" },
    { itemcode: "201831", score: "0.1" },
    { itemcode: "201832", score: "0.0" },
    { itemcode: "201900", score: "4.0" },
    { itemcode: "201910", score: "3.0" },
    { itemcode: "201920", score: "2.0" },
    { itemcode: "201930", score: "1.0" },
    { itemcode: "201940", score: "0.1" },
    { itemcode: "20200", score: "3.0" },
    { itemcode: "202000", score: "3.0" },
    { itemcode: "202010", score: "2.5" },
    { itemcode: "202020", score: "2.0" },
    { itemcode: "20210", score: "2.0" },
    { itemcode: "202100", score: "2.0" },
    { itemcode: "202110", score: "1.0" },
    { itemcode: "202120", score: "0.5" },
    { itemcode: "202130", score: "0.1" },
    { itemcode: "20220", score: "1.0" },
    { itemcode: "202200", score: "3.0" },
    { itemcode: "202210", score: "2.0" },
    { itemcode: "202220", score: "1.0" },
    { itemcode: "202230", score: "0.5" },
    { itemcode: "202240", score: "0.1" },
    { itemcode: "20230", score: "0.1" },
    { itemcode: "202300", score: "4.0" },
    { itemcode: "202310", score: "3.0" },
    { itemcode: "202320", score: "2.0" },
    { itemcode: "202330", score: "1.0" },
    { itemcode: "202400", score: "3.0" },
    { itemcode: "202410", score: "2.0" },
    { itemcode: "202500", score: "0.8" },
    { itemcode: "202510", score: "0.4" },
    { itemcode: "202520", score: "0.3" },
    { itemcode: "202530", score: "0.1" },
    { itemcode: "202600", score: "0.8" },
    { itemcode: "202610", score: "0.4" },
    { itemcode: "202620", score: "0.3" },
    { itemcode: "202630", score: "0.1" },
    { itemcode: "202700", score: "1.5" },
    { itemcode: "202701", score: "0.9" },
    { itemcode: "202702", score: "0.6" },
    { itemcode: "202710", score: "1.0" },
    { itemcode: "202711", score: "0.6" },
    { itemcode: "202712", score: "0.4" },
    { itemcode: "202720", score: "0.5" },
    { itemcode: "202721", score: "0.3" },
    { itemcode: "202722", score: "0.2" },
    { itemcode: "202800", score: "2.5" },
    { itemcode: "202801", score: "1.5" },
    { itemcode: "202810", score: "1.5" },
    { itemcode: "202811", score: "1.0" },
    { itemcode: "202820", score: "1.0" },
    { itemcode: "202821", score: "0.5" },
    { itemcode: "202900", score: "1.5" },
    { itemcode: "202901", score: "0.9" },
    { itemcode: "202902", score: "0.6" },
    { itemcode: "202910", score: "1.0" },
    { itemcode: "202911", score: "0.6" },
    { itemcode: "202912", score: "0.4" },
    { itemcode: "202920", score: "0.5" },
    { itemcode: "202921", score: "0.3" },
    { itemcode: "202922", score: "0.2" },
    { itemcode: "20300", score: "3.0" },
    { itemcode: "20310", score: "2.0" },
    { itemcode: "20320", score: "1.0" },
    { itemcode: "20330", score: "0.1" },
    { itemcode: "20400", score: "3.0" },
    { itemcode: "20410", score: "2.3" },
    { itemcode: "20420", score: "1.5" },
    { itemcode: "20430", score: "1.0" },
    { itemcode: "20500", score: "4.5" },
    { itemcode: "20501", score: "2.7" },
    { itemcode: "20502", score: "1.8" },
    { itemcode: "20510", score: "3.0" },
    { itemcode: "20511", score: "1.8" },
    { itemcode: "20512", score: "1.2" },
    { itemcode: "20520", score: "2.3" },
    { itemcode: "20521", score: "1.4" },
    { itemcode: "20522", score: "0.9" },
    { itemcode: "20530", score: "1.5" },
    { itemcode: "20531", score: "0.9" },
    { itemcode: "20532", score: "0.6" },
    { itemcode: "20600", score: "4.0" },
    { itemcode: "20610", score: "2.5" },
    { itemcode: "20620", score: "1.5" },
    { itemcode: "20630", score: "0.3" },
    { itemcode: "20700", score: "0.9" },
    { itemcode: "20710", score: "0.8" },
    { itemcode: "20720", score: "0.6" },
    { itemcode: "20730", score: "0.1" },
    { itemcode: "20800", score: "3.0" },
    { itemcode: "20810", score: "2.0" },
    { itemcode: "20820", score: "1.0" },
    { itemcode: "20830", score: "0.1" },
    { itemcode: "20900", score: "6.3" },
    { itemcode: "20901", score: "3.8" },
    { itemcode: "20902", score: "2.5" },
    { itemcode: "20910", score: "5.0" },
    { itemcode: "20911", score: "3.0" },
    { itemcode: "20912", score: "2.0" },
    { itemcode: "20920", score: "4.5" },
    { itemcode: "20921", score: "2.7" },
    { itemcode: "20922", score: "1.8" },
    { itemcode: "20930", score: "3.0" },
    { itemcode: "20931", score: "1.8" },
    { itemcode: "20932", score: "1.2" },
    { itemcode: "20940", score: "2.3" },
    { itemcode: "20941", score: "1.4" },
    { itemcode: "20942", score: "0.9" },
    { itemcode: "21000", score: "6.0" },
    { itemcode: "21010", score: "3.0" },
    { itemcode: "21020", score: "1.5" },
    { itemcode: "21100", score: "4.0" },
    { itemcode: "21110", score: "2.0" },
    { itemcode: "21120", score: "1.0" },
    { itemcode: "21200", score: "3.0" },
    { itemcode: "21210", score: "1.5" },
    { itemcode: "21220", score: "0.8" },
    { itemcode: "21300", score: "4.0" },
    { itemcode: "21310", score: "2.0" },
    { itemcode: "21320", score: "1.0" },
    { itemcode: "21400", score: "3.0" },
    { itemcode: "21410", score: "1.5" },
    { itemcode: "21420", score: "0.8" },
    { itemcode: "21500", score: "2.0" },
    { itemcode: "21510", score: "1.0" },
    { itemcode: "21520", score: "0.5" },
    { itemcode: "21600", score: "2.0" },
    { itemcode: "21700", score: "1.0" },
    { itemcode: "21800", score: "1.0" },
    { itemcode: "22000", score: "2.0" },
    { itemcode: "22010", score: "1.0" },
    { itemcode: "22100", score: "2.0" },
    { itemcode: "22110", score: "1.0" },
    { itemcode: "22200", score: "2.0" },
    { itemcode: "22210", score: "1.0" },
  ]
  var i=0;
  console.log(array.length)
  for(i=0;i<array.length;i++){
    if(array[i].itemcode==code){
      return array[i].score;
    }
  }
};

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
'use strict'

var accAdd = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var dec1, dec2, times;
  try { dec1 = countDecimals(num1) + 1; } catch (e) { dec1 = 0; }
  try { dec2 = countDecimals(num2) + 1; } catch (e) { dec2 = 0; }
  times = Math.pow(10, Math.max(dec1, dec2));
  // var result = (num1 * times + num2 * times) / times;
  var result = (accMul(num1, times) + accMul(num2, times)) / times;
  return getCorrectResult("add", num1, num2, result);
  // return result;
};

var accSub = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var dec1, dec2, times;
  try { dec1 = countDecimals(num1) + 1; } catch (e) { dec1 = 0; }
  try { dec2 = countDecimals(num2) + 1; } catch (e) { dec2 = 0; }
  times = Math.pow(10, Math.max(dec1, dec2));
  // var result = Number(((num1 * times - num2 * times) / times);
  var result = Number((accMul(num1, times) - accMul(num2, times)) / times);
  return getCorrectResult("sub", num1, num2, result);
  // return result;
};

var accDiv = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var t1 = 0, t2 = 0, dec1, dec2;
  try { t1 = countDecimals(num1); } catch (e) { }
  try { t2 = countDecimals(num2); } catch (e) { }
  dec1 = convertToInt(num1);
  dec2 = convertToInt(num2);
  var result = accMul((dec1 / dec2), Math.pow(10, t2 - t1));
  return getCorrectResult("div", num1, num2, result);
  // return result;
};

var accMul = function (num1, num2) {
  num1 = Number(num1);
  num2 = Number(num2);
  var times = 0, s1 = num1.toString(), s2 = num2.toString();
  try { times += countDecimals(s1); } catch (e) { }
  try { times += countDecimals(s2); } catch (e) { }
  var result = convertToInt(s1) * convertToInt(s2) / Math.pow(10, times);
  return getCorrectResult("mul", num1, num2, result);
  // return result;
};

function errImgFun(e, that) {
  var _errImg = e.target.dataset.errImg;
  var _errObj = {};
  _errObj[_errImg] = "../../img/01.png";
  console.log(e.detail.errMsg + "----" + "----" + _errImg);
  that.setData(_errObj);
}

var countDecimals = function (num) {
  var len = 0;
  try {
    num = Number(num);
    var str = num.toString().toUpperCase();
    if (str.split('E').length === 2) { // scientific notation
      var isDecimal = false;
      if (str.split('.').length === 2) {
        str = str.split('.')[1];
        if (parseInt(str.split('E')[0]) !== 0) {
          isDecimal = true;
        }
      }
      let x = str.split('E');
      if (isDecimal) {
        len = x[0].length;
      }
      len -= parseInt(x[1]);
    } else if (str.split('.').length === 2) { // decimal
      if (parseInt(str.split('.')[1]) !== 0) {
        len = str.split('.')[1].length;
      }
    }
  } catch (e) {
    throw e;
  } finally {
    if (isNaN(len) || len < 0) {
      len = 0;
    }
    return len;
  }
};

var convertToInt = function (num) {
  num = Number(num);
  var newNum = num;
  var times = countDecimals(num);
  var temp_num = num.toString().toUpperCase();
  if (temp_num.split('E').length === 2) {
    newNum = Math.round(num * Math.pow(10, times));
  } else {
    newNum = Number(temp_num.replace(".", ""));
  }
  return newNum;
};

var getCorrectResult = function (type, num1, num2, result) {
  var temp_result = 0;
  switch (type) {
    case "add":
      temp_result = num1 + num2;
      break;
    case "sub":
      temp_result = num1 - num2;
      break;
    case "div":
      temp_result = num1 / num2;
      break;
    case "mul":
      temp_result = num1 * num2;
      break;
  }
  if (Math.abs(result - temp_result) > 1) {
    return temp_result;
  }
  return result;
};

function code2Item(e) {
  if (e == undefined || e == null)
    return null;
  var Array = ["", "", "", "", ""];
  var codeLen = e.length;
  if (codeLen == 5) {
    var index = e.split("", 5);
  }
  else if (codeLen == 6) {
    var index = [];
    var temp = e.split("", 6);
    index[0] = temp[0];
    index[1] = temp[1];
    index[2] = temp[2] + temp[3];
    index[3] = temp[4];
    index[4] = temp[5];
  }
  var Index = index.map(Number);
  console.log(Index);
  switch (Index[0]) {
    //德育类
    case 0:
      Array[0] = ['德育类'];
      switch (Index[1]) {
        case 0:
          Array[1] = ['参加校院组织的活动'];
          switch (Index[2]) {
            //
            case 0:
              Array[2] = ['校级各种先进集体答辩'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['辩手'];
                  break;
                case 1:
                  Array[3] = ['主要答辩材料准备者'];
                  break;
                case 2:
                  Array[3] = ['辩手+主要答辩材料准备者'];
                  break;
              }
              break;

            case 1:
              Array[2] = ['院级各种先进集体答辩（校级优秀班集体答辩、校级标兵团支部答辩）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['辩手'];
                  break;
                case 1:
                  Array[3] = ['主要答辩材料准备者'];
                  break;
                case 2:
                  Array[3] = ['辩手+主要答辩材料准备者'];
                  break;
              }
              break;

            case 2:
              Array[2] = ['“我的班级我的家”-上学期'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['A类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['B类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['C类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
              }
              break;

            case 3:
              Array[2] = ['“我的班级我的家”-下学期'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['A类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['B类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['C类'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['参与者'];
                      break;
                    case 1:
                      Array[4] = ['班长'];
                      break;
                  }
                  break;
              }
              break;

            case 4:
              Array[2] = ['校艺术团成员'];
              break;

            case 5:
              Array[2] = ['对学校、学院国际化工作有突出贡献'];
              break;

            case 6:
              Array[2] = ['各类竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['市级'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['一等奖'];
                      break;
                    case 1:
                      Array[4] = ['二等奖'];
                      break;
                    case 2:
                      Array[4] = ['三等奖'];
                      break;
                    case 3:
                      Array[4] = ['集体奖'];
                      break;
                    case 4:
                      Array[4] = ['未取得名次'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['校级'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['一等奖'];
                      break;
                    case 1:
                      Array[4] = ['二等奖'];
                      break;
                    case 2:
                      Array[4] = ['三等奖'];
                      break;
                    case 3:
                      Array[4] = ['集体奖'];
                      break;
                    case 4:
                      Array[4] = ['未取得名次'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['院级'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['一等奖'];
                      break;
                    case 1:
                      Array[4] = ['二等奖'];
                      break;
                    case 2:
                      Array[4] = ['三等奖'];
                      break;
                    case 3:
                      Array[4] = ['集体奖'];
                      break;
                    case 4:
                      Array[4] = ['未取得名次'];
                      break;
                  }
                  break;
              }
              break;

            case 7:
              Array[2] = ['志愿者'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['大型活动和志愿者'];
                  break;
                case 1:
                  Array[3] = ['其他志愿者'];
                  break;
              }
              break;
          }
          break;

        case 1:
          Array[1] = ['获得先进称号'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['集体获得先进称号'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['北京市十佳班级体'];
                  break;
                case 1:
                  Array[3] = ['其他市级以上（含市级）先进班级体'];
                  break;
                case 2:
                  Array[3] = ['校先进班级体'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['一等奖'];
                      break;
                    case 1:
                      Array[4] = ['二、三等奖（或同时获得4个校级单项荣誉称号）'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['校级优良学风班'];
                  break;
                case 4:
                  Array[3] = ['校级体育先进班'];
                  break;
                case 5:
                  Array[3] = ['宿舍文明班'];
                  break;
                case 6:
                  Array[3] = ['标兵（优秀）团支部'];
                  break;
                case 7:
                  Array[3] = ['文明宿舍'];
                  break;
              }
              break;

            case 1:
              Array[2] = ['集体获得优秀社会实践队称号'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['暑假社会实践'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['市级以上（含）'];
                      break;
                    case 1:
                      Array[4] = ['校级一等奖'];
                      break;
                    case 2:
                      Array[4] = ['校级二等奖'];
                      break;
                    case 3:
                      Array[4] = ['校级三等奖'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['寒假社会实践'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['校级优秀团队、优秀成果'];
                      break;
                  }
                  break;
              }
              break;

            case 2:
              Array[2] = ['个人获得先进称号'];
              switch (Index[3]) {
                //'三好学生、优秀学生干部、优秀团员、优秀团干部、优秀党员', '军训优秀学员、校党校优秀学员、校党校实践先进个人', '院党校优秀学员、院党校实践先进个人', '优秀志愿者', '社会实践先进个人', '特殊荣誉称号、优秀事迹表彰'
                case 0:
                  Array[3] = ['三好学生、优秀学生干部、优秀团员、优秀团干部、优秀党员'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['市级以上（含）'];
                      break;
                    case 1:
                      Array[4] = ['校级'];
                      break;
                    case 2:
                      Array[4] = ['院级'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['军训优秀学员、校党校优秀学员、校党校实践先进个人'];
                  break;
                case 2:
                  Array[3] = ['院党校优秀学员、院党校实践先进个人'];
                  break;

                case 3:
                  Array[3] = ['优秀志愿者'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['市级以上（含）'];
                      break;
                    case 1:
                      Array[4] = ['校级（含社会服务机构）'];
                      break;
                    case 2:
                      Array[4] = ['院级（含校级学生组织）'];
                      break;
                  }
                  break;

                case 4:
                  Array[3] = ['社会实践先进个人'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['校级暑期'];
                      break;
                    case 1:
                      Array[4] = ['校级寒期'];
                      break;
                  }
                  break;
                case 5:
                  Array[3] = ['获得特殊荣誉称号、优秀事迹得到表彰者，或对学校、学院做出突出贡献者'];
                  break;
              }
              break;
          }
          break;

        case 2:
          Array[1] = ['担任社会工作'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['校学生会、社团联合会部长级（不含部长）以上学生干部，半脱产学生干部（学生处认证为准）'];
              break;
            case 1:
              Array[2] = ['校学生会、社团联合会部长级（含执行部长）学生干部，校党校总干事，学院学生会主席、执行主席、梦拓主管代表'];
              break;
            case 2:
              Array[2] = ['校学生会、社团联合会副部长级学生干部，学院学生会副主席、执行副主席及各部部长，学生社团社长，沙河校区学生发展服务中心助理、校团委见习半脱产学生干部（以学生处、团委认定为准），校党校总干事助理、各部部长，大班长，大班团支书，党支部书记'];
              break;
            case 3:
              Array[2] = ['学院学生会各部副部长、执行副部长，梦拓组长，校党校副部长级学生干部，校团校各类学生干部，大班班委、小班长、小班团支书，党支部支部委员'];
              break;
            case 4:
              Array[2] = ['院党校大班长及其他同级别学生干部，小班班委，院党校各部部长副部长、小班长，学院学生会各部优秀干事'];
              break;
            case 5:
              Array[2] = ['《北航》校报、《北航青年》、学生电视台、学生广播等校级学生宣传阵地的主要学生编辑，记者及其他工作人员，院级刊物主要编辑'];
              break;
          }
          break;
      }
      break;

    //体育类
    case 1:
      Array[0] = ['体育类'];
      switch (Index[1]) {
        case 0:
          Array[1] = ['参加体育比赛'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['个人'];
              switch (Index[3]) {
                //'部，市高校比赛', '校级比赛', '院级比赛'
                case 0:
                  Array[3] = ['全国高校比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['第4名'];
                      break;
                    case 4:
                      Array[4] = ['第5名'];
                      break;
                    case 5:
                      Array[4] = ['第6名'];
                      break;
                    case 6:
                      Array[4] = ['第7名'];
                      break;
                    case 7:
                      Array[4] = ['第8名'];
                      break;
                    case 8:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['部，市高校比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['第4名'];
                      break;
                    case 4:
                      Array[4] = ['第5名'];
                      break;
                    case 5:
                      Array[4] = ['第6名'];
                      break;
                    case 6:
                      Array[4] = ['第7名'];
                      break;
                    case 7:
                      Array[4] = ['第8名'];
                      break;
                    case 8:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['校级比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['第4名'];
                      break;
                    case 4:
                      Array[4] = ['第5名'];
                      break;
                    case 5:
                      Array[4] = ['第6名'];
                      break;
                    case 6:
                      Array[4] = ['第7名'];
                      break;
                    case 7:
                      Array[4] = ['第8名'];
                      break;
                    case 8:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['院级比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['第4名'];
                      break;
                    case 4:
                      Array[4] = ['第5名'];
                      break;
                    case 5:
                      Array[4] = ['第6名'];
                      break;
                    case 6:
                      Array[4] = ['第7名'];
                      break;
                    case 7:
                      Array[4] = ['第8名'];
                      break;
                    case 8:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
              }
              break;
            case 1:
              Array[2] = ['集体'];
              switch (Index[3]) {
                //'校级及以上三大球甲级比赛', '校级及以上其他集体项目', '院级比赛'
                case 0:
                  Array[3] = ['校级及以上三大球甲级比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名-主力'];
                      break;
                    case 1:
                      Array[4] = ['第1名-非主力'];
                      break;
                    case 2:
                      Array[4] = ['第2名-主力'];
                      break;
                    case 3:
                      Array[4] = ['第2名-非主力'];
                      break;
                    case 4:
                      Array[4] = ['第3名-主力'];
                      break;
                    case 5:
                      Array[4] = ['第3名-非主力'];
                      break;
                    case 6:
                      Array[4] = ['无名次-主力'];
                      break;
                    case 7:
                      Array[4] = ['无名次-非主力'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['校级及以上其他集体项目'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['院级比赛'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第1名'];
                      break;
                    case 1:
                      Array[4] = ['第2名'];
                      break;
                    case 2:
                      Array[4] = ['第3名'];
                      break;
                    case 3:
                      Array[4] = ['无名次'];
                      break;
                  }
                  break;
              }
              break;
          }
          break;

        case 1:
          Array[1] = ['担任体育职务'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['校级各训练队队长（以校体育部认定为准）'];
              break;
            case 1:
              Array[2] = ['院级各体育部负责人'];
              break;
          }
          break;
      }
      break;

    //智育类
    case 2:
      Array[0] = ['智育类'];
      switch (Index[1]) {
        //'参加各级各类科技竞赛、学科竞赛、创新创业计划', '发表高水平学术成果', '参加校外英语能力测试'
        case 0:
          Array[1] = ['参加各级各类科技竞赛、学科竞赛、创新创业计划'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['“挑战杯”全国大学生课外学术科技作品竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 4:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 1:
              Array[2] = ['全国大学生电子设计竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
              }
              break;

            case 2:
              Array[2] = ['全国大学生电子设计竞赛（嵌入式专题邀请赛）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 3:
              Array[2] = ['全国大学生信息安全竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 4:
              Array[2] = ['全国电子专业人才设计与技能大赛(蓝桥杯)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  break;
              }
              break;

            case 5:
              Array[2] = ['“挑战杯”全国大学生创业计划大赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 6:
              Array[2] = ['全国大学生电子设计竞赛（北京赛区）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 7:
              Array[2] = ['全国电子专业人才设计与技能大赛（蓝桥杯北京赛区）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 8:
              Array[2] = ['北京市大学生电子设计竞赛(EDA)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 9:
              Array[2] = ['首都挑战杯课外学术科技作品竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 4:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 10:
              Array[2] = ['首都挑战杯大学生创业大赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 11:
              Array[2] = ['“冯如杯”学生学术科技作品竞赛（制作类）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 12:
              Array[2] = ['“冯如杯”学生学术科技作品竞赛（自然科学类论文）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 13:
              Array[2] = ['“冯如杯”学生学术科技作品竞赛（社会科学类论文）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 14:
              Array[2] = ['“冯如杯”学生创业计划竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 15:
              Array[2] = ['“冯如杯”学生创意大赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 4:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 16:
              Array[2] = ['北航电子创新大赛（创新作品类）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 17:
              Array[2] = ['北航电子创新大赛（创意论文类）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                  }
                  break;
              }
              break;

            case 18:
              Array[2] = ['北航电子创新大赛（创业作品类）'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;
            case 19:
              Array[2] = ['美国大学生数学建模竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  break;
                case 4:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 20:
              Array[2] = ['全国大学生数学竞赛(决赛)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
              }
              break;

            case 21:
              Array[2] = ['全国大学生数学竞赛(预赛)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 22:
              Array[2] = ['全国部分地区大学生物理竞赛(非物理类A组)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  break;
                case 4:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 23:
              Array[2] = ['全国大学生英语竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['特等奖'];
                  break;
                case 1:
                  Array[3] = ['一等奖'];
                  break;
                case 2:
                  Array[3] = ['二等奖'];
                  break;
                case 3:
                  Array[3] = ['三等奖'];
                  break;
              }
              break;

            case 24:
              Array[2] = ['全国大学生数学建模竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
              }
              break;

            case 25:
              Array[2] = ['北航数学竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 26:
              Array[2] = ['北航物理竞赛'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  break;
                case 3:
                  Array[3] = ['成功参赛奖'];
                  break;
              }
              break;

            case 27:
              Array[2] = ['国家创新计划(大创)'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;

            case 28:
              Array[2] = ['北航SRTP'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['其他作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['其他作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['立项人'];
                      break;
                    case 1:
                      Array[4] = ['其他作者'];
                      break;
                  }
                  break;
              }
              break;
            case 29:
              Array[2] = ['“冯如”学生创新计划'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['一等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 1:
                  Array[3] = ['二等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
                case 2:
                  Array[3] = ['三等奖'];
                  switch (Index[4]) {
                    case 0:
                      Array[4] = ['第一作者'];
                      break;
                    case 1:
                      Array[4] = ['第二作者'];
                      break;
                    case 2:
                      Array[4] = ['第三作者'];
                      break;
                  }
                  break;
              }
              break;
          }
          break;
        case 1:
          Array[1] = ['发表高水平学术成果'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['本专业SCI学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 1:
              Array[2] = ['本专业EI学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 2:
              Array[2] = ['本专业核心期刊学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 3:
              Array[2] = ['非本专业SCI学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 4:
              Array[2] = ['非本专业EI学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 5:
              Array[2] = ['非本专业核心期刊学术论文'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['第一作者'];
                  break;
                case 1:
                  Array[3] = ['第二作者'];
                  break;
                case 2:
                  Array[3] = ['第三作者'];
                  break;
              }
              break;
            case 6:
              Array[2] = ['发明专利'];
              break;
            case 7:
              Array[2] = ['实用新型专利'];
              break;
            case 8:
              Array[2] = ['外观设计专利'];
              break;
          }
          break;
        case 2:
          Array[1] = ['参加校外英语能力测试'];
          switch (Index[2]) {
            case 0:
              Array[2] = ['TOEFL'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['105以上'];
                  break;
                case 1:
                  Array[3] = ['90~104(含90)'];
                  break;
              }
              break;
            case 1:
              Array[2] = ['IELTS'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['8以上'];
                  break;
                case 1:
                  Array[3] = ['6.5~7.5'];
                  break;
              }
              break;
            case 2:
              Array[2] = ['GRE'];
              switch (Index[3]) {
                case 0:
                  Array[3] = ['325以上'];
                  break;
                case 1:
                  Array[3] = ['310~324'];
                  break;
              }
              break;
          }
          break;
      }
      break;
  }
  return Array;
}

module.exports = {
  formatTime: formatTime,
  code2Item: code2Item,
  accAdd: accAdd,
  accSub: accSub,
  accDiv: accDiv,
  accMul: accMul,
  errImgFun: errImgFun,
  itemscore: itemscore,
}
