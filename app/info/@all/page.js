import { DataBack } from "@/app/lib/data-back";
import Link from "next/link";
import classes from "./page.module.css";
export default function AllNewsPage(){
    return (
        <div className={classes.all}>
            <ul>
               {DataBack.map((item)=>{
                return (
                    <li>
                        <img src={item.image_url} alt={item.title}/>
                        <h2>{item.title}</h2>
                        <Link href={`/about/${item.title}`}>
                        <button>{item.btn_content}</button>
                        </Link>
                    </li>
                )
               })}
            </ul>
        </div>
    )
}