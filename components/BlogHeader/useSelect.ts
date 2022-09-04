import { ref, computed } from "vue";
import { useEnumManage } from "~/store/enumManage";
export function useSelect() {
  const enumManage = useEnumManage();
  const router = useRouter();
  const actionValue = computed({
    get: () => enumManage.action,
    set: () => {},
  });
  const handleSelect = (action: any) => {
    enumManage.setAction(action);
    router.push(action.path);
  };
  return {
    handleSelect,
    actionValue,
  };
}
