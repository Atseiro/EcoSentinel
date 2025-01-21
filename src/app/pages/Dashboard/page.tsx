// "use client";

import Card from "@/components/Card";
import styles from "./page.module.scss";
import WalletIcon from "@/assets/WalletIcon";
// import InvoiceIcon from "@/assets/InvoiceIcon";
import GlobeIcon from "@/assets/GlobeIcon";
import OrderIcon from "@/assets/OrderIcon";
import CartIcon from "@/assets/CartIcon";

export default async function Dashboard() {

  return (
    <div className={styles.home_container}>
      <Card
        label="Total Sales"
        main={`$22.999`}
        icon={<WalletIcon fill="white" width={22} height={22} />}
        size="small"
        withButton={false}
      ></Card>
      <Card
        label="Quantities sold"
        main={`54`}
        icon={<GlobeIcon fill="white" width={22} height={22} />}
        size="small"
        withButton={false}
      ></Card>
      <Card
        label="Total orders"
        main={'142'}
        icon={<OrderIcon fill="white" width={22} height={22} />}
        size="small"
        withButton={false}
      ></Card>
      <Card
        label="Average Sales"
        main={`$300`}
        icon={<CartIcon fill="white" width={22} height={22} />}
        size="small"
        withButton={false}
      ></Card>
      <Card
        main="Invoices"
        size="medium"
        withButton={true}
        // dataset={dataset}
      ></Card>
    </div>
  );
}
