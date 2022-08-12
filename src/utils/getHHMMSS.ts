export const getHHMMSS = (seconds:number):string =>
  ` ${Math.round(seconds / 3600)} : ${Math.round((seconds % 3600) / 60)}:  ${Math.round((seconds % 3600) % 60)}  `;
