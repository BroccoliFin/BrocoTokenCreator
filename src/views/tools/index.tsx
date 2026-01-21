import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuArrowRightFromLine } from "react-icons/lu";

import pkg from "../../../package.json";

export const ToolView: FC = ({
  setOpenTokenMetaData,
  setOpenContact,
  setOpenAirdrop,
  setOpenSendTransaction,
  setOpenCreateModal,
}) => {
  const tools = [
    {
      name: "Create Token",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Token Metadata",
      icon: <MdGeneratingTokens />,
      function: setOpenTokenMetaData,
    },
    {
      name: "Contact Us",
      icon: <MdGeneratingTokens />,
      function: setOpenContact,
    },
    {
      name: "Airdrop",
      icon: <MdGeneratingTokens />,
      function: setOpenAirdrop,
    },
    {
      name: "Send Transaction",
      icon: <MdGeneratingTokens />,
      function: setOpenSendTransaction,
    },
    {
      name: "Buddy Tokens",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Top Tokens",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
    {
      name: "Solana Explore",
      icon: <MdGeneratingTokens />,
      function: setOpenCreateModal,
    },
  ];
  return (
    <section id="tools" class="py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="mb-4 text-3xl font-medium capitalize text-white">
              Solana Powerfull Tools
            </h2>
            <p class="text-default-200 text-sm font-medium">
              Start working with Solana Token Creator, It allows you to create
              Solana token <br />
              by creating, deploying, airdrop, transfering and updating
              metadata.
            </p>
          </div>
        </div>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool, index) => (
            <div
              onClick={() => tool.function(true)}
              class="bg-default-950/40 rounded-xl backdrop-blur-3xl"
            >
              <div class="p-6">
                <div class="mb-4 flex items-center gap-4">
                  <div
                    class={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 ${
                      index == 0
                        ? "text-red-500"
                        : index == 1
                        ? "text-sky-500"
                        : index == 2
                        ? "text-indigo-500"
                        : index == 3
                        ? " text-yellow-500"
                        : "text-teal-500"
                    } `}
                  >
                    <i data-lucide="dribbble" class="">
                      {tool.icon}
                    </i>
                  </div>
                  <h3 class="text-default-200 text-xl font-medium">
                    {tool.name}
                  </h3>
                </div>

                <a class="text-primary group relative inline-flex items-center gap-2">
                  <span class="bg-primary/80 absolute -bottom-0 h-px w-7/12 rounded transition-all duration-500 group-hover:w-full"></span>
                  Select & try{" "}
                  <i data-lucide="move-right">
                    <LuArrowRightFromLine />
                  </i>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div class="mt-10 flex justify-center">
          <a class="hover:bg-primary-hover bg-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-all duration-300">
            More Tools{" "}
            <i data-lucide="move-right" class="">
              <IoIosArrowRoundForward />
            </i>
          </a>
        </div>
      </div>
    </section>
  );
};
