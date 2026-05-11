"use client";

import { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import styles from "./styles/Stats.module.scss";

interface CountryStat {
  country: string;
  signups: number;
}

interface WaitlistStatsResponse {
  success: boolean;
  type: string;
  message: string;
  data?: {
    total_signups: number;
    total_countries: number;
    countries: CountryStat[];
  };
}

const Stats = () => {
  const [stats, setStats] = useState<WaitlistStatsResponse["data"] | null>(
    null,
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/waitlist/stats");

        const data: WaitlistStatsResponse = await res.json();

        if (data.success && data.data) {
          setStats(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className={styles.stats}>
        <div className={styles.stats__container}>Loading...</div>
      </div>
    );
  }

  return (
    <div className={styles.stats}>
      <div className={styles.stats__container}>
        <div className={styles.stats__card}>
          <NumberFlow className={styles.stats__card_number} value={stats?.total_signups ?? 0} />{" "}
          <h3>People on <br /> the waitlist</h3>
        </div>

        <div className={styles.stats__card}>
          <NumberFlow className={styles.stats__card_number} value={stats?.total_countries ?? 0} />
          <h3>Countries with <br /> early signups</h3>
        </div>
        <div className={styles.stats__card}>
          <NumberFlow className={styles.stats__card_number} value={stats?.countries[0]?.signups ?? 0} />
          <h3>Top <br /> Country</h3>
        </div>
      </div>
    </div>
  );
};

export default Stats;
