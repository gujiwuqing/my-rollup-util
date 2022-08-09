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
