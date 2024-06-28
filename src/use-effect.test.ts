import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import {
  useEffectTest,
  useEffectTestGoodSolutionUsingRef,
  useEffectTestBadSolutionWithMissedDependencies,
} from "./use-effect";

describe("useEffectTest solutions", () => {
  describe.skip("useEffectTest", () => {
    it("Should return empty array", () => {
      const { result } = renderHook(() => useEffectTest([]));

      act(() => {
        result.current.setOneAction(true);
      });

      expect(result.current.oneState).toStrictEqual(["pepito"]);
    });
  });
  describe("useEffectTestBadSolutionWithMissedDependencies", () => {
    it("Should return empty array", () => {
      const { result, rerender } = renderHook(
        useEffectTestBadSolutionWithMissedDependencies,
        { initialProps: [] }
      );

      act(() => {
        result.current.setOneAction(true);
      });

      expect(result.current.oneState).toStrictEqual(["pepito"]);

      act(() => {
        result.current.setOneAction(false);
      });
      act(() => {
        rerender(["juanito"]);
      });
      act(() => {
        result.current.setOneAction(true);
      });
      expect(result.current.oneState).toStrictEqual(["juanito", "pepito"]);
    });
  });
  describe("useEffectTestGoodSolutionUsingRef", () => {
    it("Should return empty array", () => {
      const { result, rerender } = renderHook(
        useEffectTestGoodSolutionUsingRef,
        { initialProps: [] }
      );

      act(() => {
        result.current.setOneAction(true);
      });

      expect(result.current.oneState).toStrictEqual(["pepito"]);

      act(() => {
        result.current.setOneAction(false);
      });
      rerender(["juanito"]);
      act(() => {
        result.current.setOneAction(true);
      });
      expect(result.current.oneState).toStrictEqual(["juanito", "pepito"]);
    });
  });
});
