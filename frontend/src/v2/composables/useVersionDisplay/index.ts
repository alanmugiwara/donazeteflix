import { computed } from "vue";
import storeHeartbeat from "@/stores/heartbeat";

export function useVersionDisplay() {
  const heartbeatStore = storeHeartbeat();

  const version = computed(() => heartbeatStore.value.SYSTEM.VERSION);

  const href = computed(
    () => `https://github.com/rommapp/romm/releases/tag/${version.value}`,
  );

  return { version, href };
}
