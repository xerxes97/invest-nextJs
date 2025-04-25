export const formatNumber = (num: number) => num.toLocaleString("en-US");
export const fixNumberFormat = (num?: string | number): number => {
    if(!num) return 0;
    const number = Number(num);
    if(isNaN(number)) return 0;
    return number;
};
