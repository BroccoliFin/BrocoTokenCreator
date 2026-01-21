import { FC } from "react";
import pkg from "../../../package.json";
import { LuArrowRightFromLine } from "react-icons/lu";
import { MdGeneratingTokens, MdToken } from "react-icons/md";
import { RiTokenSwapFill } from "react-icons/ri";
import { RxTokens } from "react-icons/rx";

export const FeatureView: FC = ({
  setOpenTokenMetaData,
  setOpenContact,
  setOpenAirdrop,
  setOpenSendTransaction,
  setOpenCreateModal,
}) => {
  const feature = [
    {
      name: "Token Generator",
      icon: <MdGeneratingTokens />,
      description:
        "Start working with Solana Token Creator, It allows you to create solana token by Creating, deploying, airdrop, transfering and updating metadata.",
      function: setOpenCreateModal,
    },
    {
      name: "Get Airdrop",
      icon: <MdToken />,
      description:
        "Start working with Solana Token Creator, It allows you to create solana token by Creating, deploying, airdrop, transfering and updating metadata.",
      function: setOpenAirdrop,
    },
    {
      name: "Transfer Sol",
      icon: <RiTokenSwapFill />,
      description:
        "Start working with Solana Token Creator, It allows you to create solana token by Creating, deploying, airdrop, transfering and updating metadata.",
      function: setOpenSendTransaction,
    },
    {
      name: "Metadata Token",
      icon: <RxTokens />,
      description:
        "Start working with Solana Token Creator, It allows you to create solana token by Creating, deploying, airdrop, transfering and updating metadata.",
      function: setOpenTokenMetaData,
    },
  ];
  return (
    <section class="py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-3xl font-medium capitalize text-white">
              Choose Solana Blockchain generator
            </h2>
            <p class="text-default-200 text-sm font-medium">
               Create a Solana Token instantly <br />
              without coding, for your business.
            </p>
          </div>
        </div>

        <div class="bg-default-950/40 flex flex-wrap items-center rounded-3xl backdrop-blur-3xl">
          {feature.map((list, index) => (
            <div
              key={list.name}
              class={` w-auto grow border-b border-white/10  md:w-1/2
              ${
                index == 0
                  ? "md:border-e   "
                  : index == 1
                  ? " "
                  : index == 2
                  ? "md:border-e md:border-b-0"
                  : " "
              } `}
            >
              <div class="p-8 sm:p-10">
                <div class="bg-primary/10 text-primary mb-10 inline-flex h-16 w-16 items-center justify-center rounded-xl">
                  <i data-lucide="framer" class="">
                    {list.icon}
                  </i>
                </div>
                <h2 class="mb-4 text-2xl font-medium text-white">
                  {list.name}
                </h2>
                <p class="text-default-200 mb-6 text-base">
                  {list.description}
                </p>
                <a
                  onClick={() => list.function(true)}
                  class="hover:bg-primary-hover inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-2 text-white transition-all duration-300"
                >
                  More Tools{" "}
                  <i data-lucide="move-right" class="">
                    <LuArrowRightFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
