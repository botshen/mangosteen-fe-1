import { defineComponent } from "vue";
export const Second = defineComponent({
  setup: (props, context) => {
    return () => <div>2</div>;
  },
});
