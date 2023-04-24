// src/directives/InfiniteScroll.js
export const InfiniteScroll = {
    mounted(el, binding) {
      const options = binding.value || {};
      const callback = options.callback || function() {};
      const intersectionObserver = new IntersectionObserver(entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          callback();
        }
      }, options.options);
      intersectionObserver.observe(el);
    },
    unmounted(el) {
      const intersectionObserver = el.intersectionObserver;
      if (intersectionObserver) {
        intersectionObserver.disconnect();
        delete el.intersectionObserver;
      }
    }
  }
  