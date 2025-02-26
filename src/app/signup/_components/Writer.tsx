"use client";
import { useState } from "react";
import Image from "next/image";
import snake from "@/assets/images/snake.svg";
import type { UserTable } from "@/lib/types/usertable";
import { Button } from "../../../components/common";
import Radiobtns from "./Radiobtns";

type WriterProps = {
    prevIsAnonymous: UserTable["allow_anonymous"];
    onNext: (data: Pick<UserTable, "allow_anonymous">) => void;
    onPrev: (data: Pick<UserTable, "allow_anonymous">) => void;
};

const Writer = ({ prevIsAnonymous, onNext, onPrev }: WriterProps) => {
    const [isAnonymous, setIsAnonymous] = useState(prevIsAnonymous);
    const handleNext = () => {
        onNext({ allow_anonymous: isAnonymous });
    };
    const handlePrev = () => {
        onPrev({ allow_anonymous: isAnonymous });
    };

    return (
        <>
            <div className="inner">
                <section className="flex flex-col justify-between h-full">
                    <main className="flex flex-col justify-between h-[460px]">
                        <div className="grid gap-[10px] pt-[40px] relative">
                            <h1 className="title">
                                내 편지함에
                                <span className="text-primary"> 메세지를</span>
                                <br />
                                <span className="text-primary">남길 수 있는 사람</span>을 설정하세요
                            </h1>
                            <h3 className="text-[16px] font-semibold">한 번 설정한 내용은 올해 동안 바꿀 수 없어요</h3>
                            <div className="absolute top-32 right-0">
                                <Image width={65} height={70} src={snake} alt="snake" />
                            </div>
                        </div>

                        <Radiobtns
                            isOption1={isAnonymous}
                            onChangeHandler={setIsAnonymous}
                            text1="누구나 메시지를 남길 수 있어요"
                            text2="로그인 한 사람에게만 받을게요"
                        />
                    </main>

                    <div className="flex gap-[20px]">
                        <Button
                            type="button"
                            color="btn-white"
                            full={false}
                            label="이전"
                            handleClick={() => handlePrev()}
                        />
                        <Button type="button" color="btn-blue" full label="다음으로" handleClick={() => handleNext()} />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Writer;
