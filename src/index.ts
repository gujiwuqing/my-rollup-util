/**
 * 两数相加
 * @param a
 * @param b
 * @returns
 */
export const add = (a: number, b: number) => {
  return a + b;
};

/**
 * 两数相减
 * @param a
 * @param b
 * @returns
 */
export const reduce = (a: number, b: number) => {
  return a - b;
};

/**
 * 获取当前设备信息
 */

export const getClient = () => {
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    return "ios";
  } else if (/(Android)/i.test(navigator.userAgent)) {
    return "android";
  } else {
    return "pc";
  }
};

/**
 * 获取类型
 * @param val
 * @returns
 */
export const myTypeof = (val) => {
  var type = typeof val;
  var resObj = {
    "[object Array]": "array",
    "[object Map]": "map",
    "[object Set]": "set",
    "[object Object]": "object",
    "[object Number]": "object number",
    "[object String]": "object string",
    "[object Boolean]": "object boolean",
  };
  if (val === null) {
    return "null";
  } else if (type === "object") {
    var typeStr = Object.prototype.toString.call(val);
    return resObj[typeStr];
  } else {
    return type;
  }
};

// 数组去重
export const unique = (arr: any[]) => {
  return Array.from(new Set(arr));
}