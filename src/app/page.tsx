'use client';
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Home() {
    const loading = useLoading();
    useTitle("Home")
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="home-page-section">
                <div className="container pt-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-3"></div>
                        <div className="col lg:col-span-5">
                            <div className="box pt-6 pb-16 px-4 border">
                                {loading ? (
                                    <Skeleton height={10} count={1}/>
                                ) : (
                                    <>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum mollitia
                                            similique voluptates. Consectetur nulla omnis optio placeat porro quia quis,
                                            rem repudiandae veritatis? Amet cum dolorem ea ipsum nemo odio odit quam
                                            ratione, reprehenderit velit! Ab ad alias aperiam assumenda, at beatae
                                            delectus deleniti deserunt ducimus esse et, facere illo impedit ipsam itaque
                                            laboriosam natus nisi porro provident quam quis, quo ratione recusandae rem
                                            repellat sapiente tempora tempore tenetur unde voluptates? Consectetur
                                            ducimus earum libero magnam nesciunt nisi obcaecati porro ratione sed
                                            voluptatibus. Alias commodi debitis deleniti, dolore ea error excepturi
                                            expedita laboriosam nam numquam ratione soluta ut. Ab assumenda blanditiis
                                            consectetur cumque debitis, deleniti doloremque doloribus dolorum ducimus
                                            error illum laborum magnam minima molestiae necessitatibus pariatur quo
                                            ratione recusandae, repudiandae soluta suscipit ullam vero voluptatum. Ad
                                            alias eligendi inventore iure porro quasi soluta vitae voluptates. Aliquam
                                            deserunt dolor provident quos sit. Ab alias animi delectus distinctio
                                            dolorum, error illo iusto labore laboriosam laborum porro quaerat quos
                                            repudiandae suscipit tempore temporibus voluptate? Ad architecto, atque
                                            dolore ea fugiat magni quae quaerat quibusdam quo rem. Accusantium ad animi
                                            aperiam at consectetur consequatur debitis ducimus, ea eum eveniet expedita
                                            facere fugiat illo, illum ipsa ipsam iure laborum magnam minus natus nisi
                                            nobis nostrum quaerat quam quia recusandae rem reprehenderit repudiandae sit
                                            vel. Adipisci consectetur ipsam odio officia, repellendus totam vero
                                            voluptatem! Accusantium aliquam amet aspernatur blanditiis consectetur
                                            cumque doloribus ducimus esse exercitationem illum incidunt ipsam labore
                                            minus modi nesciunt non odio odit omnis perferendis praesentium repudiandae
                                            sequi, sint ullam vel velit vitae voluptatem voluptates? Amet commodi
                                            dolorem nulla numquam provident. Accusamus aperiam, asperiores eius, enim ex
                                            facere laborum magni quam qui quos reiciendis repellat tenetur! Accusantium
                                            alias aspernatur atque debitis eligendi esse et eveniet explicabo illo in,
                                            laboriosam nihil nostrum optio perferendis perspiciatis quaerat quas quis
                                            reiciendis rem sequi totam ullam, veritatis. At beatae cumque nobis non
                                            optio quae saepe, sit tempora! Beatae doloribus fugiat hic inventore itaque
                                            iusto labore laboriosam minus modi molestiae necessitatibus, optio porro
                                            quibusdam, quis, repellendus sapiente tenetur! At consequatur culpa
                                            distinctio dolores ea, eaque illum incidunt itaque libero magnam modi
                                            nesciunt ratione, reiciendis sed, voluptates! Debitis magnam natus nisi odit
                                            quas rerum, similique! Laboriosam non quidem ratione. Ab accusamus adipisci
                                            asperiores assumenda at beatae cum, cupiditate dolore eligendi, enim est
                                            excepturi facere modi numquam possimus rem, rerum sint unde vel voluptatem?
                                            Quo tenetur, unde. A animi architecto atque aut autem consectetur culpa, cum
                                            delectus dolores doloribus ducimus earum, eius error et exercitationem, fuga
                                            incidunt ipsum labore maxime natus optio placeat qui quia rem saepe sapiente
                                            similique sint sit sunt suscipit tempora unde vitae voluptatem. Accusantium
                                            aspernatur, commodi cupiditate dignissimos dolorem dolorum fugit ipsa minus
                                            odio, officia quas quisquam recusandae, rerum suscipit totam vitae
                                            voluptatibus! A aliquam, aliquid asperiores blanditiis consectetur
                                            consequuntur distinctio doloribus dolorum eveniet expedita hic libero
                                            molestiae odit officia, omnis perspiciatis, provident quis quisquam quo quos
                                            rerum sed temporibus vel vero voluptatem. Consectetur consequuntur corporis
                                            dolore ducimus eveniet explicabo facere facilis in ipsum laborum maiores
                                            molestias obcaecati provident, quae quaerat quis quisquam reiciendis sed
                                            suscipit ullam ut vitae voluptatum. Blanditiis consectetur, consequatur
                                            culpa cum delectus dolores enim impedit, inventore ipsa nisi obcaecati
                                            pariatur possimus quibusdam repellendus vero. Amet, blanditiis consequatur
                                            consequuntur dicta dolorem eius facilis, itaque necessitatibus optio placeat
                                            provident quibusdam totam vel veniam vitae? A accusamus alias amet
                                            aspernatur beatae consequatur corporis deleniti dignissimos excepturi
                                            expedita explicabo facilis fugiat labore maxime necessitatibus, nostrum
                                            numquam officiis omnis possimus ratione, recusandae rem rerum, sapiente
                                            similique vero voluptates voluptatibus voluptatum! Aliquam non, sunt?
                                            Adipisci corporis dolorem eos, et libero maxime nam nulla odio provident
                                            quibusdam reiciendis repellat, reprehenderit ut. Aliquam aspernatur atque,
                                            beatae consequatur culpa deleniti deserunt est exercitationem facilis fugit
                                            minima nesciunt nulla numquam porro quas, quo repellendus saepe sint tempore
                                            voluptatum? Ab ad aliquid beatae corporis cumque dignissimos dolorem
                                            doloremque ducimus esse id illum iure officiis omnis optio quaerat, qui,
                                            quisquam, reprehenderit repudiandae rerum similique tempore vitae
                                            voluptatibus. Autem deserunt doloribus ducimus esse mollitia quibusdam
                                            reiciendis? Amet blanditiis, commodi cum cumque doloremque dolorum ea eum ex
                                            expedita explicabo facilis fugiat ipsum labore laboriosam libero maxime
                                            nihil obcaecati omnis, quibusdam quidem sequi sint ullam vitae! Alias atque
                                            beatae, cupiditate doloremque earum, ipsa iusto laborum porro repellat rerum
                                            sed vel? Alias deserunt exercitationem fuga id libero nesciunt numquam quasi
                                            quia unde. Accusamus beatae consequatur cumque dolore dolorum eveniet
                                            explicabo fugiat, id iure iusto, maiores obcaecati optio perspiciatis
                                            quaerat quibusdam quod reiciendis reprehenderit sint temporibus voluptas!
                                            Dolore doloremque minus neque placeat quis quos repellat. Amet beatae
                                            cupiditate delectus ea inventore mollitia nisi omnis quae quis tempore.
                                            Adipisci aliquam atque commodi dicta distinctio, dolorum explicabo fugit
                                            illo minima nam neque perferendis perspiciatis quaerat quas quasi quos
                                            recusandae saepe sed sequi tempore temporibus ullam velit veniam vero
                                            voluptas. Accusantium asperiores at dolore et impedit incidunt itaque iure
                                            iusto magni molestiae mollitia necessitatibus nesciunt nulla odio officia,
                                            pariatur, perspiciatis possimus qui quia repudiandae rerum similique sit
                                            soluta ut voluptatum! Ab deserunt dicta, harum porro quaerat qui quia
                                            quisquam. Adipisci architecto consectetur delectus eum fugiat laborum neque
                                            officiis quam temporibus voluptas. Adipisci alias atque ea eaque incidunt
                                            necessitatibus nobis porro, possimus reprehenderit! Ad, aut deleniti dicta
                                            ducimus ea expedita facilis ipsam ipsum iure iusto laborum maiores molestiae
                                            mollitia nam praesentium quas quia quo, repudiandae saepe sapiente, sunt
                                            suscipit totam velit? Accusantium atque autem cupiditate dolor doloremque,
                                            earum iste iure iusto laudantium maiores minus nobis nostrum placeat
                                            praesentium quia saepe totam velit veniam voluptas voluptate. Aperiam
                                            dolores, esse facere iure magnam porro quo repellat sit voluptates
                                            voluptatibus. Alias animi consectetur cum dolorum facere id illum iure
                                            optio, reprehenderit. Amet assumenda delectus ducimus et fugit ipsam ipsum
                                            nam, non nulla, perferendis quibusdam ratione repellendus? A ducimus illo
                                            iure nam neque nihil quaerat quisquam unde. Harum, praesentium, soluta.
                                            Aliquid et fugit porro quos recusandae reprehenderit saepe? Ad commodi
                                            eligendi id in laborum reprehenderit totam vitae. Asperiores debitis
                                            delectus doloribus, fugit modi non nostrum numquam odit pariatur
                                            perspiciatis, rerum sequi soluta tenetur. Alias amet architecto, asperiores
                                            beatae consequatur consequuntur cum dolores ducimus ea eaque earum eligendi
                                            enim eos et eum ex fuga fugit id incidunt, itaque libero, magni maiores
                                            mollitia praesentium quae quasi qui quod quos recusandae reiciendis rem
                                            sapiente similique veritatis. Aspernatur cum itaque nam nisi quibusdam.
                                            Aspernatur blanditiis consequatur dicta, ex labore libero minus
                                            necessitatibus odit omnis perspiciatis, praesentium quisquam, recusandae
                                            reiciendis repellendus sed sequi sit voluptate. Accusantium alias architecto
                                            aut commodi corporis delectus ea eaque eius eligendi et explicabo facere
                                            harum illum in incidunt iste, iure laborum laudantium modi molestias nobis
                                            perferendis placeat porro possimus quaerat quis quisquam quod repellat
                                            repudiandae sapiente sed similique, sint sit ut velit veniam voluptates?
                                            Aperiam atque autem dicta eos est explicabo pariatur quas, quia quibusdam
                                            quidem quod reprehenderit tempore temporibus tenetur ullam! Culpa dolorem
                                            fuga mollitia nulla placeat repellendus tempore. Aspernatur atque deleniti
                                            exercitationem laboriosam pariatur quia, quod. Ab architecto autem,
                                            dignissimos hic quo sit voluptate. Architecto deserunt ex maxime mollitia
                                            natus, nihil ullam? Architecto aspernatur, commodi cum debitis deleniti
                                            eligendi est et harum id iusto laboriosam laudantium modi molestias nisi non
                                            officia praesentium provident quasi quidem ratione, recusandae rem rerum
                                            soluta sunt tempore ullam, velit vitae. Consequatur dolor eaque earum est
                                            laborum maiores maxime minima necessitatibus nihil nisi perspiciatis
                                            possimus quibusdam, quod reprehenderit sed unde veritatis vero. Consequatur
                                            eligendi facere ipsa maiores nesciunt placeat unde vero. Alias blanditiis in
                                            nemo, sequi sit sunt ullam voluptatibus. Asperiores aut consequatur culpa
                                            dicta dolor dolore doloremque eligendi fuga illo, impedit iste iure magnam
                                            magni minima nam pariatur provident quam quas quasi qui quisquam reiciendis
                                            sapiente sed similique tempora ut vero? A ab, accusantium animi at atque
                                            blanditiis dolorum esse eveniet fugit id laborum mollitia neque omnis quae
                                            quasi ratione, repellendus sit suscipit temporibus unde. Delectus
                                            dignissimos error id? Accusamus debitis, facilis hic iusto minima suscipit.
                                            Consequuntur incidunt ipsam itaque nihil placeat quidem repudiandae sed
                                            tenetur voluptas voluptates. Ad alias aliquam aliquid blanditiis delectus,
                                            et eum facilis, harum hic incidunt iusto nemo non numquam obcaecati odio
                                            porro quam quasi, quibusdam quidem quos ratione saepe sit suscipit ut vitae
                                            voluptas voluptate voluptates. Assumenda cumque distinctio in magni minus
                                            natus perferendis quos repellendus temporibus totam? Consequatur eius ipsam
                                            soluta unde voluptas. Adipisci consequatur earum illo libero minus nobis,
                                            officiis perspiciatis similique! Aliquam assumenda, corporis cumque debitis
                                            deleniti dolorem ea et eveniet fugiat fugit ipsa laboriosam magni minus
                                            nesciunt, nobis odit porro soluta! Adipisci aperiam cum ducimus eaque ipsum.
                                            Debitis dolor iure, libero nisi officia placeat saepe tempore totam velit,
                                            vitae voluptate voluptatibus? Animi aspernatur aut autem consectetur
                                            consequatur ducimus eius et fuga in inventore labore nemo nesciunt nobis
                                            obcaecati, omnis qui saepe sed, similique sit voluptate? Aliquam commodi
                                            dolor dolore eius fugiat fugit illum natus, sapiente tempora. A, alias
                                            aliquid autem blanditiis commodi deleniti distinctio eos esse eum explicabo
                                            facilis fuga hic illum in iste itaque iure laborum libero, minima molestias
                                            necessitatibus nihil nisi numquam optio pariatur qui reiciendis rem sunt
                                            tempora ullam ut veritatis voluptatibus voluptatum. Aliquid blanditiis culpa
                                            cum earum eius eveniet ex expedita, hic illum incidunt itaque,
                                            necessitatibus numquam possimus provident quas quis recusandae sint soluta
                                            temporibus tenetur! Accusantium fuga impedit nihil nobis quasi, saepe?
                                            Aspernatur dolorem enim, labore laboriosam maiores minima praesentium
                                            quibusdam quisquam rerum sed sequi similique. Architecto ex modi quia
                                            sapiente suscipit? Deleniti explicabo facilis fugit illum maiores, minima
                                            neque quisquam recusandae reprehenderit rerum, tempora ut vero voluptatum.
                                            At culpa facilis veniam! A accusamus alias asperiores assumenda cum
                                            dignissimos eligendi eos excepturi fuga illo ipsam ipsum iste itaque
                                            laboriosam, molestiae nesciunt numquam omnis porro possimus provident quae
                                            quaerat quibusdam quo ratione repellat temporibus vel! Ab alias aliquid
                                            dicta distinctio ea facere id impedit ipsa iusto necessitatibus nobis odio
                                            officiis, perferendis porro quisquam reiciendis repellendus sit tempora
                                            tempore tenetur! Culpa, odio, veniam. Ex in ipsam molestiae nisi, quisquam
                                            quod. Alias amet aspernatur blanditiis error expedita harum iste maxime
                                            mollitia nam nulla omnis possimus quis, repellat repellendus reprehenderit,
                                            temporibus, voluptate! Harum ipsa iste, optio perspiciatis rem repellendus
                                            totam. Assumenda, omnis, voluptas. Ducimus eaque earum eligendi facilis hic
                                            illo, iure magni nam numquam placeat, porro quia quo rem repudiandae rerum
                                            sapiente soluta velit veniam voluptates voluptatibus. Aspernatur, ea
                                            molestiae nostrum omnis quidem quis temporibus? Ducimus eaque enim error
                                            est, ex laborum laudantium magnam magni molestiae molestias odio odit
                                            perspiciatis provident quaerat quas quidem recusandae reiciendis vero. Aut
                                            corporis, deleniti ex laborum necessitatibus similique voluptate? A
                                            accusantium adipisci aliquam animi assumenda beatae delectus, deleniti dolor
                                            dolore esse eveniet hic illum ipsa iure magnam nemo pariatur quae qui
                                            ratione repellendus repudiandae rerum saepe totam ullam voluptates. A
                                            eveniet minima natus porro repudiandae! Ipsum odit, veritatis. Explicabo
                                            magnam non pariatur quam recusandae! Commodi corporis cumque debitis dicta
                                            dolor eos excepturi facilis, fugit iste magni neque non placeat suscipit
                                            unde veritatis. Ad cum deleniti eius enim modi molestiae odio quam similique
                                            soluta tempore! Alias aperiam asperiores blanditiis consectetur corporis cum
                                            cumque distinctio dolor dolore doloribus dolorum ea, earum error esse
                                            exercitationem harum hic impedit ipsa iure magni necessitatibus nemo nisi,
                                            nostrum nulla odit officia optio porro provident quae qui quidem repellendus
                                            sit soluta ut veniam veritatis vero. Deleniti et impedit neque pariatur
                                            porro quae quaerat recusandae, voluptatum? A animi odio quidem. Ad alias,
                                            assumenda at atque consequuntur cum dicta, dolorem eos error eveniet fuga in
                                            iusto laudantium necessitatibus officiis quam, quod? Adipisci amet
                                            doloremque ducimus explicabo iusto, maiores possimus quam sequi? Accusantium
                                            dignissimos dolorem esse est ipsa laudantium modi placeat quis quod
                                            repellat! A accusantium amet aspernatur beatae cumque delectus dignissimos
                                            distinctio doloribus dolorum enim eum harum id illum impedit, inventore
                                            itaque minima modi molestiae nihil odio quisquam quo ratione reiciendis
                                            repudiandae tempora ut vitae? Aliquam beatae, ipsa ipsum itaque, modi
                                            molestiae neque nisi quam qui quidem quo suscipit? Deserunt eligendi porro
                                            quasi sint soluta. Amet asperiores consequuntur enim eum fuga itaque, iure
                                            iusto libero natus odio officiis qui quod ratione rerum veniam? Beatae
                                            delectus laudantium magni nisi odit provident repudiandae? At consectetur
                                            cupiditate explicabo quasi repudiandae. Alias aut, commodi, culpa dicta
                                            dignissimos dolor eius illo magnam magni maxime minima non nostrum nulla
                                            obcaecati odit possimus quasi, quidem saepe sapiente soluta vero voluptate
                                            voluptatem voluptatibus. Aliquam aperiam dolorum ducimus esse harum in
                                            mollitia neque omnis sit temporibus? Molestiae quam quia totam voluptas!
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mr-[10px]">
                            <div className="box-one bg-red-500">
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at aut distinctio
                                    doloribus ea eaque eius et eum excepturi id in incidunt labore laudantium modi nihil
                                    nisi nobis odio officia pariatur perferendis possimus quaerat quam quia quidem quis
                                    quo quos, reprehenderit repudiandae similique soluta sunt suscipit temporibus, totam
                                    ut voluptatem voluptatum. Accusamus animi aspernatur autem consequuntur, cumque
                                    deserunt distinctio dolor doloribus earum, eius est hic incidunt laborum libero
                                    mollitia obcaecati praesentium quae qui quisquam reiciendis, sed sint sunt suscipit
                                    vel voluptatum. Adipisci commodi, cum deleniti doloremque eligendi, ex excepturi
                                    iste nostrum numquam, repellendus soluta vel vero voluptas? Aperiam, quisquam?
                                </h4>
                            </div>

                            <div className="mt-4 box-two bg-red-500">
                                <h4>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet at aut distinctio
                                    doloribus ea eaque eius et eum excepturi id in incidunt labore laudantium modi nihil
                                    nisi nobis odio officia pariatur perferendis possimus quaerat quam quia quidem quis
                                    quo quos, reprehenderit repudiandae similique soluta sunt suscipit temporibus, totam
                                    ut voluptatem voluptatum. Accusamus animi aspernatur autem consequuntur, cumque
                                    deserunt distinctio dolor doloribus earum, eius est hic incidunt laborum libero
                                    mollitia obcaecati praesentium quae qui quisquam reiciendis, sed sint sunt suscipit
                                    vel voluptatum. Adipisci commodi, cum deleniti doloremque eligendi, ex excepturi
                                    iste nostrum numquam, repellendus soluta vel vero voluptas? Aperiam, quisquam?
                                </h4>
                            </div>

                            <div className="mt-4 sticky top-16">
                                <footer>
                                    <ul className="flex items-center gap-2 text-gray-500 text-[12px]">
                                        <li className="hover:text-primary">
                                            <Link href='#'>About Nosres</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Privacy</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Terms</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Careers</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Support</Link>
                                        </li>
                                    </ul>
                                    <h4 className="mt-[8px] text-graycolor text-[12px]">© {currentYear} Nosres
                                        Inc. All
                                        rights
                                        reserved.</h4>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
