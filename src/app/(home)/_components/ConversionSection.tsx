import ConverterSlider from "./ConverterSlider";
import Convertor from "./Convertor";
import style from "./styles/ConversionSection.module.scss";

const ConversionSection = () => {
  return (
    <section className={style.conversion}>
      <div className={style.conversion__container}>
        <header className={style.header}>
          <div>
Supports Every step
          </div>
          <h2 className={style.title}>
            Convert money instantly with real-time rates across Naira, Cedi, and
            CFA—so you always know exactly what you send and what arrives.
          </h2>
        </header>
        <div className={style.conversion__content}>
          <div>
            <ConverterSlider />
          </div>
          <div>
            <Convertor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionSection;
