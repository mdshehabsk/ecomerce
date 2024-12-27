"use client";
import productOne from "@/images/product/product-1.jpg";
import { AiOutlineStar } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";
import { RiFullscreenLine } from "react-icons/ri";
import { useState } from "react";
import Review from "./Review";
import ImagePopover from "../Image_popover/ImagePopover";

const ProductDetails = () => {
  const { size, device } = useScreenSize();
  const [isExpandInfo, setIsExpandInfo] = useState(false);
  const [imagePopoverOpen, setImagePopoverOpen] = useState(false);

  const handleImagePopover = () => {
    setImagePopoverOpen(!imagePopoverOpen);
  };
  const handleToggleExpandInfo = () => {
    setIsExpandInfo(!isExpandInfo);
  };
  return (
        <div className="bg-gray-50  ">
          <div className="my-container mx-auto bg-white xs  ">
            <div className="flex flex-wrap justify-between ">
              <div className="  p-3 basis-full md:basis-5/12 lg:basis-4/12 md:sticky top-[80px] left-0 max-h-[92vh]">
                <div className="relative  md:h-full flex flex-col ">
                  <div className="mx-auto md:h-full w-full flex justify-center items-center relative ">
                    <RiFullscreenLine className="absolute top-0 right-0 text-2xl cursor-pointer" onClick={handleImagePopover} />
                    <Image src={productOne} alt="no Image"  />
                   
                  </div>
                  <div className="flex justify-center items-baseline md:block bottom-0 md:h-[120px] w-full ">
                    <div className="flex gap-1 justify-center w-full ">
                      <div className=" max-w-[80px]  lg:max-w-[110px] cursor-pointer border  border-blue-600  ">
                        <Image src={productOne} alt="no Image" />
                      </div>
                      <div className=" max-w-[80px]   lg:max-w-[110px]  cursor-pointer border border-slate-200 ">
                        <Image src={productOne} alt="no Image" />
                      </div>
                      <div className=" max-w-[80px]  lg:max-w-[110px]  cursor-pointer border border-slate-200 ">
                        <Image src={productOne} alt="no Image" />
                      </div>
                      <div className=" max-w-[80px]  lg:max-w-[110px]  cursor-pointer border border-slate-200 ">
                        <Image src={productOne} alt="no Image" />
                      </div>
                      <div className=" max-w-[80px] lg:max-w-[110px]  cursor-pointer border border-slate-200 ">
                        <Image src={productOne} alt="no Image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border-t py-3 md:border-l border-neutral-300 mt-1 basis-full md:basis-7/12 grow overflow-hidden ">
                <h1 className="text-2xl  font-semibold px-3">
                  Amazfit Pop 3S AMOLED Bluetooth Calling Smart Watch Global
                  Version {size}
                </h1>
                <div className="flex my-2 items-center gap-3 border-y py-2 px-3 ">
                  <div className="flex items-center gap-2 bg-orangeColor text-white px-2 py-2 rounded-sm ">
                    <p className="text-sm">4.8</p>
                    <AiOutlineStar className="text-sm" />
                  </div>
                  <div>
                    <p className="text-sm  font-light ">(50)</p>
                  </div>
                </div>
                {/* brand */}
                <div className="flex gap-3 border-b py-2 px-3">
                  <p className="font-semibold">Brand:</p>
                  <span className="text-mainBlueColor">Xiaomi</span>
                </div>
                {/* price */}
                <div className="mt-2 flex items-center gap-4 py-2 border-b px-3 ">
                  <div>
                    <h3 className="font-semibold text-mainBlueColor text-xl md:text-2xl ">
                      ৳ 31,900
                    </h3>
                  </div>
                  <div>
                    <del className="md:text-lg font-normal  ">20,000</del>
                  </div>
                  <div className=" p-2 px-3 bg-slate-100 rounded ">
                    <p className=" text-sm md:text-base">-25%</p>
                  </div>
                </div>
                {/* quantity */}
                <div className="flex items-center gap-2 my-2 px-3 ">
                  <div>
                    <p className=" text-base  opacity-70 ">Quantity :</p>
                  </div>
                  <div className="flex border border-slate-200  ">
                    <button className="font-bold text-xl  border-r py-2 px-4  ">
                      -
                    </button>
                    <div className="flex py-2 px-4 ">
                      <p>1</p>
                    </div>
                    <button className="font-bold text-xl  border-l py-2 px-4  ">
                      +
                    </button>
                  </div>
                </div>
                {/* buy the product */}
                <div className="flex gap-2 md:gap-6 items-center border-y py-2 px-3   ">
                  <div className="flex justify-center font-medium basis-[200px] p-3 gap-3 items-center border  hover:bg-mainBlueColor hover:text-white transition active:translate-y-1 cursor-pointer  ">
                    <IoBagHandleOutline />
                    <button className="text-sm">Add to Cart</button>
                  </div>
                  <div className="flex basis-[200px] justify-center items-center bg-orangeColor hover:bg-transparent hover:border-orangeColor border hover:text-orangeColor  text-white p-3 font-medium  gap-3  transition active:translate-y-1 cursor-pointer ">
                    <CiShoppingCart />
                    <button className="text-sm">Buy now</button>
                  </div>
                </div>
                {/* more information */}
                <div
                  className={`mt-5 ${
                    isExpandInfo ? "max-h-fit" : "max-h-[400px]"
                  }   overflow-hidden  px-3 `}
                >
                  <h2 className="font-semibold">More Information</h2>
                  <div className="flex items-center gap-3   py-2 my-2 text-sm  ">
                    <p
                      className="font-semibold
        "
                    >
                      Type :
                    </p>
                    <span> Refrigaretor</span>
                  </div>
                  <hr/>
                  <div className="flex items-center gap-3   py-2 my-2 text-sm  ">
                    <p
                      className="font-semibold
        "
                    >
                      Emi available :{" "}
                    </p>{" "}
                    <span> 2 Years official warrenty</span>
                  </div>
                  <hr/>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur doloremque eum corporis harum ratione hic impedit
                    eos perferendis non natus reprehenderit exercitationem, iste
                    autem. Iste harum, est culpa iusto omnis, voluptate maxime
                    natus, veniam hic exercitationem eius dolores totam
                    consectetur temporibus velit laborum vero officia architecto
                    unde. Dolor soluta totam qui, earum iusto culpa ab aliquid
                    quam rerum illum pariatur hic doloremque dolorem impedit?
                    Expedita rerum consectetur aspernatur recusandae dicta,
                    voluptatem eligendi corrupti obcaecati facere eos ratione
                    laudantium nobis reprehenderit cupiditate, molestias, vitae
                    tempore. Sapiente maxime necessitatibus ipsam maiores est
                    esse amet, laudantium nobis veritatis sunt placeat? In
                    distinctio nulla tempore! Nesciunt in id praesentium
                    dolorum. Nostrum laboriosam praesentium nemo voluptatem
                    cupiditate quibusdam atque libero, ad dolorem fugit aliquam,
                    quia molestiae non in vel explicabo recusandae
                    necessitatibus nisi soluta commodi delectus maxime! Eos ex
                    soluta alias, inventore modi vel quidem consequatur corrupti
                    eum dolor rem, est dignissimos id nesciunt, harum ut
                    perspiciatis? Rerum quidem expedita, optio, aut delectus
                    veniam quibusdam nostrum laborum odio harum culpa velit.
                    Eveniet architecto aliquid laboriosam omnis saepe, aperiam
                    reprehenderit facilis fuga nesciunt hic voluptas,
                    perspiciatis, in assumenda sed. Iusto cumque quod
                    voluptatibus distinctio exercitationem, suscipit ratione
                    ipsam amet alias a quaerat delectus ullam ut aut dolore
                    sequi facere accusantium. Molestiae maiores doloribus
                    numquam quidem, voluptatum eos, amet id voluptas sed
                    necessitatibus ex accusantium fuga architecto fugit
                    voluptatibus est totam. Mollitia corrupti ut consequatur
                    molestiae fuga perspiciatis explicabo modi iure eos harum
                    ipsum expedita, impedit, doloremque doloribus at culpa aut
                    voluptatum quaerat eius error possimus temporibus. Excepturi
                    blanditiis beatae dolore delectus recusandae, sequi
                    consectetur nostrum iste! A, tempora expedita distinctio
                    voluptas saepe incidunt quidem molestias alias hic molestiae
                    nulla vero dolore maiores fugiat at quis reiciendis
                    consectetur! Incidunt perspiciatis nostrum dolorum beatae et
                    non adipisci porro eum, esse illo placeat neque ab facilis
                    pariatur, doloribus blanditiis officiis provident voluptatem
                    quae voluptatibus dolorem inventore necessitatibus tenetur?
                    Porro quae, veritatis sed nesciunt fuga beatae
                    exercitationem optio distinctio tenetur aliquam blanditiis
                    magnam maxime aspernatur obcaecati, eaque unde deserunt
                    praesentium totam mollitia placeat quod. Nulla asperiores
                    incidunt odio tempora architecto cupiditate laboriosam
                    consequatur amet voluptatum enim itaque adipisci magnam
                    nesciunt totam est omnis ipsa, temporibus autem? Cum nemo
                    deleniti fugit, magnam enim, dolore at facere aut fuga
                    numquam iste eos ea error vel? Quam repudiandae optio
                    asperiores nobis perspiciatis quas neque ducimus fugit ab
                    corporis veniam ullam architecto officia sapiente ea aut,
                    nihil facilis velit officiis impedit excepturi. Aperiam cum,
                    placeat non quos numquam consectetur eos laboriosam
                    perferendis error, soluta, accusamus saepe omnis suscipit
                    ipsam in eius illum! Quos optio quam dolores nesciunt? Quas,
                    suscipit aspernatur laudantium assumenda in officiis
                    quisquam velit expedita voluptatum quos, rem reprehenderit?
                    A ut id eveniet aut quae possimus, unde fuga magnam modi
                    natus maxime minima optio aspernatur nesciunt alias ex in
                    perferendis sapiente nisi temporibus harum repellat
                    provident! Atque ipsa voluptas, consectetur officia
                    distinctio aperiam vero quia ea. Fuga incidunt officia
                    assumenda nulla, alias, a nesciunt, veritatis molestias esse
                    repudiandae inventore dicta porro? Sunt, perferendis saepe
                    rerum voluptas quidem voluptate molestiae quod. Explicabo
                    libero asperiores nulla recusandae illo, quod veritatis.
                    Minima fugiat eos, dolore deserunt harum asperiores sed
                    exercitationem quae sapiente, omnis facere voluptates sunt
                    laborum aperiam consectetur incidunt suscipit fugit dolorum.
                    Quos, totam corrupti debitis suscipit ea aliquid nostrum.
                    Aliquam, officia natus consectetur ducimus iste qui aut quas
                    tempora. Quisquam nobis reprehenderit, dolorem repellendus
                    illum provident, ducimus voluptatibus reiciendis vero quas
                    hic, deserunt iusto esse eius quam non amet harum alias?
                    Nostrum quam odio architecto facere! Amet, cum repudiandae.
                    Adipisci enim libero ullam saepe, earum vitae vero iure quas
                    dolorum aspernatur praesentium labore consequuntur optio
                    pariatur provident ratione iste molestiae sit facilis est!
                    Inventore, accusamus porro corporis nesciunt aperiam
                    molestias numquam unde voluptatum accusantium fugit expedita
                    tempora quos placeat ab suscipit animi repellendus officiis.
                    Adipisci excepturi quaerat provident maxime consectetur
                    quidem labore esse cupiditate corporis quis obcaecati, unde
                    dignissimos quibusdam. Accusantium dicta eum deserunt
                    beatae. Minus delectus fuga ratione, incidunt, dolorem
                    assumenda cum voluptatum quibusdam iste saepe illo? Illum
                    earum possimus perferendis ab fugiat veniam sunt at expedita
                    eligendi iure vitae et blanditiis hic enim iusto
                    exercitationem, voluptas dolore illo quidem deleniti. Sit
                    corrupti aliquam sint, eligendi quos nihil doloribus autem
                    laborum minus iste distinctio. Sequi sit harum molestiae in
                    commodi veniam ullam nesciunt maiores dolor corrupti iste
                    cum deleniti voluptates, recusandae, eveniet error maxime
                    consequatur praesentium necessitatibus, deserunt velit!
                    Reprehenderit, placeat dicta exercitationem illo molestiae
                    accusantium voluptatum provident voluptas aut rerum magnam
                    architecto explicabo sequi ipsum maiores dolor perferendis
                    cumque! Aut assumenda, perspiciatis sapiente necessitatibus
                    iusto in distinctio perferendis aspernatur repellendus iste,
                    corrupti quia non omnis ex reiciendis expedita facilis
                    obcaecati repellat soluta error porro similique dolorem
                    consequatur blanditiis? Libero deleniti corporis aliquid ut,
                    odit saepe voluptates, quam vero voluptas voluptate
                    similique fuga tempora debitis! Eum officiis corrupti
                    expedita reprehenderit asperiores ducimus maxime, pariatur
                    inventore, quae nostrum rerum cumque labore omnis dolor a
                    corporis! Eaque excepturi, necessitatibus mollitia nisi
                    harum deserunt adipisci aut ad nam ducimus saepe iste animi
                    exercitationem doloribus distinctio, impedit nostrum, sunt
                    nulla. Laboriosam laudantium, repellendus voluptatum numquam
                    dolor illo maiores, nulla qui earum fugiat dolores quis
                    alias aut voluptatem magnam cupiditate temporibus. Quidem
                    vero suscipit, tenetur impedit pariatur voluptates quae
                    aliquam libero perspiciatis sapiente, placeat beatae veniam.
                    Ab iure deserunt, dignissimos quod earum a nobis, sint
                    perspiciatis obcaecati vero et praesentium. Dignissimos quod
                    exercitationem repellat unde totam vel adipisci enim?
                    Explicabo aspernatur ipsum, commodi praesentium aliquid odit
                    sed, quasi molestias eligendi repudiandae fuga dignissimos
                    dolorem. Ipsam ipsum ex sequi accusamus tempora nostrum
                    rerum fugit tenetur aperiam praesentium dignissimos modi
                    iusto quibusdam possimus incidunt velit unde, voluptatum
                    nihil quod! Atque maiores cupiditate quasi animi, commodi,
                    quos ipsam soluta corrupti possimus unde, quidem nobis
                    facilis ad iusto voluptas mollitia? Similique possimus,
                    provident consequuntur eaque laborum nobis reiciendis
                    eligendi cum neque recusandae totam. Earum, natus! Inventore
                    aliquam maiores eligendi explicabo veniam possimus odit
                    suscipit atque nostrum qui recusandae, impedit incidunt
                    debitis sapiente nobis, odio quae repellat neque dolorum.
                    Facere aut minus asperiores repellendus libero nihil vel
                    iure inventore mollitia explicabo eum laborum consequatur,
                    officia corrupti eius. Cum veniam harum ad. Aspernatur.
                  </h3>
                </div>
                <div className="flex justify-center py-2 px-3 ">
                  <button
                    className="bg-transparent text-orangeColor text-sm font-medium "
                    onClick={handleToggleExpandInfo}
                  >
                    {isExpandInfo ? "READ LESS" : "READ MORE"}{" "}
                  </button>
                </div>
                <Review />
              </div>
            </div>
          </div>
          <ImagePopover handlePopoverClose={handleImagePopover} isPopoverOpen={imagePopoverOpen} />
        </div>
  );
};

export default ProductDetails;
