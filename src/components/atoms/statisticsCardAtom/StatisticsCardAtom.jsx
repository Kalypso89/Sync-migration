import "./statisticsCardAtom.module.css"
import cardColoredStyles from '../../../styles/cardColored.module.css'

export function StatisticsCardAtom({ idIcon, icon, value, label }) {
  return (
    <div className={`${cardColoredStyles['card--colored']} card--grey`}>
      <div id={idIcon}>
        <i className={icon}/>
      </div>
      <h2>{value}</h2>
      <p>{label}</p>
    </div>
  );
}
