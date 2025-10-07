/**
 * Counter composable - reusable counter logic
 * Demonstrates how to create composables in Nuxt 4
 */

export const useCounter = (initialValue: number = 0) => {
  const count = ref(initialValue);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = initialValue;
  };

  const setValue = (value: number) => {
    count.value = value;
  };

  // Computed properties for even/odd check
  const isEven = computed(() => count.value % 2 === 0);
  const isOdd = computed(() => count.value % 2 !== 0);

  return {
    count: readonly(count),
    isEven,
    isOdd,
    increment,
    decrement,
    reset,
    setValue,
  };
};

/**
 * Async counter composable - demonstrates async operations
 */
export const useAsyncCounter = (initialValue: number = 0) => {
  const counter = useCounter(initialValue);
  const isLoading = ref(false);

  const incrementAsync = async (delay: number = 1000) => {
    isLoading.value = true;
    await new Promise((resolve) => setTimeout(resolve, delay));
    counter.increment();
    isLoading.value = false;
  };

  return {
    ...counter,
    isLoading: readonly(isLoading),
    incrementAsync,
  };
};
