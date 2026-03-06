import "./App.css";
import { motion, useScroll } from "motion/react";

function App() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="py-20 px-44 bg-black text-white text-center">
      {/* <motion.div
        className="box"

        initial={{
          // x: 500
        }}
        animate={{
          // x: [0,800,800,0,0],
          // y: [0,0,300,300,0],
          // rotate: [0,360,0,-360,0]
          // rotate: 360
        }}
        transition={{
          // duration: 4,
          // delay: 1
          // repeat: Infinity,
          // ease: "anticipate"
        }}

        whileHover={{
          // backgroundColor: "red"
        }}
        whileTap={{
          // scale: 0.8
        }}

        drag
        whileDrag={{
          scale: 0.8
        }}
        dragConstraints={{
          top: 0,
          left: 0,
          right: 1000,
          bottom: 50
        }}
        // dragDirectionLock = "true"
      >
        app
      </motion.div> */}

      <motion.div className="bg-red-500 w-full h-5 fixed top-0 left-0 origin-left rounded-2xl"
      style={{
        scaleX: scrollYProgress
      }}
      >
      </motion.div>

      <h2>Scroll Test</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quas
        modi dolorem debitis quibusdam at laudantium. Doloribus blanditiis
        adipisci dolorum accusamus possimus distinctio culpa saepe rem esse
        placeat, expedita, tenetur necessitatibus vel ducimus corrupti. Ex
        corporis, laboriosam dolore, obcaecati rem vero deleniti mollitia
        facilis distinctio illum maiores dolorem neque laudantium aperiam
        placeat id iste nesciunt nam debitis blanditiis! Voluptatum esse,
        voluptatibus eius repellendus enim pariatur? Doloremque iusto totam
        incidunt rem ab tenetur distinctio vel, itaque harum ullam maiores
        tempora obcaecati architecto, quaerat libero est mollitia maxime earum
        soluta officia labore cum. Sit ullam non culpa adipisci, et ratione
        quibusdam itaque quam est ex ipsam nam consequuntur exercitationem
        magnam, impedit consequatur nisi veritatis deserunt illo id consectetur?
        Voluptates, ut eos molestias numquam voluptatum cupiditate illum earum
        sequi similique dolorem porro? Vero hic nisi corporis nulla doloremque
        eos maxime autem libero iusto quis, incidunt architecto sunt voluptatum
        rerum! Praesentium consequuntur porro tempore molestiae nostrum rerum
        quam non culpa! Vitae sapiente voluptatum reprehenderit repudiandae
        officiis sequi earum asperiores sit neque, harum maiores, pariatur saepe
        rerum at enim quidem id dignissimos natus debitis voluptate, doloribus
        corporis quos? Nihil dolores quo sit porro consequatur autem adipisci
        necessitatibus corrupti eum, aspernatur pariatur amet! Deleniti vero
        voluptatem deserunt ea id iure quasi, reprehenderit placeat illum magni
        eligendi saepe ab a temporibus neque alias maxime nihil pariatur eos,
        facilis quis dignissimos laboriosam culpa voluptatibus. Est delectus
        molestias exercitationem sit placeat dignissimos veniam atque, beatae
        laudantium minima inventore nesciunt aperiam cum doloribus debitis saepe
        dolor laborum explicabo deleniti minus sapiente excepturi asperiores
        blanditiis aliquam? Ea magni, ut incidunt in voluptate repudiandae
        numquam itaque error ducimus deleniti aliquam architecto maiores dolor.
        Iusto aut magni error neque repellat. Quo eum assumenda, at aut nobis
        iste dolore, cupiditate esse facere reiciendis error? Praesentium, minus
        doloremque placeat laudantium corrupti tempora aliquid adipisci.
        Deserunt quam delectus accusamus hic consequuntur eligendi illo
        quibusdam distinctio, debitis vitae soluta dolorem praesentium esse
        exercitationem blanditiis ab deleniti harum aut iusto in quas tenetur
        dolores est? Quam modi accusantium maiores nihil, in esse accusamus
        ducimus suscipit dolores molestias tenetur laboriosam non enim itaque
        quod cumque ab, velit sed necessitatibus? Necessitatibus eos fuga
        corrupti quisquam repellendus nobis, quo ex inventore est! Enim nobis
        voluptatibus, qui maxime temporibus nam mollitia eligendi aliquid quo,
        facilis labore. Incidunt inventore consectetur amet enim ab sapiente sit
        architecto dolor distinctio beatae quam, ex, consequatur optio quae
        veniam voluptas neque autem necessitatibus doloribus qui ullam repellat.
        Neque, eligendi. Rem doloremque quas sint nesciunt corporis sunt vel
        molestiae ullam ex quibusdam a quam facere, vitae tempora debitis atque
        sequi dolorum alias, repellendus soluta esse. Maiores autem facere unde
        eligendi numquam! Nemo pariatur ad officiis autem rem voluptatum quaerat
        tempore voluptatibus eligendi quas. Nulla ratione iste aspernatur! Fuga,
        voluptates delectus. Sed deleniti rerum corrupti itaque laudantium illo
        minima quaerat beatae id alias reprehenderit voluptatem eius hic quasi
        corporis, quibusdam sapiente et in iste amet fuga, architecto delectus?
        Sunt ipsam doloremque, odit repudiandae hic suscipit accusamus ab
        impedit excepturi voluptate sit minus architecto magnam, quae blanditiis
        cupiditate ullam explicabo?
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
        ratione doloribus nulla placeat facilis doloremque ipsam. Reiciendis,
        saepe unde quaerat error explicabo quod. Cupiditate voluptates illum
        reprehenderit neque doloribus deleniti aut tempore ipsa veritatis dolor
        ducimus, facilis magni nam beatae sed minus amet inventore corporis
        culpa quo? Qui, nemo autem consectetur fuga suscipit, culpa voluptas eos
        consequatur dignissimos eaque officiis. Velit quidem tenetur libero
        quod, a quibusdam ad laborum minima consequuntur! Dolores itaque
        blanditiis possimus error ut provident animi consequuntur ipsam in neque
        corrupti ullam distinctio suscipit a magni maiores et, nisi dignissimos.
        Delectus et, dolore deserunt perspiciatis voluptatem ipsa iste nobis
        natus ratione iure ad repudiandae, minus blanditiis, a numquam unde
        omnis expedita beatae dolorum voluptatum porro optio ipsam? Eaque fuga
        vero cupiditate excepturi quibusdam maiores id reiciendis necessitatibus
        impedit ea expedita, voluptates obcaecati voluptate exercitationem,
        eveniet voluptas veniam? Minima, perspiciatis? Consequatur saepe nulla
        odio laudantium ad quisquam magnam ratione earum obcaecati est iure,
        inventore velit porro fugiat perspiciatis dolorem ipsum quidem
        praesentium voluptatum reiciendis! Eius vero omnis aliquid dignissimos
        debitis facilis similique provident tempora asperiores ducimus! Est nemo
        cum tempora enim repellendus explicabo illum quibusdam, temporibus eius
        magni, voluptatibus adipisci deleniti amet velit quae molestiae commodi
        laborum nulla, veniam et non? Possimus ad placeat aspernatur culpa
        inventore iusto sint rem cumque repellendus, qui cum, quaerat nulla!
        Repellat sed aliquam porro reprehenderit est, natus possimus quod
        aperiam sapiente? Vero ducimus accusantium fuga voluptates quis.
        Perspiciatis, laudantium obcaecati. Voluptate sit maxime repellat fugiat
        cumque voluptatem cum quisquam illo placeat mollitia, fuga modi
        molestias nesciunt vitae, nobis culpa voluptatum similique veritatis.
        Alias, voluptas inventore commodi suscipit officiis facilis esse, odit
        beatae necessitatibus architecto qui tempore. Exercitationem provident
        est inventore ut tempora dolorum, odit consequatur eum laudantium nemo
        reprehenderit aliquam vel alias? Recusandae ratione laboriosam quidem
        distinctio nesciunt corporis ipsa dolores aspernatur, exercitationem
        magnam aut dolorem id debitis quae fugit deleniti ut iste suscipit vel
        tenetur quaerat. Vitae, ducimus ea numquam quisquam natus aperiam illum
        aut nihil, tenetur ipsa doloremque, amet molestiae totam. Eaque, nemo
        facere quia at numquam eveniet cum a recusandae optio laudantium
        adipisci perspiciatis impedit, voluptas ab amet laborum. Dignissimos,
        quasi. Quos iure dolorem debitis atque dolores corporis odio incidunt
        tenetur natus est quod libero, rerum recusandae veniam placeat fugiat?
        Ipsam iure similique omnis fugiat quidem cupiditate cum sapiente magnam
        doloribus obcaecati animi quasi ut veritatis corrupti suscipit
        consectetur, magni id eos minima dolorum sit dolore corporis est.
        Voluptatibus commodi nostrum culpa voluptatum similique magnam
        doloremque cumque, eum blanditiis quod voluptate tempore soluta amet
        eveniet necessitatibus facere suscipit sapiente neque corrupti.
        Cupiditate quos saepe excepturi modi suscipit sint corporis fugit rerum
        labore eum, dolores incidunt, velit ea obcaecati voluptatibus
        blanditiis. Adipisci soluta, reiciendis asperiores accusamus laborum cum
        similique laboriosam odit velit consectetur ex excepturi tempora et non,
        est cupiditate repudiandae molestiae corrupti. Aliquid obcaecati nam
        commodi dolor vitae maxime distinctio saepe maiores officia repellat
        doloribus, cupiditate totam consequatur repudiandae nostrum magnam in
        necessitatibus reiciendis atque magni, illum, ea ex? Nemo minima est
        consectetur nisi itaque, distinctio accusantium sint neque!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum
        accusantium consectetur. Iste quod eos deleniti id tempora! Sit eaque
        cumque tempore explicabo nobis ipsum culpa facere praesentium nostrum,
        deleniti reiciendis architecto, ad, voluptates voluptatum itaque vel
        nemo fuga temporibus autem suscipit. Veniam enim quod quibusdam, ratione
        deleniti natus dolore consectetur rerum alias repellat reprehenderit
        ipsa ea tenetur sed quis? Aperiam, repellat dolorem voluptates impedit
        omnis maxime quidem sequi, dolore in rem unde possimus assumenda
        accusamus expedita beatae aliquam ad esse similique. Atque architecto
        repudiandae suscipit sequi, eligendi, repellat ipsam cum quas iste est
        neque doloribus quis beatae consequuntur rerum maiores natus quasi eaque
        dolorem corrupti, at eos. Maxime amet temporibus reiciendis consequatur
        magnam explicabo harum cumque. Beatae minima quia debitis officiis
        reiciendis inventore suscipit commodi sint expedita ea hic nihil odit,
        facilis dolores sapiente optio voluptas atque provident dignissimos
        corrupti veritatis consectetur modi numquam? Ipsum, a veritatis, ducimus
        totam repudiandae et soluta eius, sed eos illo dolor quibusdam
        obcaecati? Expedita facere minima, pariatur itaque laboriosam distinctio
        ipsam reiciendis animi unde dignissimos quibusdam cum nihil blanditiis
        perferendis adipisci inventore nostrum ad molestias esse laborum earum
        delectus totam debitis eligendi. In eveniet illum magni esse dolorem
        nobis ducimus incidunt, voluptas veniam corporis laborum dolorum odit
        distinctio id autem minima voluptatibus quidem, quaerat modi eligendi
        animi sit? Placeat quis nihil animi enim impedit expedita quasi qui
        nostrum! Laudantium, repellat culpa? Distinctio, blanditiis! Ad, sint
        odio, vel beatae doloribus itaque ut, autem mollitia iure obcaecati
        culpa nisi architecto quos dolorem. Voluptas molestias asperiores odit
        adipisci dolorum amet minima ex at soluta! Unde accusantium id nesciunt
        iusto cupiditate officia optio adipisci distinctio, blanditiis delectus,
        placeat quis eius minus totam nobis numquam sed dolor, quae nihil.
        Molestias labore nulla illum aliquam laborum nihil optio ullam, nobis
        commodi! Libero nihil maxime deleniti eius aut neque similique natus,
        earum sed facere, eligendi voluptate possimus animi dolore saepe debitis
        ut atque sunt nesciunt dolor facilis quis! Sint, voluptate dolor
        cupiditate repellendus facilis sit mollitia, amet, delectus provident
        voluptatum quam placeat nisi id eos pariatur! A temporibus, nesciunt
        quibusdam fuga sunt illo ratione. Debitis, laboriosam tempore cum
        repellendus minus sapiente deleniti laborum dignissimos magni quas,
        consequuntur non. Beatae, nihil reprehenderit officia sunt velit
        dignissimos? Et maiores impedit quis, voluptate animi incidunt dolores
        ducimus adipisci autem laborum distinctio, veritatis libero laboriosam
        earum corrupti quod similique eligendi sed provident ea rem! At quo ea a
        saepe voluptatem rem, repellendus mollitia, explicabo eius perferendis
        odio. Ipsa debitis accusamus voluptas tempora officiis! Repellat
        assumenda, consectetur nisi molestias accusantium autem numquam esse
        iure quasi, commodi animi praesentium fugiat optio porro harum ratione
        debitis asperiores qui, sit nobis! Odio cum aliquam vero molestiae
        possimus architecto dolor numquam ipsum quam! Aut voluptas quis quia
        eaque accusamus quam corrupti delectus error! Consequatur non voluptates
        possimus aliquid impedit amet asperiores labore? Vel est nemo
        consectetur praesentium omnis, voluptatum porro dolores, quasi
        voluptatibus at eveniet. Vitae nihil recusandae ducimus, beatae nulla
        iusto, veniam expedita doloribus eaque ipsa reiciendis commodi ratione
        esse libero autem cumque explicabo veritatis alias voluptate in.
      </div>
    </div>
  );
}

export default App;
