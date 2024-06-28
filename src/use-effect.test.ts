import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useEffectTest } from "./use-effect";

describe("useEffectTest solutions", () => {
  describe("useEffectTest", () => {
    it("Should return empty array", () => {
      const { result } = renderHook(() => useEffectTest([]));

      act(() => {
        result.current.setOneAction(true);
      });

      expect(result.current.oneState).toStrictEqual(["pepito"]);
    });
  });
});
