import { useRootNavigationState } from "expo-router";

//FIXME: ыозможны ошибки
const useIsNavigationReady = () => {
  const rootNavigationState = useRootNavigationState();
  return rootNavigationState?.key !== null;
};

export default useIsNavigationReady;
