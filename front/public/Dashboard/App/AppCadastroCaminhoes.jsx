function App() {
    return (
        <React.Fragment>
            <GroupNavBar />
            {/*Atention: every next thing that you will need to put on site, you have to do inside this 'background'. 
            You can use the same 'Container' box or not, it isnt change :) */}
            <div className="background">
                <GroupProfile>
                    <div className="profile-div1">
                        <a onClick={() => this.abrir_profile}>X</a>
                    </div>
                    <div className="profile-div2"> </div>
                    <div className="profile-div3"> </div>
                </GroupProfile>

                <div className="topbar">
                    <Container>
                        {/* <SearchBar /> */}
                        <SlideButton/>
                        <MyProfile>
                            <div className="profile"> </div>
                            <ProfileItens />
                        </MyProfile>
                    </Container>
                </div>

                    <div className="webs">
                    <Container>
                    <Formularios>
                            <FormCaminhao />
                            <FormMotorista />
                    </Formularios>
                        <Tags>
                        <input placeholder="Procure um motorista da sua empresa"/>
                            <MotoristaTags>
                                 <Cards/> <br/>
                                <Cards/>  <br/>
                                <Cards/>  <br/>
                             </MotoristaTags> <br/>
                              <input placeholder="Procure um caminhão da sua empresa"/>
                            <CaminhaoTags>
                                <Cards/> <br/>
                                <Cards/>  <br/>
                                <Cards/>  <br/>
                            </CaminhaoTags>
                        </Tags>
                    </Container>
                    </div>
                </div>

        </React.Fragment>

    );
}

function Container(props) {
    return <div className="container">{props.children}</div>;
}

function GroupNavBar() {
    return <div className="nav"> <ul> <li> <a href="#" title="início"> <img src="home.png" /> </a> </li>
        <li> <a href="#" title="minhas viagens"> <img src="viagem.png" /> </a> </li>
        <li> <a href="#" title="meus motoristas/caminhões"> <img src="adicionar.png" /> </a> </li>
        <li> <a href="#" title="rastrear"> <img src="track.png" /> </a> </li> </ul>
    </div>
}

function GroupProfile(props){
        return <div className="myprofile" id="myprofile" style={{ display: 'none' }}>{props.children}</div>
}

function SearchBar() {
    return <div className="search-container">
        <img src="lupa.png" />
        <input placeholder="Pesquisar por uma viagem" />
    </div>
}

function SlideButton() {
    return <label className="switch">
    <input type="checkbox"/>
    <span className="slider round"></span>
  </label>
}

function MyProfile(props) {
    return <div className="profile-container">{props.children}</div>
}

// I put this one as a function cause later we will bring up the username information, we'll need a function so here it is...
function ProfileItens() {
    return <div className="profile-infos">
        <label id="username"> Sandra Cunha </label>
        <a> Minha conta </a>
    </div>
}

//CONTENT:

function SectionWeb(props) {
    return <div className="webs">{props.children}</div>
}

function Formularios(props) {
    return <section className="section-forms">
        {props.children}
    </section>
}

function FormCaminhao() {
    return <form id="formCaminhao">
        <h3>Cadastro de caminhões</h3> <br/> <br/>
        <label> Nome/descrição </label>
        <input /> <br />
        <label> Modelo </label>
        <input /> <br />

        <div className="inline-form">

        <div>
            <label> Placa </label>
            <input /> <br />
        </div>

        <div>
             <label> Marca </label>
            <input /> <br />
        </div>

        </div>
       
       <div className="inline-form">

       <div>
            <label> Combustível</label>
            <input /> <br/>
        </div>

        <div>
            <label> Status </label>
            <input />
        </div>

       </div>
       <br/>
       <button>Cadastrar</button>
    </form>
}

function FormMotorista() {
    return <form id="formMotorista">
        <h3>Cadastro de motoristas</h3> <br/> <br/>
        <label> Nome e sobrenome </label>
        <input /> <br />
        <label> CPF</label>
        <input /> <br />

        <div className="inline-form">

        <div>
            <label> Data Nasc</label>
            <input /> <br />
        </div>

        <div>
             <label> CNH </label>
            <input /> <br />
        </div>

        </div>
       
       <div className="inline-form">

       <div>
            <label> Telefone </label>
            <input /> <br/>
        </div>

        <div>
            <label> Certificação </label>
            <input />
        </div>

       </div>
       <br/>
       <button>Cadastrar</button>
    </form>
}

function Tags(props) {
    return <section className="tags">{props.children}</section>
}

function MotoristaTags(props) {
    return <div className="motorista">{props.children} </div>
}

function CaminhaoTags(props) {
    return <div className="caminhao">{props.children} </div>
}

function Cards() {
    return <div className="cards">
        <h3>NOME</h3> 
        <p>
            info
        </p>
        <p>
            info
        </p>
        <p>
            info
        </p>
        <p>
            info
        </p>
        <p>
            info
        </p>
    </div>
}

ReactDOM.render(<App />, document.getElementById("content"));