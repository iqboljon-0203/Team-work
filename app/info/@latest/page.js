"use client";
import { DataBack } from "@/app/lib/data-back";
export default function LatestNewsPage(){
    const currentHour=new Date().getHours();
    let arr=[];
    DataBack.map((item)=>{
        arr.push(Number(item.date.slice(0,2)));
    })
    arr=arr.sort((a,b)=>{
        return b-a
    })
    return (
        <div className="latest">
            {
                DataBack.map((item)=>{
                    if(item.date.startsWith(arr[0])||item.date.startsWith(arr[1])){
                        return (
                            <div>
                                <img src={item.image_url} alt={item.title}/>
                                <h2>{item.title}</h2>
                                <button>{item.btn_content}</button>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}