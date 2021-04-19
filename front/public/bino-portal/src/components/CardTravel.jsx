const CardTravel = (props) => {
  return (
    <div className="card-travel">
    <div className="date-travel">{props.date}</div>
    <div className="code-travel">{props.code}</div>
    <div className="infos-travel">
        <div className="truck-travel">{props.truck}</div>
        <div className="driver-travel">{props.driver}</div>
    </div>
    <div className="status-travel"></div>
</div>
  );
}

export default CardTravel;
