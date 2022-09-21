import Marquee from "react-marquee-slider";
import styled from "styled-components";

export type Memo = {
  address: string;
  timestamp: number;
  name: string;
  message: string;
  date: string;
};

type Props = {
  memos: Memo[];
};

const Memos = (props: Props) => {
  return (
    <div>
      <Marquee
        velocity={25}
        scatterRandomly={false}
        onFinish={() => { }}
        onInit={() => { }}
        direction="rtl"
        resetAfterTries={200}
      >
        {props.memos.map((memo: Memo) => (
          <div
            tabIndex={0}
            key={memo.timestamp.toString()}
            className="hover:opacity-100 focus:ring-4 outline-none ring-neutral-700 hover:bg-neutral-800 bg-[#121212] transition-all duration-150 opacity-80 mt-[43px] mb-4 ml-10 p-6 flex flex-col"
          >
            <p className="text-xl font-extralight">{memo.message}</p>
            <span className="self-end mt-3 text-[.675rem]">
              <>
                &mdash; {memo.name} on {memo.date}
              </>
            </span>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Memos;
