import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className="text-6xl font-bold ml-10">
        Get personalised recommendations<br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className= "max-w-[470px] mt-5 ml-10">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10 ml-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[80%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
