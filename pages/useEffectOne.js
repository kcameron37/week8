import Link from "next/link"
import { useEffect,useState} from "react";
import styles from '@/styles/useEffectOne.module.css'

export default function UseEfffectOne() {

    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log(number);
        setNumber(number +1 )
    })

    return (
        <>
          <main className={styles.main}>

        
        <Link href="/">Home</Link>
        <div className={styles.header}>
            This is useEffect One 
            </div>

            {number}
        <div>

        </div>
        </main>
        </>
    )
}