"use client";

import Card from "@/components/Card";
import ProfileIcon from "@/assets/ProfileIcon";
import styles from "./page.module.scss";




export default function Profile() {
    // Sample progress data



    return (

            <div className={styles.home_container}>
                <Card
                    label="Username"
                    main={`name`}
                    icon={<ProfileIcon fill="white" width={20} height={20}/>}
                    size="medium"
                    withButton={false}
                />
        </div>
    )
        ;
}