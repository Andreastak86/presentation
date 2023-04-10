import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className='text-center text-4xl my-4 '>
                <h1>Fra NAV til Frontend utvikler.....</h1>
                <p className=' mt-4'>På under ett år</p>
            </div>
            <div className=' ml-4 my-4'>
                <p>
                    Det hele staret i april 2022, jeg møtte opp spent og full av
                    forventninger.
                </p>
                <p>
                    Jeg hadde nesten ingen erfaring med koding fra før, men et
                    stort pågangsmot. Dette ville jeg få til
                </p>
            </div>
        </>
    );
}
