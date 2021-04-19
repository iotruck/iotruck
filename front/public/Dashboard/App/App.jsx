import iconHome from './imagens/home.png'
import iconViagem from './imagens/viagem.png'
import iconAdd from './imagens/adicionar.png'
import iconRastrear from './imagens/track.png'

function App() {
    return(
        <React.Fragment>
           <GroupNavBar />
            {/*Atention: every next thing that you will need to put on site, you have to do inside this 'background'. 
            You can use the same 'Container' box or not, it isnt change :) */}
           <div className="background">
              <GroupProfile>
              <div className="profile-div1">
                <a onClick={() => this.abrir_profile()}>X</a>
               </div>
               <div className="profile-div2"> </div>
               <div className="profile-div3"> </div>
              </GroupProfile>
             
             <div className="topbar">
               <Container>
                   <SearchBar/>
                   <MyProfile> 
                   <div className="profile"> </div>
                    <ProfileItens/>
                   </MyProfile>
               </Container>
             </div>
          </div>
        </React.Fragment>
        
    );
}

function Container(props) {
    return <div className = "container">{props.children}</div>;
  } 

function GroupNavBar() {
        return <div className = "nav"> <ul> <li> <a href="#" title="início"> <img src={iconHome}/> </a> </li>
        <li> <a href="#" title="minhas viagens"> <img src={iconViagem}/> </a> </li>
        <li> <a href="#" title="meus motoristas/caminhões"> <img src={iconAdd}/> </a> </li>
        <li> <a href="#" title="rastrear"> <img src={iconRastrear}/> </a> </li> </ul>
        </div>
 } 

function GroupProfile(props) {
  return <div className="myprofile" id="myprofile" style={{display: 'none'}}>{props.children}</div>
}

  function SearchBar() {
    return <div className="search-container">
              <img src="lupa.png" />
              <input placeholder="Pesquisar por uma viagem"/>
          </div>
  }

  function MyProfile(props) {
    return <div className="profile-container">{props.children}</div>
  }

  // I put this one as a function cause later we will bring up the username information, we'll need a function so here it is...
  function ProfileItens() {
    return  <div className="profile-infos">
      <label id="username"> Sandra Cunha </label>
      <a> Minha conta </a>
      </div>
  }

 ReactDOM.render(<App/>, document.getElementById("content"));