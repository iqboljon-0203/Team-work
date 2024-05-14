"use client";
import { usePathname } from "next/navigation"
import { DataBack } from "@/app/lib/data-back";
import classes from "./page.module.css"
import { useRouter } from "next/navigation";
export default function AboutSlugPage({params}){
    const router=useRouter();
    const data=DataBack.find((item)=>item.title===params.aboutSlug)
    return (
        <div className={classes.wrapper}>
            <img src={data.image_url} alt={data.title} />
            <div>
                <h2>{data.title}</h2>
                <button onClick={router.back}>Orqaga</button>
            </div>
        </div>
    )
}