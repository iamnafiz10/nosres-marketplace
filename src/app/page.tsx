'use client';
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";

export default function Home() {
    const loading = useLoading();
    useTitle("Home")
    return (
        <>
            <section id="home-page-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-12">
                        <div className="col-span-3"></div>
                        <div className="col-span-6">
                            <div className="box py-6 px-4 border">
                                {loading ? (
                                    <Skeleton height={10} count={1}/>
                                ) : (
                                    <>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nihil
                                            quidem
                                            temporibus
                                            veritatis. Et, nobis!
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col-span-3">
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
