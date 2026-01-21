import { FC } from "react";

const Branding: FC = ({ image, title, message }) => {
  return (
    <div class="ps-4 hidden py-4 lg:block">
      <div class="relative h-full w-full overflow-hidden rounded-xl">
        <img
          src={`assets/images/ai/${image}.jpg`}
          alt=""
          class="h-full w-full -scale-x-100 transform"
        />
        <div class="bg-default-950/40 absolute inset-0">
          <div class="flex h-full items-end justify-center">
            <div class="text-start p-6">
              <h5 class="mb-3 text-xl font-bold text-white">
                Broco Solana Token Creator, <br />
                {title}!
              </h5>
              <p class="text-default-400 text-base font-medium">{message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branding;
