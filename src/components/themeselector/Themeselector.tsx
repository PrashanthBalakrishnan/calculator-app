import "./themeselector.scss";
const Themeselector = () => {
  return (
    <div className="themeselector">
      <p className="label">Theme</p>
      <div className="themetoggle">
        <div className="themetoggle__buttons">
          <div className="themetoggle__label">1</div>
          <div className="themetoggle__label">2</div>
          <div className="themetoggle__label">3</div>
        </div>
        <div className="themetoggle__indicator">
          <button
            className="themetoggle__button"
            aria-label="theme toggle for theme 1"
            onClick={() => document.body.setAttribute("data-theme", "theme-1")}
          />
          <button
            className="themetoggle__button2"
            aria-label="theme toggle for theme 2"
            onClick={() => document.body.setAttribute("data-theme", "theme-2")}
          />
          <button
            className="themetoggle__button3"
            aria-label="theme toggle for theme 2"
            onClick={() => document.body.setAttribute("data-theme", "theme-3")}
          />
        </div>
      </div>
    </div>
  );
};
export default Themeselector;
