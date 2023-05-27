/**
 * 最大友好值
 *
 */
function maxFriendily(arr) {
  let max = 0;
  function countLeft(countIndex, pre) {
    if (countIndex < 0 || arr[countIndex] === 2) {
      return pre + 0;
    }
    return countLeft(countIndex - 1, pre + 1);
  }
  function countRight(countIndex, pre) {
    if (countIndex > arr.length - 1 || arr[countIndex] === 2) {
      return pre + 0;
    }
    return countRight(countIndex + 1, pre + 1);
  }
  const countMax = (countIndex) => {
    return countLeft(countIndex - 1, 0) + countRight(countIndex + 1, 0);
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      max = Math.max(max, countMax(i));
    }
  }
  return max;
}
console.log(maxFriendily([1, 1, 0, 1, 2, 1, 0]));

/**
 *在一堆商品中买三个，使商品总额最接近持有金额，但不能超过。如果持有金额不够买三个商品，返回-1
 * @param {number[]} goods 价格列表
 * @param {number} totalPrice 总价
 */
function sortAll(list, templateList, goods, goodCount) {
  if (templateList.length === goodCount) return list.push([...templateList]);
  for (let i = 0; i < goods.length; i++) {
    if (templateList.includes(goods[i])) continue;
    templateList.push(goods[i]);
    sortAll(list, templateList, goods, goodCount);
    templateList.pop();
  }
}
function count(goods, totalPrice, goodCount) {
  let list = [];
  let max = -1;
  sortAll(list, [], goods, goodCount);
  list.forEach(([a, b, c]) => {
    a + b + c <= totalPrice && ((max = Math.max(a + b + c)), max);
  });

  return max;
}
console.log(count([23, 33, 22, 18], 65, 3));
console.log(count([23, 33, 22, 18], 62, 3));

/**
 * 给定13张扑克牌(不包括大小王)，
 * 牌面大小为3<4<5<6<7<8<9<10<J<Q<K<A<2(2不能组成顺子)。
 * 输出最多的顺子。如果不能组成一个顺子，则输出-1
 */
function douDizhu(cards) {
  let max = -1;
  let stacks = [];
  let sample = [
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
    "2",
  ];
  for (const item of sample) {
    if (cards.includes(item)) {
      stacks.push(item);
    } else {
      max = stacks.length >= 5 ? stacks.join("") : max;
      stacks = [item];
    }
  }
  return max;
}
console.log(
  douDizhu(["5", "4", "6", "8", "Q", "A", "2", "3", "7", "J", "10", "9", "2"])
);

/**
 * 给定一串由0和1组成的方波信号，每个方波之间由0个或多个低位(0)隔开。
 * 求最长的完全连续方波。如果不存在，则输出-1
 */
function maxSquareWave(str) {
  let reg = /(01)+0/g;
  return (
    str.match(reg)?.reduce((pre, curr) => {
      return pre.length > curr.length ? pre : curr;
    }) || -1
  );
}
console.log(maxSquareWave("000101011001010010"));
