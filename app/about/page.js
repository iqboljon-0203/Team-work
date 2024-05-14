"use client";
import Link from "next/link";
import classes from "./page.module.css";
import { DataBack } from "../lib/data-back";
export default function AboutPage(){
    return(
        <main className={classes.about}>
            <h1>About Page</h1>
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
            <Link href="/about/works">Works</Link>
        </main>
        
    )
}