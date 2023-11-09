import ProductImg from "@images/product/product-1.jpg";
import ProductImg2 from "@images/product/product-banner.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
//import all icon
import { GrFavorite } from "react-icons/gr";
// Import Swiper React components

// Import Swiper styles
import { AiOutlineStar } from "react-icons/ai";
import "swiper/css";

const ProductDetailsPage = () => {
  return (
    <>
      <div className=" mx-auto md:container">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-x-2 gap-y-4 ">
          <div className=" col-span-2 max-w-full  md:sticky top-0 h-[300px]  ">
            <Swiper
              pagination={{
                type: "fraction",
              }}
              modules={[Pagination]}
              className="max-w-full"
            >
              <SwiperSlide className="flex justify-center" >
                <img src={ProductImg} alt="" className="bg-yellow-600 max-h-full " />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center" >
                <img src={ProductImg2} alt="" className="bg-yellow-600" />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center" >
                <img src={ProductImg} alt="" className="bg-yellow-600" />
              </SwiperSlide>
              <div className="flex justify-center mt-8">
                <div className="custom-pagination max-w-[80px] flex gap-1 justify-center px-3 py-1 rounded-lg  z-10  "></div>
              </div>
              <div className="absolute right-4 top-4 z-10 ">
                <GrFavorite className="text-xl" />
              </div>
            </Swiper>
          </div>

          <div className=" col-span-3 border-t border-slate-300 px-2  ">
            <div className="my-2">
              <h1 className="text-xl md:text-2xl font-semibold ">
                Redmi 10c 5/134GB
              </h1>
            </div>
            <div>
              <div className="flex items-center gap-2 my-3">
                <div className="flex text-white bg-orangeColor items-center gap-1 px-2 py-1 rounded">
                  <p>4.9</p>
                  <AiOutlineStar className="text-sm" />
                </div>
                <div>
                  <p className="text-slate-400">(4)</p>
                </div>
                <div className="w-[2px] h-4 bg-orangeColor"></div>
                <div>
                  <button className="text-orangeColor font-[600] ">
                    Add your review
                  </button>
                </div>
              </div>
            </div>
            <div className="my-3 flex items-center gap-3 flex-wrap ">
              <p className="text-slate-900 font-semibold">
                Brand:{" "}
                <span className="text-mainBlueColor  text-medium ">
                  {" "}
                  Xiaomi
                </span>
              </p>
              <p className=" grow md:grow-0 basis-full md:basis-auto border-y-[1px] border-slate-300 md:border-0 text-slate-900 pt-2 pb-2 font-semibold">
                Sold By:
                <span className="text-mainBlueColor  text-medium ">
                  {" "}
                  Xiaomi official
                </span>
              </p>
            </div>
            <div className="price md:border-t border-gray-300 py-4">
              <div className="flex items-center gap-4 ">
                <div>
                  <h4 className="text-mainBlueColor font-semibold text-2xl">
                    ৳ 2,699
                  </h4>
                </div>
                <div>
                  <s className="text-slate-700"> ৳ 3,590 </s>
                </div>
                <div className="px-2 py-1 text-orangeColor bg-gray-100">
                  -25%
                </div>
              </div>

              <div className="my-2">
                <p className="text-orangeColor">Earn 46.8 Club Points</p>
              </div>
            </div>
            <div className="color flex items-center gap-8">
              <div>
                <p>
                  Color <span className="text-orangeColor">*</span>
                </p>
              </div>
              <div className=" border border-gray-200 rounded-md hover:border-orangeColor transition  relative group/color ">
                <img
                  src={ProductImg}
                  alt="no image"
                  className=" w-[80px] h-[70px]  "
                />
                <div className="absolute -top-8 -left-[50%]  hidden group-hover/color:block ">
                  <p className="text-white bg-slate-700 px-12 py-1 rounded-2xl text-sm">
                    Black
                  </p>
                </div>
              </div>
            </div>
            <div className="my-5 border border-gray-400 hover:border-orangeColor px-3 pb-8 py-4 ">
              <div className="border-b border-gray-300 pb-2 ">
                <h2 className="text-xl font-semibold text-black ">
                  Frequently brought together
                </h2>
              </div>
              <div className="flex items-center py-3 my-4">
                <div className="mr-4">
                  <img
                    src={ProductImg}
                    alt="no image"
                    className=" w-[80px] h-[70px]  "
                  />
                </div>
                <div className="grow">
                  <h2 className="text-base font-semibold max-w-[30%] ">
                    Haylou Watch 2 Pro Smart Watch
                  </h2>
                  <div className="flex items-center gap-4 ">
                    <div>
                      <h4 className="text-mainBlueColor font-semibold  ">
                        ৳ 2,699
                      </h4>
                    </div>
                    <div>
                      <s className="text-slate-700"> ৳ 3,590 </s>
                    </div>
                    <div className="px-2 py-1 text-orangeColor bg-gray-100">
                      -25%
                    </div>
                  </div>
                </div>
                <div>
                  <button className="bg-mainBlueColor text-white p-2 px-4 rounded-md hover:bg-orangeColor transition hover:scale-105 ">
                    Add
                  </button>
                </div>
              </div>
              <div className="flex items-center py-3 my-4">
                <div className="mr-4">
                  <img
                    src={ProductImg}
                    alt="no image"
                    className=" w-[80px] h-[70px]  "
                  />
                </div>
                <div className="grow">
                  <h2 className="text-base font-semibold max-w-[30%] ">
                    Haylou Watch 2 Pro Smart Watch
                  </h2>
                  <div className="flex items-center gap-4 ">
                    <div>
                      <h4 className="text-mainBlueColor font-semibold  ">
                        ৳ 2,699
                      </h4>
                    </div>

                    <div>
                      <s className="text-slate-700"> ৳ 3,590 </s>
                    </div>
                    <div className="px-2 py-1 text-orangeColor bg-gray-100">
                      -25%
                    </div>
                  </div>
                  <div className="my-2">
                    <button className="py-2 px-8 bg-red-200 text-red-500">
                      Out of stock
                    </button>
                  </div>
                </div>
                <div>
                  <button className="bg-mainBlueColor text-white p-2 px-4 rounded-md hover:bg-orangeColor transition hover:scale-105 ">
                    Add
                  </button>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
                    nostrum tenetur. Quasi illo harum officia porro ipsa
                    suscipit magnam et doloribus itaque incidunt eius sed,
                    asperiores fugiat obcaecati. Voluptate enim odit molestias
                    esse cum quasi, iure nostrum repudiandae, eos labore rem at!
                    A, dolor suscipit. Illo minima, magnam consectetur alias
                    quod qui hic aperiam harum ducimus eveniet inventore odit,
                    doloribus autem assumenda dolorem adipisci expedita aliquam
                    optio architecto nobis tempora nam explicabo est ullam.
                    Reiciendis tempore iusto, illo, eum dolor esse fugit placeat
                    temporibus neque ipsa magni labore, voluptatibus qui
                    voluptatem possimus velit commodi? Quod laboriosam sit,
                    voluptatum repudiandae possimus iste nulla, iure at impedit
                    necessitatibus, beatae aut maxime provident minus facere.
                    Corporis saepe, delectus, est placeat et provident hic
                    obcaecati commodi quod harum ipsa dolores? A, adipisci
                    nesciunt fugiat iusto eius excepturi rerum suscipit dolore
                    dolor repudiandae? Error, ducimus fugit eius ad, doloremque
                    voluptate nihil sed, doloribus autem praesentium odit cumque
                    nobis temporibus placeat expedita reprehenderit tempore.
                    Distinctio deleniti optio ea ratione id ex eos, maiores eum
                    iusto alias, esse voluptas repellat minima, iure fugiat!
                    Quam excepturi inventore quibusdam reiciendis, a rem qui
                    quis eveniet voluptatum ipsum ratione, neque necessitatibus
                    explicabo. Nesciunt dolorem aspernatur obcaecati corporis
                    reiciendis velit nostrum sed neque magnam deserunt quaerat
                    rem, eos nam commodi? Exercitationem itaque optio, ipsam
                    odio ab voluptatum non, cupiditate perspiciatis, assumenda
                    officia ut corporis pariatur reprehenderit suscipit dolorum
                    iusto saepe iure commodi laudantium recusandae nesciunt eius
                    ad repellendus praesentium? Quisquam consequuntur expedita
                    illum incidunt asperiores pariatur cupiditate aliquid, ipsam
                    autem maxime odit numquam quo et sequi earum consectetur
                    minus, eligendi libero ratione! Omnis beatae culpa quas,
                    odio, quam velit voluptatum laudantium illo dolore magni
                    voluptates reprehenderit fuga optio quia. Fugit eius
                    expedita quasi repellendus delectus tenetur maiores
                    asperiores reiciendis. Inventore, ratione nisi, aliquid
                    animi magnam hic exercitationem dolor vitae similique et
                    pariatur. Nesciunt at porro, numquam aliquid totam rerum
                    incidunt ex maxime. Earum explicabo reiciendis fugit non?
                    Eveniet rerum id aliquid natus officia, repellendus et
                    expedita esse, modi ab ullam quis dicta praesentium ratione
                    laboriosam dolores, facere voluptatum tempore sed. Nam
                    suscipit illum itaque at eos ipsum explicabo labore quidem
                    cupiditate dolorem praesentium dolore eaque, distinctio
                    doloribus architecto. Illo sequi mollitia hic harum libero
                    voluptatem molestias. Illo deserunt assumenda est dolorum.
                    Sit in adipisci necessitatibus explicabo quos cumque porro
                    blanditiis officia itaque provident odit modi iste, quia
                    voluptates voluptatem sapiente deleniti obcaecati natus, ea
                    aperiam veniam! Quaerat beatae dolores esse tempore tempora,
                    labore officia voluptatem consectetur maiores, fugiat
                    placeat rerum sapiente deleniti dolorem quibusdam facere
                    unde fugit eaque doloremque cum. Blanditiis animi
                    voluptatibus molestiae necessitatibus quam odio amet unde
                    dicta, maiores quo mollitia dignissimos voluptates ullam
                    voluptatum possimus, vel sunt iure nulla expedita eos
                    eligendi commodi deleniti! Corrupti, ipsa natus debitis vero
                    est mollitia placeat. Esse quia saepe ad voluptatum,
                    corporis fugiat vero iusto. Culpa cumque eligendi autem
                    aliquam aliquid voluptatem vitae pariatur, laborum veniam
                    eum obcaecati maiores beatae inventore nemo cum suscipit
                    praesentium cupiditate corrupti voluptates nulla eaque
                    laudantium. Molestias quam cum obcaecati deleniti esse amet
                    quis nobis animi voluptates suscipit? Explicabo cum, soluta
                    voluptate labore maxime et assumenda optio accusantium
                    corrupti voluptatem at? Id nostrum eaque dolore libero
                    provident tenetur iste praesentium unde veritatis architecto
                    quasi, qui impedit recusandae expedita quo nam. Aliquid est
                    ad magni numquam rem esse nostrum quo quaerat dicta nihil
                    iure culpa maxime repellat, quisquam suscipit sapiente. Esse
                    velit dolores rerum cum eaque inventore in odit deserunt
                    voluptate fugiat numquam omnis a placeat tenetur earum,
                    possimus quasi voluptatem? Quas quidem voluptates, dolores
                    fugit architecto cum ut blanditiis at soluta amet officiis
                    beatae earum, totam saepe dolore est nam fuga! Voluptatem
                    enim eveniet odit mollitia neque, dolor modi ducimus ullam
                    quam animi illo sapiente unde alias nihil, similique quas
                    tempora perspiciatis, praesentium atque molestias beatae
                    voluptate iure nisi quisquam. Vero praesentium aperiam
                    tenetur quam dolorum voluptatibus similique ratione ducimus
                    possimus corporis maiores illum explicabo numquam fugiat
                    accusantium ab pariatur, quia minima optio doloremque animi
                    corrupti quo quos. Reiciendis suscipit maxime dolorem
                    asperiores nisi fuga doloremque commodi explicabo,
                    consequatur officia illo pariatur veniam eius, error
                    architecto, voluptatibus autem? Dolorum repudiandae, facere
                    delectus eos sunt dolorem dicta non vitae corrupti voluptas
                    nihil consequatur, ab odit vero, nesciunt enim laborum
                    voluptates ipsum. Dicta, veritatis tempore fugit iusto
                    blanditiis voluptates tempora deleniti quia sint eveniet
                    dignissimos at officia commodi eum veniam nobis omnis quos
                    exercitationem. Eius atque nam, aliquid rem consequuntur
                    quasi incidunt nulla tenetur aspernatur enim eaque, odio
                    commodi. Autem obcaecati eveniet iure dolores debitis
                    suscipit doloremque aliquid dolorem in qui facere nam vitae
                    aperiam deleniti, veritatis vero! Quidem dolore commodi
                    tenetur, quod veritatis debitis enim ut nesciunt obcaecati
                    nam sunt ducimus architecto laboriosam corrupti repudiandae
                    repellendus cumque. Nisi provident non modi quis? Voluptates
                    sapiente libero, saepe hic vitae nihil dolorum sint corporis
                    earum vel quo fugit veniam et quaerat assumenda velit
                    voluptate voluptas mollitia ut. Optio ratione cupiditate
                    itaque quis velit laudantium officiis voluptates sunt, et
                    doloribus nesciunt vel dolorem quae libero assumenda ab
                    placeat sequi provident. Necessitatibus ipsa, laborum
                    eveniet cumque consequuntur pariatur amet culpa eius soluta
                    minus quis exercitationem expedita neque praesentium hic
                    sequi natus reiciendis nemo aliquid facere facilis magnam
                    quasi assumenda. Exercitationem ipsa repudiandae autem aut
                    tenetur explicabo itaque iste, hic ea aspernatur sequi rerum
                    laboriosam et nemo laborum dicta similique pariatur! Magnam
                    aut ad deserunt incidunt aliquam facere libero iste nam
                    animi totam fuga in aspernatur maiores, quidem, eius sed
                    delectus alias ut adipisci pariatur quod! Velit consequuntur
                    at adipisci pariatur modi libero quasi officia eligendi,
                    natus magnam animi impedit eius perspiciatis nostrum illo
                    laboriosam est inventore nam aut maxime! Recusandae,
                    voluptates fugiat similique reiciendis id vero. Rem sequi
                    reprehenderit debitis, necessitatibus quam similique, nihil
                    laudantium expedita blanditiis odio velit deserunt
                    recusandae vitae deleniti doloremque et nemo aut consequatur
                    laboriosam minima optio qui, officiis eius ab! Cum repellat
                    vitae eius accusamus optio voluptatibus maiores aliquid.
                    Quis, quaerat! Qui aliquam ex laboriosam est nam vel, ipsam,
                    hic nostrum quae aperiam minima iste asperiores, ipsa
                    adipisci! Eligendi expedita vitae distinctio dolorum odit.
                    Officiis at veritatis aspernatur illo quae tenetur? Iusto
                    harum voluptatem quae illo placeat eligendi, minima earum
                    enim qui illum fugit nisi incidunt consequuntur voluptas
                    molestiae vitae. Numquam modi corporis quo odio accusantium?
                    Officia recusandae in similique, eum quia fuga, cupiditate
                    optio voluptates at aliquid magnam autem sequi rem est,
                    fugiat repudiandae aspernatur animi soluta totam? Impedit
                    suscipit autem, perferendis repudiandae deserunt inventore
                    numquam, nostrum eaque dolorem ipsa voluptate sit. Quos
                    voluptatum quaerat aspernatur dolore dolor ipsum maxime
                    molestiae veniam, ducimus voluptate ipsam veritatis tempore
                    quasi quis iusto. Possimus tempora earum eveniet labore
                    veniam quam, sapiente iure doloremque at omnis quos ratione
                    provident ad error laboriosam, aliquid qui ipsa molestiae
                    deserunt, inventore deleniti quisquam? Odit necessitatibus
                    quibusdam adipisci cumque ea suscipit omnis atque optio
                    deserunt aliquid a fuga non voluptatum nisi voluptates,
                    incidunt, ducimus cupiditate modi distinctio delectus quia
                    quasi inventore blanditiis. Est soluta, libero itaque, autem
                    architecto id quis rem magnam incidunt necessitatibus
                    excepturi fugiat, quos officia eius repellendus vitae
                    blanditiis nam molestiae delectus at. Repellat eos voluptate
                    blanditiis minus aliquam enim ullam quas temporibus, sunt
                    quam assumenda id exercitationem harum corporis, recusandae
                    illum magnam. Sequi in a fugiat debitis, at molestiae
                    quibusdam. Id, suscipit vero. Totam est enim, ipsum delectus
                    id a ab soluta porro, praesentium deserunt saepe mollitia
                    omnis facilis hic placeat. Aliquid unde deserunt ducimus
                    quod? Odit commodi, vitae officia natus dolores facere.
                    Dicta minus porro officiis explicabo facilis, rem modi at,
                    nostrum quas placeat alias fugiat praesentium beatae
                    consectetur animi. Atque, facere. Modi est accusantium,
                    vitae nisi iste dicta consequuntur dolor soluta ducimus,
                    fuga sunt vero repudiandae? Cumque iste quaerat laudantium
                    quae non voluptates harum atque, vel deserunt? Doloribus
                    inventore hic autem animi fugiat illo minima quod natus
                    quidem architecto dolores ipsam, qui, esse iure. Mollitia,
                    quo adipisci nulla provident deserunt repudiandae maiores.
                    Totam non perspiciatis odio aspernatur nobis sed inventore,
                    iste numquam alias porro tempore eaque aliquid consectetur,
                    sapiente modi? Dolorem, fugiat quasi? Porro eligendi illo
                    error reiciendis debitis eveniet. Odit eos quas totam
                    perferendis sunt nesciunt molestiae officiis quia ut numquam
                    quo, amet quod voluptates incidunt minus minima ex voluptas?
                    Unde at officia illum reprehenderit, consectetur maxime
                    repellat nisi doloribus praesentium dolore laudantium
                    accusamus, cupiditate voluptates totam in delectus,
                    recusandae dolores doloremque quas dignissimos voluptatem
                    dolorem perspiciatis. Placeat nemo, ullam error optio qui
                    nobis quae nihil necessitatibus in labore saepe unde ut
                    exercitationem vel est nam iste. Beatae nesciunt autem sequi
                    ex fuga animi rem delectus mollitia omnis facere ducimus,
                    cum, nam molestias modi pariatur quas iusto, possimus sed
                    voluptatibus? Atque ipsam eius in aut ducimus sequi beatae,
                    animi ex perspiciatis, inventore repudiandae dolorum! Vero
                    nihil saepe ad earum repellat expedita ducimus, blanditiis
                    optio nemo! Voluptatem quis in ullam laudantium minus
                    reprehenderit dignissimos nihil nobis animi, cupiditate ad
                    officiis nemo provident natus. Maxime quaerat, quod maiores
                    quos fugiat ad ratione nostrum obcaecati deleniti qui
                    temporibus tempora ab totam inventore praesentium odit
                    facere, nihil minus beatae expedita harum corporis
                    reprehenderit, optio quam. Inventore eos alias architecto
                    magni ratione quia eaque quae. Dignissimos sed eveniet
                    blanditiis commodi, perferendis optio exercitationem quia
                    incidunt quasi laboriosam molestiae officia. Quaerat magnam
                    eveniet saepe, blanditiis incidunt soluta nostrum,
                    laudantium quae similique maxime placeat iusto, aliquam
                    quibusdam iure repudiandae ea esse aperiam sint modi? Porro
                    molestiae nobis aspernatur illum iste aut, aperiam,
                    inventore nulla assumenda necessitatibus nisi. Ducimus eos
                    culpa, sapiente repudiandae vitae omnis minima maxime quasi
                    rem molestiae! Dolore odit laborum, numquam vel aperiam
                    sequi? Odio deleniti quos animi illum deserunt optio cumque
                    assumenda! Quaerat fugiat accusantium sint ipsum atque harum
                    fuga autem iure, quo rem! Voluptatum magni deleniti aperiam.
                    Dolores eos animi recusandae rem. Perferendis assumenda
                    dolor libero officiis saepe distinctio odio, fugiat rerum
                    itaque numquam ex blanditiis vitae culpa dolores vero hic
                    inventore iste voluptate. Necessitatibus itaque at ducimus
                    excepturi, possimus vero qui molestias. Ratione corporis
                    dignissimos, repudiandae hic fugiat ullam earum cupiditate
                    mollitia, repellat sint esse eum unde atque doloribus veniam
                    dicta, non veritatis explicabo officiis excepturi deserunt
                    libero possimus tenetur vitae! Mollitia iusto earum
                    veritatis dicta sed quod voluptate inventore tenetur sequi
                    ipsum molestias, quam placeat perferendis, ipsa reiciendis
                    recusandae minima commodi tempora consectetur consequuntur.
                    Aspernatur eveniet, aliquid rerum placeat asperiores
                    voluptates cumque nesciunt laborum, repellendus numquam
                    culpa aperiam, et deserunt accusamus quod? Dignissimos
                    repellendus vel inventore minima accusantium! Earum a ad
                    aliquid corporis velit nesciunt ea suscipit aut natus ut
                    alias itaque voluptatem nisi animi, unde dignissimos ab
                    tempora vitae illum esse ullam adipisci. Nobis fugiat, minus
                    nisi quis eius praesentium eaque debitis atque quae,
                    reprehenderit necessitatibus quia, eveniet mollitia rerum.
                    Veniam nihil odit aut ratione sequi ad inventore illo
                    consequuntur officia voluptatum praesentium, quidem fugiat
                    dolore odio. Omnis a sed fugiat accusantium autem? Placeat,
                    sequi nesciunt et, ad dolorem ducimus alias consequuntur
                    similique itaque perferendis nobis? Blanditiis reprehenderit
                    nobis deleniti harum dignissimos, repellat reiciendis
                    similique. Magnam mollitia quam natus vel possimus.
                    Perferendis itaque ut vero nemo alias numquam, et sunt,
                    deleniti hic, esse debitis quo ad odit. Libero accusamus
                    expedita deleniti tenetur, eos rem fuga maiores repellendus
                    distinctio repudiandae, quam officia cum in? Praesentium sit
                    mollitia eum illum impedit, earum qui nam sequi quam
                    dignissimos laudantium deserunt ex, expedita ipsa assumenda
                    eaque quisquam omnis, quaerat ea obcaecati minima atque ut.
                    Ut dignissimos sit officiis sequi laudantium, sed laborum
                    eveniet repellat saepe atque numquam? Quae amet doloribus
                    blanditiis, ducimus distinctio, officia perferendis corporis
                    eius omnis accusantium laudantium, esse illum? Nostrum,
                    cumque. Sint quis harum, ipsam consectetur, doloribus quas
                    mollitia in aliquam laboriosam quia odit fugit dolorum
                    molestias possimus placeat quae facere nostrum fugiat illum
                    ratione obcaecati. Cupiditate delectus nemo animi earum quam
                    molestias vel praesentium mollitia consectetur dolores,
                    omnis consequatur impedit perspiciatis repellendus fuga,
                    sunt nihil dolorum doloribus distinctio inventore ea. Saepe
                    odit dolores quo non cupiditate a? Magni aliquam voluptate
                    ipsam asperiores totam numquam saepe ratione mollitia
                    voluptates, maiores consequuntur deserunt ad laborum
                    incidunt quo temporibus, atque eaque officia illo corporis
                    earum! Eum earum tempora provident repellat ipsam
                    repudiandae, dolorum corrupti cum nostrum aperiam
                    voluptatibus dolores exercitationem debitis consequatur
                    alias facere ut at nisi numquam saepe totam cupiditate
                    expedita accusantium maxime. Nobis dolorem architecto
                    nesciunt vero dolorum accusamus laboriosam tenetur atque
                    facere quas, possimus labore, dolore velit in eius quasi
                    natus non molestiae ipsum harum, aperiam beatae quis.
                    Reprehenderit fuga exercitationem quae neque a quod possimus
                    expedita labore enim. Non, quo autem sunt obcaecati optio
                    mollitia. Illo, ex corporis! Atque culpa expedita esse, ad
                    commodi, ipsa minus inventore reiciendis veritatis eius et
                    ut, laboriosam quas perferendis iure autem mollitia eligendi
                    nisi veniam a quae? Velit, fugit eligendi? Eos accusantium
                    minima nesciunt, atque voluptatum nemo provident recusandae
                    possimus qui! Quam accusantium quae pariatur. Iste magnam
                    quo fugit culpa quae labore? Esse tempora quasi nesciunt eos
                    repudiandae. Tenetur ratione dignissimos pariatur commodi
                    tempora quibusdam, quod nemo dolores quaerat vel
                    consequatur, possimus nesciunt animi quae enim? Quam ullam
                    obcaecati architecto voluptatem nobis saepe numquam sit amet
                    vero aliquid, expedita suscipit quaerat neque, reiciendis
                    magnam impedit temporibus molestias et recusandae omnis eius
                    voluptas? Alias hic eligendi expedita dolorem non, illo
                    accusamus eveniet nobis nemo quo, architecto suscipit
                    asperiores neque recusandae qui modi fugiat quis
                    perspiciatis aliquam magnam ut delectus libero! Libero minus
                    recusandae reprehenderit maiores beatae nemo doloremque,
                    ipsam sunt tenetur enim, quis fuga vitae deserunt! Tempore
                    quo eius totam quidem accusantium amet ipsam, ipsa ratione
                    fuga veritatis sit ea debitis et molestiae libero veniam
                    optio possimus id cupiditate? Sint, in commodi et
                    perspiciatis dolorum iure dolores deserunt optio eveniet,
                    reiciendis, nesciunt quis voluptatibus consequuntur ullam
                    cum quae voluptate soluta nulla unde aperiam enim. Eos
                    consequuntur tenetur distinctio cumque voluptatibus. Dolores
                    natus sequi amet nam corporis saepe quam. Voluptatum unde
                    placeat culpa similique? Natus nihil perferendis sed aliquam
                    minima. Praesentium, architecto. Nulla rem, nam maiores
                    alias omnis perferendis voluptatem! Et, architecto fugiat.
                    Dolorem expedita ducimus doloremque porro sed nulla quisquam
                    labore eaque, harum deserunt, ipsa possimus. Amet nostrum
                    perspiciatis earum voluptas cum ratione quam, deserunt
                    soluta illum, ullam omnis eos veniam nihil quod labore
                    dolore incidunt assumenda doloribus fuga! Suscipit aut
                    blanditiis nesciunt laudantium aliquam. Saepe fugiat,
                    ducimus sed iste magnam odit ipsa laboriosam eveniet
                    corporis doloribus dolor illo! Quam veritatis iusto illo
                    iure, nemo sapiente corrupti libero dolore illum repellendus
                    non architecto omnis iste atque consectetur maiores cumque
                    molestias suscipit! Quis suscipit ullam corrupti eaque dicta
                    vero architecto facilis placeat laborum, animi culpa autem
                    itaque delectus aliquid consequuntur beatae eum, debitis
                    cupiditate. Beatae commodi eveniet porro mollitia, eius
                    molestiae optio, alias nemo fugit harum ullam doloremque
                    eaque adipisci eligendi recusandae aut totam non. Nemo
                    incidunt eveniet impedit culpa voluptatibus autem ab at
                    nostrum non sequi dolore sed, modi vel quas perferendis.
                    Deleniti dolor dolorem ducimus, rerum fugit distinctio rem
                    saepe! Repudiandae, neque harum. Suscipit aut quo non
                    exercitationem fugiat debitis ducimus possimus nemo? Nostrum
                    dolor aliquid voluptas quis facilis veniam fugiat tempore
                    error aperiam a, excepturi natus quibusdam id consequuntur
                    ex perferendis recusandae labore earum quidem, amet
                    reiciendis. Minus neque porro corrupti illum explicabo dolor
                    consequuntur reprehenderit aspernatur dolorem. Animi,
                    placeat atque molestiae deserunt dolores non ipsam libero
                    accusantium at odit voluptatum eos autem in ex est quae
                    perspiciatis quo fugiat, debitis nemo nulla officia, minima
                    quis! Ex aspernatur reiciendis nobis, fugiat, provident
                    sapiente sit inventore debitis non, odit reprehenderit culpa
                    quibusdam! Illum, error nostrum? Sit sed quo accusantium
                    veritatis unde ab magni facilis tempora voluptatum atque
                    similique rem eius nulla dolores cumque, corrupti ut eveniet
                    blanditiis dignissimos iste. Incidunt, sit obcaecati fuga
                    doloribus nihil, fugit aperiam, eos nam rem neque aliquam
                    cumque quos. Distinctio sapiente veritatis fugit voluptate?
                    Consequatur illum illo optio error eius ratione alias quidem
                    deleniti aut nam culpa adipisci, cumque dolores expedita
                    ducimus suscipit ut quis nihil tempore voluptas perferendis.
                    Eius quae expedita nostrum excepturi soluta similique
                    magnam, fuga hic dolorem veritatis, tenetur cumque, saepe
                    reiciendis quod dolor. In illum expedita excepturi culpa
                    saepe! Earum ratione molestiae quis exercitationem cum
                    perspiciatis similique, nesciunt deleniti voluptatum qui.
                    Distinctio reiciendis eligendi fugit quod, eius eos atque
                    maxime accusantium dolor aliquid voluptas libero iusto non
                    enim ratione itaque neque ab est debitis rerum repellendus
                    cum culpa! Sapiente voluptas enim neque voluptates
                    reiciendis beatae, molestias nobis autem eius? Doloremque
                    quisquam, voluptate quidem, pariatur provident odio nesciunt
                    dolor accusamus, ipsa at facilis animi unde. Necessitatibus
                    eveniet voluptate perferendis esse libero soluta! Rerum,
                    nesciunt? At eum vero quas perferendis magni itaque, porro
                    odio totam earum magnam repellat quos impedit tempora
                    aliquam exercitationem repellendus maiores illo? Quas,
                    recusandae. Commodi maiores impedit, consectetur error
                    voluptatibus ipsam est beatae vitae. Fugiat voluptas
                    explicabo voluptatem eum sint rerum iste culpa
                    exercitationem dignissimos aliquid, ipsa neque sed, omnis,
                    veritatis delectus nam similique. Quibusdam, dolorem
                    voluptate ipsa ducimus inventore adipisci ipsum dolores,
                    recusandae quis officiis corporis. Eius at totam molestias
                    saepe. Placeat pariatur repellendus, praesentium nobis
                    reprehenderit, assumenda maiores culpa quam quasi dolore id
                    ipsa numquam molestias, doloremque repellat magni in harum
                    porro error eos amet saepe dicta optio. Praesentium,
                    consectetur quod magni, tempora blanditiis quis, laboriosam
                    aperiam soluta nobis possimus distinctio necessitatibus. Eos
                    nostrum illum suscipit maxime autem iure? Deserunt similique
                    ut asperiores aspernatur earum voluptatem ipsum mollitia
                    vitae pariatur illo corrupti modi a dignissimos voluptatum,
                    voluptas nulla sit sequi magni, at quae tempora expedita?
                    Animi vitae nemo ratione atque corrupti exercitationem
                    temporibus, autem cupiditate. Dolorum facere esse tempora
                    dolores quod vero culpa aliquam rem dignissimos cum illo
                    earum doloremque, natus tenetur quidem inventore maiores.
                    Voluptatum consectetur beatae provident suscipit.
                    Exercitationem temporibus quia fuga dignissimos cupiditate,
                    ipsam commodi ex excepturi. Dolore illum facere ratione ab
                    in quae nisi voluptatibus iusto ea eum molestiae, eius culpa
                    voluptates tenetur voluptate amet! Amet nemo iure
                    perspiciatis nam. Repellat, nihil. Dolor nulla veritatis
                    provident nostrum corrupti voluptatum reiciendis, dolorum
                    suscipit atque nam libero deleniti eaque officiis, tempora a
                    cum nihil? Qui sint ipsam nobis ad, nam vel quae voluptatum
                    fugiat architecto quaerat officia expedita molestiae
                    consequuntur omnis! Doloribus animi blanditiis ipsum
                    voluptatum corporis, aliquid cupiditate nam similique illum
                    veniam, qui vitae et modi, quae mollitia! Rerum esse
                    laboriosam ea reprehenderit ut reiciendis perferendis
                    necessitatibus accusamus, ad beatae magni a cupiditate. Enim
                    neque nemo dolores voluptatum? Quidem sint ex distinctio!
                    Optio, nam. Praesentium, eos. Obcaecati odio odit dolores
                    reprehenderit, aliquid ex officiis debitis culpa, libero
                    voluptas, laborum eaque vitae rem fugit hic! Omnis et nemo
                    ad itaque, fugit dolorem dicta. Esse hic explicabo similique
                    ipsam consectetur consequatur qui eius ratione officia
                    dignissimos provident quis perspiciatis perferendis minus,
                    obcaecati possimus voluptates voluptatem dolor! Sequi quas
                    accusantium nobis minus? Labore neque delectus eos at esse
                    qui, laudantium, dolore vitae magni omnis impedit numquam
                    debitis, nobis praesentium incidunt aliquam eaque quibusdam
                    aspernatur temporibus. Doloribus magnam libero velit fugit.
                    Repellendus accusantium voluptas vitae, ullam ipsa
                    blanditiis quos consequuntur beatae ad temporibus eum earum
                    enim atque magnam provident in iure cum eveniet. Hic, neque
                    voluptate maxime voluptatem est aut non aperiam accusantium
                    natus? Eius explicabo possimus labore at vel error voluptas
                    nobis, laudantium nesciunt dolorum, voluptatem iusto
                    molestiae laboriosam fugit eos cum, non blanditiis suscipit
                    maxime quam! Eveniet quaerat laborum blanditiis recusandae,
                    quisquam nulla saepe error explicabo aspernatur voluptatem
                    debitis! Debitis eum error explicabo, minima quo at dolorem
                    eos maxime, tempore, ducimus repudiandae voluptas
                    cupiditate? Veniam, perferendis. Corrupti, placeat!
                    Aspernatur omnis cumque, debitis culpa distinctio quam
                    cupiditate porro corporis. Possimus, dolores vitae! Ullam ab
                    mollitia soluta libero, possimus dicta quisquam illo cumque
                    neque molestiae harum iusto nemo odit, assumenda, corrupti
                    corporis aut voluptatum minima asperiores dolore doloremque
                    dignissimos! Vel recusandae ab at? Nulla doloribus
                    dignissimos eius, cumque eos ad libero voluptates quia
                    cupiditate error quae itaque rerum! Minus unde perspiciatis
                    ullam sequi a atque numquam natus exercitationem, voluptates
                    harum doloribus, dicta ex illum? Vero, molestias nostrum
                    earum vitae rerum repudiandae iusto soluta eaque in id
                    perferendis quidem maiores debitis facilis atque,
                    consectetur dolore velit maxime. Id nulla quia iste, eaque
                    exercitationem nobis illo cupiditate ea quo harum alias in
                    veniam impedit explicabo, rerum aspernatur ex. Fugiat,
                    ipsam. Neque iure pariatur, odio deleniti suscipit dolore
                    consequuntur nostrum vitae tempore culpa aut ex ratione.
                    Repellat eos non perspiciatis minima est reiciendis sint
                    quasi ullam, quos alias ducimus aperiam dignissimos
                    praesentium excepturi temporibus quas similique ab incidunt.
                    Nihil beatae eum voluptatem vero asperiores tempore autem
                    ratione porro id? Eaque consectetur tempora vitae magnam
                    labore. Distinctio deleniti officiis vero accusantium ipsam
                    alias enim. Illo, ipsum aliquid qui asperiores nihil nisi
                    delectus veritatis nam quaerat odio recusandae beatae neque
                    blanditiis architecto voluptatum accusantium culpa
                    consequatur praesentium nemo, perspiciatis quas! Placeat cum
                    ut animi assumenda dolores hic voluptates quidem ea ipsam
                    dolorem repellat corrupti vitae sapiente quas, fuga esse
                    magnam quasi cupiditate id reprehenderit molestiae minus
                    aut. Minima mollitia qui, officiis sunt asperiores atque at
                    adipisci est molestiae similique illum suscipit debitis
                    aliquid tempora? A qui unde pariatur fuga iste eos libero
                    repellendus quaerat tenetur est. Nobis fugit sunt voluptate
                    nisi commodi voluptates ipsa, laboriosam, minima officia ut
                    obcaecati laudantium assumenda similique vitae nesciunt
                    dicta incidunt. Perferendis saepe exercitationem rerum ad
                    maxime accusantium consequatur numquam, fuga iste explicabo
                    ipsa fugiat modi, natus quasi ratione dolore possimus?
                    Quibusdam labore doloremque voluptate, dicta optio in id
                    reiciendis rem autem minus error doloribus voluptatem
                    assumenda esse maxime voluptatibus nostrum sint sequi
                    placeat tempora! Porro doloremque minima, hic odio laborum
                    nam officia iste velit facilis provident id rem pariatur
                    quaerat, impedit obcaecati, laudantium libero perspiciatis?
                    Eaque porro odit architecto excepturi et tempore facere
                    voluptate ratione in cupiditate iusto reprehenderit
                    incidunt, quaerat tempora officiis molestias numquam, libero
                    consectetur voluptatem iure veniam modi nemo. Rerum ex,
                    eligendi nam minima esse distinctio vitae blanditiis
                    excepturi, eius facere veniam accusantium quis sit assumenda
                    delectus sed fugit consequatur ab atque. Magnam, voluptatem.
                    Iste reprehenderit pariatur numquam porro laboriosam quae
                    odio quibusdam dolorum incidunt fuga eaque corrupti facere
                    fugiat rem, eligendi consequatur sapiente officia. Illum,
                    commodi, quam delectus minima animi consectetur
                    reprehenderit aut velit aliquid harum praesentium omnis
                    doloribus mollitia consequuntur. Aspernatur nesciunt
                    perferendis, in maxime unde, odio error ratione ipsam
                    commodi corporis optio esse vero? Similique vel asperiores
                    culpa ipsam beatae atque id perferendis vitae nulla. Sunt
                    iure corporis autem fugit cupiditate quibusdam minima
                    eveniet ducimus quod, deserunt sequi molestias at molestiae
                    rem, ipsa in eligendi eius praesentium harum. Ipsa dicta,
                    sapiente qui cum odit quod aspernatur distinctio consequatur
                    molestiae ab minima eos soluta placeat illo accusamus totam
                    ducimus iusto magnam culpa repudiandae facilis aliquid ad
                    blanditiis ullam? Laborum, illum. Atque quam veritatis
                    perspiciatis quia deleniti et. Iure, at sequi perferendis
                    hic consequuntur porro vel assumenda deserunt quo ullam
                    adipisci culpa laudantium facilis odio similique eius ad
                    iste quasi est minima amet? Inventore quos eius accusamus?
                    Animi soluta quas facere maxime iusto doloremque, voluptatem
                    possimus suscipit iure ex distinctio nemo optio quam nulla
                    architecto perferendis tenetur sint hic quasi. Nisi deserunt
                    rerum unde facere beatae odio, voluptatem, eaque asperiores
                    nesciunt delectus labore? Illo veritatis asperiores suscipit
                    quia id, similique maxime! Excepturi sint qui officiis
                    distinctio doloremque enim recusandae neque veniam cumque
                    optio aspernatur mollitia, numquam, at aut corporis hic
                    voluptas provident sequi! Odio vero officia ullam tempore
                    quisquam officiis error accusantium dolore quibusdam!
                    Facilis accusantium amet ullam rem veniam iusto molestiae
                    porro repellat, doloremque, veritatis sapiente voluptates
                    neque recusandae quos velit iste aspernatur eaque quia vitae
                    id. Pariatur eos eum qui harum, inventore hic suscipit
                    nesciunt! Quidem molestiae, laboriosam dolore ducimus labore
                    quae. Nisi, est dignissimos aperiam et pariatur rem fuga
                    laboriosam iusto voluptatum aliquam natus commodi id
                    eligendi, possimus consectetur hic? Sed doloremque, quia
                    voluptatum, dignissimos totam tempore illum culpa nam
                    voluptates exercitationem, eaque cupiditate. Optio, odio
                    corrupti, quis assumenda cupiditate suscipit, impedit minus
                    animi necessitatibus quas consequuntur! Consectetur illo ab,
                    corrupti repudiandae magnam officiis eius tenetur nostrum ex
                    ipsum at aperiam asperiores numquam veniam inventore non
                    quaerat quasi odit itaque alias officia cupiditate. Et
                    excepturi quae aperiam aspernatur quaerat exercitationem
                    itaque ducimus veniam voluptatibus ut earum sequi amet
                    repudiandae, accusantium non quidem inventore deleniti
                    velit! Sapiente corrupti recusandae amet voluptas expedita
                    temporibus eligendi itaque in. Quia, quis. Ipsa consequuntur
                    enim modi similique dolorem error expedita, dolore sapiente,
                    cum tempore rerum accusamus. Dignissimos officia, voluptate,
                    deserunt ab veritatis ipsum error consequuntur sunt
                    provident laboriosam, aut laudantium voluptates. Rerum,
                    maxime reprehenderit, nobis dolorem nesciunt mollitia,
                    perferendis excepturi sunt facere beatae pariatur. Sed
                    dicta, officiis, velit ad vitae nisi odit beatae ipsa
                    adipisci exercitationem voluptates! Necessitatibus ducimus
                    qui neque, voluptatibus minima rem minus, explicabo nisi ut
                    quam aspernatur sed sunt ipsa in alias inventore id
                    laudantium ipsam ipsum ad. Velit, accusantium. Modi quidem
                    corporis optio aliquid officiis nostrum at eligendi itaque
                    incidunt, ea facilis unde omnis libero dignissimos.
                    Asperiores voluptates qui atque labore iusto. Laudantium
                    dolorum nesciunt dolores facilis iure, corporis possimus
                    recusandae, vitae earum expedita fuga fugit distinctio aut
                    maiores unde, quos quo vero impedit iusto commodi aperiam
                    sunt! Esse molestias odio fugit amet consequuntur
                    doloremque. Laudantium error possimus sint impedit
                    voluptatibus rem quibusdam corrupti, perspiciatis quam non
                    iusto laborum suscipit id, veniam cupiditate delectus.
                    Dolorem iste beatae eius, nemo et numquam rerum at soluta
                    quidem eligendi veniam pariatur explicabo cumque, nobis odit
                    expedita distinctio culpa a architecto! Distinctio
                    laudantium dicta odit consequatur optio dolore ducimus ex
                    aperiam ullam reiciendis repellat, eum nobis a? Quisquam ea
                    totam culpa perspiciatis, iste dolor odit illo eveniet vero
                    commodi aut libero maiores possimus mollitia, eius magni
                    ullam fugit, exercitationem dignissimos minima? Nobis,
                    laborum. Fugiat labore illum ad sint alias, quis repellat,
                    quia placeat a voluptatibus nihil reiciendis voluptas error
                    assumenda consectetur sit magnam optio explicabo sapiente
                    accusamus! Impedit quia quas recusandae accusantium porro
                    iure ad sequi harum provident autem eos deserunt totam
                    tenetur nulla sed, eaque minima aliquid nisi ex doloribus
                    magnam molestias asperiores. Velit enim nam nisi. Quis
                    nostrum voluptas molestiae porro maiores sunt, dolorem sequi
                    impedit perferendis hic dolorum qui quae nam quam ab
                    architecto quas totam, ea eaque? Debitis mollitia enim natus
                    id illum corporis eius asperiores iure incidunt aliquid,
                    fugiat quos harum molestias eos ut facere! Voluptatem quam
                    fuga maiores porro vel incidunt possimus sit modi. Esse
                    earum atque odit deserunt adipisci accusantium dignissimos
                    et pariatur aperiam reiciendis corporis nisi quam, optio sed
                    fuga ullam aspernatur! Explicabo, eius. Iure unde, saepe
                    soluta, eum nesciunt officia repellendus quas nobis, qui
                    voluptas exercitationem enim dolor sit mollitia quasi minus
                    quos illo? Nobis quisquam doloremque nesciunt amet repellat
                    asperiores consequatur fugiat totam temporibus, consectetur
                    ipsum vitae consequuntur ducimus accusamus reiciendis nam
                    repudiandae ex quae? Id pariatur ipsa blanditiis aliquam
                    exercitationem consectetur rem. Ducimus magni voluptatibus
                    unde, dolores vel ipsum velit esse eligendi ipsam accusamus
                    quia facilis dolore accusantium ex molestias provident
                    deleniti deserunt voluptate recusandae explicabo laboriosam!
                    Hic quidem consequatur ratione numquam porro nihil excepturi
                    ullam deleniti doloribus dignissimos minima exercitationem
                    et nulla pariatur, asperiores, dolore veritatis reiciendis
                    sunt qui dicta quas officiis, provident ipsa tempore. Ut
                    corporis nihil, molestiae aut ratione recusandae, eaque
                    ipsam sed dicta libero provident eligendi cumque soluta
                    consectetur exercitationem veritatis corrupti, illo placeat!
                    Necessitatibus laudantium commodi inventore odit nobis
                    molestiae quidem maiores in a, magnam, ipsa magni
                    perspiciatis. Amet possimus neque optio iste delectus, ea
                    odit fugiat sint iure fuga, soluta quo quaerat voluptates
                    unde accusantium eligendi molestias. A in incidunt voluptas
                    corrupti nemo ut molestias id ullam eaque, nisi nihil vel
                    voluptatum sint harum veniam minus alias eos dignissimos
                    obcaecati hic repudiandae sed possimus? Maiores odio illum
                    nesciunt sunt aspernatur neque soluta quo commodi autem
                    dolores dolorem consequatur obcaecati officiis saepe quia
                    sit culpa assumenda doloremque, ex eius quibusdam enim.
                    Dolore cum porro id, facere ex asperiores quibusdam quas qui
                    pariatur aliquid numquam repudiandae, enim veniam
                    repellendus impedit voluptatibus assumenda est dolores quae
                    voluptate labore quo! Quod ea voluptas ex adipisci quos
                    minima saepe, itaque dolorem tempora earum amet quam numquam
                    fuga blanditiis magni odio iste iure similique obcaecati
                    veniam eos! Odit sunt obcaecati, quisquam accusantium
                    deleniti voluptas molestias quam tenetur maxime at.
                    Laboriosam ab ipsam laudantium quos ipsum est non aspernatur
                    cumque saepe nam deleniti dolorum harum quisquam vel unde
                    autem inventore optio atque molestiae, quaerat doloribus eos
                    distinctio quam delectus. Vero alias numquam molestias.
                    Voluptate placeat iusto laudantium. Aliquid voluptates
                    quibusdam repellat laborum vel beatae doloremque
                    voluptatibus odio nemo laudantium corrupti ipsa illum
                    praesentium, labore accusamus exercitationem et quisquam
                    architecto necessitatibus. Atque, ducimus! Cumque doloremque
                    adipisci distinctio aperiam ea debitis reprehenderit sit
                    dolores. Qui similique inventore beatae autem itaque quas
                    perspiciatis reprehenderit incidunt laboriosam animi? Animi
                    excepturi eius, adipisci fuga molestiae veritatis, tempore
                    dignissimos nisi odio explicabo unde deleniti, doloribus
                    nesciunt reprehenderit ipsa voluptates. Nulla, quo
                    accusamus. Officia quae tempora repudiandae nostrum
                    accusantium corporis aut sit fugit odio, cum eveniet eaque
                    perspiciatis dolor harum pariatur ipsam quod deleniti! Cum
                    voluptatibus, distinctio autem voluptatum commodi laudantium
                    quibusdam officiis vel modi repellendus veritatis quaerat
                    nostrum enim voluptates veniam, nemo ipsam porro! Libero
                    impedit tempore ducimus? Cumque, asperiores. Id est libero
                    odit reiciendis quo aliquam possimus eum? Temporibus totam,
                    vitae asperiores eaque tempore nulla doloribus, velit nisi
                    unde corrupti natus nostrum? Earum vel ut ab provident
                    eligendi quos consectetur facilis commodi autem soluta
                    tempore nemo labore quam optio ipsum eaque molestiae, fugiat
                    incidunt dolor veniam velit, voluptas reiciendis. Tempore
                    doloribus sunt voluptatem magnam eaque qui officia ratione,
                    libero placeat dolorem in reiciendis dignissimos sequi, vero
                    voluptate cumque ducimus est. Voluptatibus voluptatum ipsum
                    neque numquam, veniam aspernatur, soluta rem ex
                    reprehenderit hic ratione placeat, rerum debitis sint qui
                    tenetur suscipit accusamus quaerat similique itaque velit
                    quidem iure autem? Doloremque facere exercitationem sequi
                    corporis, nostrum magnam incidunt, quas tenetur voluptatibus
                    nam repudiandae aut quisquam veniam consectetur, ipsa labore
                    perspiciatis! Eaque numquam velit voluptates ipsam eligendi
                    ab? Asperiores quos repellendus laborum reprehenderit,
                    cupiditate adipisci tempora sequi at facilis aperiam,
                    eveniet voluptatem quis id rem accusamus magni deserunt
                    veritatis atque ad quasi molestias! Laudantium corrupti
                    neque ipsa alias consequatur. Doloremque blanditiis sit,
                    quod dicta voluptate, libero eius suscipit iusto molestias
                    quos ducimus voluptatibus quam natus, in porro. Ab vel
                    impedit excepturi, hic soluta at iste mollitia quisquam est
                    commodi voluptatum minima, odit, tempore magni recusandae
                    atque voluptates? Maiores adipisci tempore eum quam sunt,
                    facere incidunt consequuntur laboriosam iusto sequi sed eius
                    aliquam accusamus distinctio dignissimos consectetur nobis
                    voluptatem fuga quaerat iure maxime, deserunt id veritatis!
                    Libero, illo a cupiditate doloremque suscipit et nam
                    reiciendis culpa dignissimos, ullam enim? Iste quia ab
                    maxime. Inventore at autem unde, magni odio nostrum nobis,
                    sed officiis cum omnis aperiam aspernatur aut, maxime
                    mollitia quis! Inventore assumenda eos voluptatem deleniti
                    quo culpa vel quod dolore accusantium cumque dolor
                    blanditiis dolorum iure fugit velit optio molestiae,
                    doloribus eum deserunt necessitatibus ea provident quos
                    maxime unde! Nemo repellat quas odit, error sint quod
                    consequatur officiis aperiam voluptates, provident dolorum
                    eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;
