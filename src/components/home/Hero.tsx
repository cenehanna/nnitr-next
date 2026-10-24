import Image from "next/image";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative z-[2] -mb-[30px] flex h-screen w-full flex-col sm:mb-0 sm:h-[110vh] sm:flex-row">
      <div className="relative h-[30%] w-full sm:h-full lg:w-[70%]">
        <Image
          src="/images/650992215_1586445863205549_262152620574679865_n.jpg"
          alt="Студенти"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative h-[70%] w-full overflow-hidden rounded-b-[30px] sm:hidden lg:block lg:h-full lg:w-[30%] lg:rounded-none">
        <Image
          src="/images/492315414_1537877657329704_901161845122679388_n.jpg"
          alt="Робототехніка"
          fill
          sizes="(min-width: 992px) 30vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] rounded-b-[30px] bg-hero-v sm:rounded-none sm:bg-hero-h" />

      <div className="absolute left-0 top-0 z-[2] flex h-[90vh] w-full flex-col justify-end px-6 pb-[60px] sm:mt-5 sm:h-full sm:justify-center sm:px-[70px] sm:pb-0 lg:px-[150px]">
        <h1 className="mb-[30px] w-full font-mont text-[26px] font-semibold leading-[1.25] text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.4)] sm:mb-5 sm:w-[70vw] sm:text-[45px] sm:leading-[1.15]">
          Приєднуйся до покоління інженерів, розробників та новаторів
        </h1>
        <div>
          <Link
            href="#"
className="mb-[50px] flex w-full items-center justify-center rounded-full bg-brand-yellow px-8 py-4 font-exo text-lg font-semibold text-brand shadow-[0_4px_15px_rgba(131,224,127,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(131,224,127,0.5)] hover:bg-[#ffff9b] sm:mb-0 sm:inline-flex sm:w-auto"          >
            Подати заявку <ArrowLongRightIcon aria-hidden="true" className="ml-[5px] size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
