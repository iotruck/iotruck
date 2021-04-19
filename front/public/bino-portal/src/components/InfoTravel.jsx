export default function InfoTravel(props) {
    return (
        <div className="info-travel">
            <span className="title">+INFORMAÇÕES</span>
            <div className="info">
                <span>{props.trucker}</span>
            </div>
            <div className="info">
                <span>{props.truck}</span>
            </div>
            <div className="info">
                <div className="details-info">

                    <span id="detailsTitle">{props.travelDetails}</span>

                    <span>
                        Carga: {props.details}
                    </span>
                    <span>
                        Data: {props.detailsDate}
                    </span>
                    <span>
                        Ultimo Registro: {props.detailsLastLog}
                    </span>
                </div>
            </div>
        </div>
    );
}