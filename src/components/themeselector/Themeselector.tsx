import "./themeselector.scss";
const Themeselector = () => {
  return (
    <div className="themeselector">
      <p className="themeselctor__label">Theme</p>
      <div>
        <div className="themeselector__buttons">
          <button
            className="themeselector__button"
            onClick={() => document.body.setAttribute("data-theme", "theme-1")}
          >
            1
          </button>
          <button
            className="themeselector__button"
            onClick={() => document.body.setAttribute("data-theme", "theme-2")}
          >
            2
          </button>
          <button
            className="themeselector__button"
            onClick={() => document.body.setAttribute("data-theme", "theme-3")}
          >
            3
          </button>
        </div>
        <div className="themeselector__indicator" />
      </div>
    </div>
  );
};
export default Themeselector;
