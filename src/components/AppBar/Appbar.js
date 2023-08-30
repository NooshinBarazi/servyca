import Style from "./AppBar.module.scss";
import ArrowBackIcon from '../Icons/ArrowBackIcon'

const AppBar = ({text, icon}) => {
  return (
    <div className={Style.inbox_container}>
      <div className={Style.inbox_icon}>
        <ArrowBackIcon />
        <h1>{text}</h1>
      </div>
      <div className={Style.search_container}>
        <input type="search" className={Style.search_input} />
        <button className={Style.search_icon}>
          {icon}
        </button>
      </div>
    </div>
  );
};

export default AppBar;
