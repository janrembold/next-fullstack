"use client";

import { calculateAverageTimeDifference } from "@/utils/calculateAverageTimeDifference";
import { delay } from "@/utils/delay";
import { useEffect } from "react";

export const TimeSync = () => {
  useEffect(() => {
    (async () => {
      const timeDiffs: number[] = [];

      for (let i = 0; i < 5; i++) {
        const response = await fetch("/api/timesync");
        const { now } = await response.json();
        const timeDiff = Date.now() - now;
        timeDiffs.push(timeDiff);

        await delay(1000);
      }

      const average = calculateAverageTimeDifference(timeDiffs);
      console.log("timesync", { average });
    })();
  }, []);

  return null;
};
