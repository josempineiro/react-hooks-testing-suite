import { useRef, useState, useCallback, useEffect } from "react";

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

export const useEffectTestGoodSolutionUsingRef = (
  initialValues: Array<string>
) => {
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

  const initialValuesRef = useRef(initialValues);

  useEffect(() => {
    initialValuesRef.current = initialValues;
  }, [initialValues]);

  useEffect(() => {
    handleAction(initialValuesRef.current);
  }, [handleAction]);

  return { oneState, setOneAction };
};

export const useEffectTestBadSolutionWithMissedDependencies = (
  initialValues: Array<string>
) => {
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
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, [handleAction]);

  return { oneState, setOneAction };
};
