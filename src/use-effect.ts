import { useState, useCallback, useEffect } from "react";

export const useEffectTest = (initialValues: Array<string>) => {
  const [oneState, setOneState] = useState<Array<string>>([]);

  const [oneAction, setOneAction] = useState<boolean>(false);

  const handleAction = useCallback(
    (values: Array<string>) => {
      if (oneAction) {
        setOneState([...values, "pepito"]);
      } else {
        setOneState([]);
      }
    },
    [oneAction]
  );

  useEffect(() => {
    handleAction(initialValues);
  }, [handleAction, initialValues]);

  return { oneState, setOneAction };
};
