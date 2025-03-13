/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 2,
    text: "特等奖",
    title: "特等奖",
    img: "../img/0.png"
  },
  {
    type: 2,
    count: 8,
    text: "一等奖",
    title: "一等奖",
    img: "../img/1.png"
  },
  {
    type: 3,
    count: 16,
    text: "二等奖",
    title: "二等奖",
    img: "../img/2.png"
  },
  {
    type: 4,
    count: 25,
    text: "幸运奖",
    title: "幸运奖",
    img: "../img/l1.png"
  },
  {
    type: 5,
    count: 30,
    text: "三等奖",
    title: "三等奖",
    img: "../img/3.png"
  },
  {
    type: 6,
    count: 25,
    text: "幸运奖",
    title: "幸运奖",
    img: "../img/l2.png"
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 4, 8, 10, 10, 10];

/**
 * 卡片公司名称标识
 */
const COMPANY = "DreamAwake";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
