// 名字转换颜色值
export const avatarColor = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(16)).substr(-2);
  }
  return color;
};

// 转换颜色的对比色
export const hexToRgb = (hex: string): string => {
  hex = avatarColor(hex);
  const rgb: number[] = [];

  hex = hex.substr(1); //去除前缀 # 号

  if (hex.length === 3) {
    // 处理 "#abc" 成 "#aabbcc"
    hex = hex.replace(/(.)/g, '$1$1');
  }

  hex.replace(/../g, (color: string): any => {
    rgb.push(255 - parseInt(color, 0x10)); //按16进制将字符串转换为数字
  });

  return 'rgb(' + rgb.join(',') + ')';
};
