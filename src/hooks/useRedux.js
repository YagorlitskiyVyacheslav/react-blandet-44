import { createSelectorHook, useDispatch, useStore } from "react-redux";

const useRedux = () => {
  const useSelector = createSelectorHook();
  const dispatch = useDispatch()
  const store = useStore()

  return [useSelector, dispatch, store]
};

export default useRedux;
