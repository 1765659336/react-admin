// 深拷贝
export const deepCloneObj = (obj: any) => {
  let clone: any;
  // 判断 obj 是否为数组
  if (Array.isArray(obj)) {
    clone = [];
  } else {
    clone = {};
  }
  for (let i in obj) {
    // 如果为对象则递归更进一层去拷贝
    if (typeof obj[i] == "object" && obj[i] != null) {
      clone[i] = deepCloneObj(obj[i]);
    } else {
      clone[i] = obj[i];
    }
  }
  return clone;
};

// 防抖
export const VR = function (fn: Function, delay: number) {
  let timer: null | NodeJS.Timer = null;
  return function (...arg: any) {
    return new Promise((resolve, reject) => {
      timer && clearTimeout(timer);
      // setTImeout接收一个函数，如果需要给这个函数传递参数，把方法套进一个外层函数中
      timer = setTimeout(() => {
        fn(...arg)
          .then((res: any) => resolve(res))
          .catch((err: any) => reject(err));
      }, delay);
    });
  };
};
