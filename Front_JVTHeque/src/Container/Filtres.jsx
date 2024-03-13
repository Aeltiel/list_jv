import { useGame } from "./GameContext/GameContext";
import FiltreBtn from "./FiltreBtn";

function Filtres() {
  const { resetFilter, resetFiltreActif } = useGame();

  return (
    <div className="my-6">
      <p className="text-base">Tu veux trier tes jeux en fonction de : </p>
      <div className="w-full flex flex-wrap justify-between my-3.5">
        {/*<button
          className={`btn-filtre ${
            gameFiltres.obtention === "Oui" ? "activeFiltre" : ""
          }`}
          onClick={() => {
            haveGamesFilter("Oui");
          }}
        >
          Jeux obtenus
        </button>
        <button
          className={`btn-filtre ${
            gameFiltres.obtention === "whishlist" ? "activeFiltre" : ""
          }`}
          onClick={() => {
            haveGamesFilter("whishlist");
          }}
        >
          {" "}
          Ta Whishlist
        </button>*/}
        <FiltreBtn name={"Jeux obtenus"} obtentionType={"Oui"} />
        <FiltreBtn name={"whishlist"} obtentionType={"whishlist"} />
        <button
          onClick={() => {
            resetFilter();
            resetFiltreActif();
          }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>
      </div>
    </div>
  );
}

export default Filtres;
