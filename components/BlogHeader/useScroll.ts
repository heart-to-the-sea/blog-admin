import { reactive, Ref } from "vue";
export function useScroll(scrollBox: Ref<HTMLDivElement>, step = 200) {
  const leftScroll = () => {
    const value = scrollBox.value.scrollLeft - step;
    scrollBox.value.scrollLeft = value <= 0 ? 0 : value;
  };
  const rightScroll = () => {
    const value = scrollBox.value.scrollLeft + step;
    scrollBox.value.scrollLeft =
      value > scrollBox.value.scrollWidth ? scrollBox.value.scrollWidth : value;
  };
  return {
    leftScroll,
    rightScroll,
  };
}
