const global = {
  vipAnalysisUrl: '', // VIP视频解析链接
  mallLink: '', // 商城链接
  tv: [], // 电视直播源
  movie: [], // 电影直播源
  website: [], // 具体到每个视频站的VIP解析链接，如果此处有值选此处，无值选vipAnalysisUrl
};
// Object.defineProperty(global, 'data', {
//   get: function() {
//     return global;
//   },
// });
module.exports = global;
