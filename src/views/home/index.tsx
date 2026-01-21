import { FC } from "react";
import { MdGeneratingTokens } from "react-icons/md";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import pkg from "../../../package.json";

export const HomeView: FC = ({ setOpenCreateModal }) => {
  return (
    <section id="home" class="relative overflow-hidden pb-20 pt-[72px]">
      <div class="px-6 py-4">
        <div class="bg-default-950/40 rounded-2xl">
          <div class="container">
            <div class="p-6">
              <div class="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div class="bg-primary/10 -z-1 start-0 absolute top-0 h-14 w-14 animate-[spin_10s_linear_infinite] rounded-2xl rounded-br-none rounded-tl-none"></div>
                <div class="bg-primary/20 -z-1 end-0 absolute bottom-0 h-14 w-14 animate-ping rounded-full"></div>

                <div class="">
                  <span class="text-primary bg-primary/20 rounded-md px-3 py-1 text-sm font-medium uppercase tracking-wider">
                    CREATE SOLANA TOKEN {pkg.version}
                  </span>
                  <h1 class="md:text-5xl/tight my-4 max-w-lg text-4xl font-medium text-white">
                    Create a Solana token instantly, without coding, for your business.
                  </h1>
                  <p class="text-default-300 md:text-lg">
                    Launch you Solana Token, All in one Solana <br />
                    token development and deployment.
                  </p>

                  <div className="new_add_css">
                    <a
                      onClick={() => setOpenCreateModal(true)}
                      class="hover:bg-primary-hover pe-4 group mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-1 py-1 text-white transition-all duration-300"
                    >
                      <span class="bg-primary/20 text-primary me-2 flex h-11 w-11 items-center justify-center rounded-full group-hover:bg-white/10 group-hover:text-white">
                        <i data-lucide="image" class="">
                          <MdGeneratingTokens />
                        </i>
                      </span>
                      Create
                    </a>
                    <a className="mt-8">
                      <WalletMultiButton />
                    </a>
                  </div>
                </div>

                <div class="mx-auto h-[595px] overflow-hidden">
                  <div class="marquee grid grid-cols-2 gap-6">
                    <div class="relative m-auto flex flex-col gap-6 overflow-hidden">
                      <div class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-9", "img-14", "img-21", "img-22", "img-10"].map(
                          (image, index) => (
                            <img
                              key={index}
                              class="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                            />
                          )
                        )}
                      </div>

                      <div
                        aria-hidden="true"
                        class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                      >
                        {["img-9", "img-14", "img-21", "img-22", "img-10"].map(
                          (image, index) => (
                            <img
                              key={index}
                              class="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                            />
                          )
                        )}
                      </div>
                    </div>

                    <div class="marquee-reverse m-auto flex flex-col gap-6 overflow-hidden">
                      <div class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6">
                        {["img-6", "img-10", "img-11", "img-12", "img-13"].map(
                          (image, index) => (
                            <img
                              key={index}
                              class="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                            />
                          )
                        )}
                      </div>

                      <div
                        aria-hidden="true"
                        class="marquee-hero flex min-h-full flex-shrink-0 flex-col items-center justify-around gap-6"
                      >
                        {["img-6", "img-10", "img-11", "img-12", "img-13"].map(
                          (image, index) => (
                            <img
                              key={index}
                              class="aspect-1 h-full w-60 rounded-xl object-cover"
                              src={`assets/images/ai/${image}.jpg`}
                              alt=""
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
