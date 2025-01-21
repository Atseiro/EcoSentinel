"use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import WalletIcon from "@/assets/WalletIcon";
import GlobeIcon from "@/assets/GlobeIcon";
import OrderIcon from "@/assets/OrderIcon";
import CartIcon from "@/assets/CartIcon";
import { Chart, registerables } from "chart.js";
import LineChart from "@/components/ProgressChart/ProgressChart"; // Adjust the import path as necessary
import React, { useEffect, useState } from "react";

Chart.register(...registerables);

export default function Dashboard() {
  // Sample progress data
  const progressData = [
    { date: "2023-01-01", value: 10 },
    { date: "2023-01-02", value: 25 },
    { date: "2023-01-03", value: 30 },
    { date: "2023-01-04", value: 60 },
    { date: "2023-01-05", value: 50 },
  ];

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.chart_container}>
      {/* Render the LineChart only on the client */}
      {isMounted && (
        <div className={styles.chart_container}>
          <LineChart data={progressData} />
        </div>
      )}
      <div className={styles.home_container}>
        <Card
          label="Total Sales"
          main={`$22,999`}
          icon={<WalletIcon fill="white" width={22} height={22} />}
          size="small"
          withButton={false}
        />
        <Card
          label="Quantities sold"
          main={`54`}
          icon={<GlobeIcon fill="white" width={22} height={22} />}
          size="small"
          withButton={false}
        />
        <Card
          label="Total orders"
          main={"142"}
          icon={<OrderIcon fill="white" width={22} height={22} />}
          size="small"
          withButton={false}
        />
        <Card
          label="Average Sales"
          main={`$300`}
          icon={<CartIcon fill="white" width={22} height={22} />}
          size="small"
          withButton={false}
        />
      </div>
    </div>
  );
}
