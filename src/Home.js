import { Component } from 'react';
import  'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import "./App.css";

class Home extends Component {


  async Water()
  {
    var water = document.getElementById('Human-image-Water')
    if(water.classList.contains('invisible') === true){
      water.classList.remove('invisible')
    }
    var fire = document.getElementById('Human-image-Fire')
    if(fire.classList.contains('invisible') !== true){
      fire.classList.add('invisible')
    }
    var earth = document.getElementById('Human-image-Earth')
    if(earth.classList.contains('invisible') !== true){
      earth.classList.add('invisible')
    }
    var air = document.getElementById('Human-image-Air')
    if(air.classList.contains('invisible') !== true){
      air.classList.add('invisible')
    }
    
  }
  async Fire()
  {
    var water = document.getElementById('Human-image-Water')
    if(water.classList.contains('invisible') !== true){
      water.classList.add('invisible')
    }
    var fire = document.getElementById('Human-image-Fire')
    if(fire.classList.contains('invisible') === true){
      fire.classList.remove('invisible')
    }
    var earth = document.getElementById('Human-image-Earth')
    if(earth.classList.contains('invisible') !== true){
      earth.classList.add('invisible')
    }
    var air = document.getElementById('Human-image-Air')
    if(air.classList.contains('invisible') !== true){
      air.classList.add('invisible')
    }
  }
  async Earth()
  {
    var water = document.getElementById('Human-image-Water')
    if(water.classList.contains('invisible') !== true){
      water.classList.add('invisible')
    }
    var fire = document.getElementById('Human-image-Fire')
    if(fire.classList.contains('invisible') !== true){
      fire.classList.add('invisible')
    }
    var earth = document.getElementById('Human-image-Earth')
    if(earth.classList.contains('invisible') === true){
      earth.classList.remove('invisible')
    }
    var air = document.getElementById('Human-image-Air')
    if(air.classList.contains('invisible') !== true){
      air.classList.add('invisible')
    }
  }
  async Air()
  {
    var water = document.getElementById('Human-image-Water')
    if(water.classList.contains('invisible') !== true){
      water.classList.add('invisible')
    }
    var fire = document.getElementById('Human-image-Fire')
    if(fire.classList.contains('invisible') !== true){
      fire.classList.add('invisible')
    }
    var earth = document.getElementById('Human-image-Earth')
    if(earth.classList.contains('invisible') !== true){
      earth.classList.add('invisible')
    }
    var air = document.getElementById('Human-image-Air')
    if(air.classList.contains('invisible') === true){
      air.classList.remove('invisible')
    }
  }
  /* <li className="nav-item">
                  <NavLink to="/inventory" className="nav-link" >Inventory</NavLink>
                </li>*/
  render()
  {
    return (
      <main className="main">
          <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="container">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#Magic">Magic</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Ground-text">Lands</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Token-text">Token</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Tokenomic-text">Tokenomic</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Tokenomic-text">Pre-sale</a>
                </li>
                
              </ul>

              </div>
            </div>
          </nav>
         <div className="container-fluid">
                <div className="row home-page-info">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <div className="main-block animate__animated animate__fadeIn">
                        <div className="main-logo">
                        </div>
                        <div className="pos-center Buy-btn-div ">
                          <a href="https://wax.atomichub.io/explorer/collection/elementalwar" className="Buy-btn" >BUY NOW</a>
                        </div> 
                      </div>
                    </div>
                </div>
          </div>


        <div id="Magic"></div>
        <div id="Human-image-Fire" className="container stand-container animate__animated animate__fadeIn">
            <div id="Stand-stones" className="row stand-stones">
                <div  className="col-lg-4 col-md-12 col-ms-12 col-sx-12 stand-mage stand-fire">
                </div>
                <div id="Human-text" className="col-lg-8 col-md-12 col-ms-12 col-sx-12  stand-text-fire">
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <h2 className="">Fire</h2>
                    </div>
                    <div className="col-md-6 col-xs-12 stand-btn-container ">
                      <div  className="stand-btn-div">
                            <div  onClick={this.Water} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Water</p>
                      </div>
                      <div className="stand-btn-div ">
                            <div onClick={this.Fire} className="stand-btn stand-btn-fire">
                            </div>
                            <p className="stand-text-active">Fire</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Earth} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Earth</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Air} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Air</p>
                      </div>
                    </div>
                    <p>
                    Fire is a very dangerous element: not everyone can tame it. 
                    And yet, fire skills are among the most powerful ones - they are truly deadly. 
                    Thus, fire magic deals the most damage. 
                    </p>
                  </div> 
                </div>
               
            </div>    
        </div>
        <div id="Human-image-Water" className="container stand-container animate__animated animate__fadeIn invisible">
            <div id="Stand-stones-2" className="row stand-stones">
                <div  className="col-lg-4 col-md-12 col-ms-12 col-sx-12 stand-mage stand-water">
                    
                </div>
                <div id="Human-text-Water" className="col-lg-8 col-md-12 col-ms-12 col-sx-12 stand-text-water">
                  <div className="row ">
                    <div className="col-md-6 col-xs-12">
                      <h2 className="">Water</h2>
                    </div>
                    <div className="col-md-6 col-xs-12 stand-btn-container ">
                      <div onClick={this.Water} className="stand-btn-div">
                            <div  className="stand-btn stand-btn-water">
                            </div>
                            <p className="stand-text-active">Water</p>
                      </div>
                      <div className="stand-btn-div ">
                            <div onClick={this.Fire} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Fire</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Earth} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Earth</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Air} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Air</p>
                      </div>
                    </div>
                    <p>
                    Everyone knows water as the main source of life. However, in Elemental Wars it can also be used in offense. 
                    Water magic is used to support the companions with healing, but some water spells, furthermore, deal damage to enemies.
                    </p>
                  </div> 
                </div>
            </div>    
        </div>
        <div id="Human-image-Earth" className="container stand-container animate__animated animate__fadeIn invisible">
            <div id="Stand-stones-3" className="row stand-stones">
                <div  className="col-lg-4 col-md-12 col-ms-12 col-sx-12 stand-mage stand-earth">
                    
                </div>
                <div id="Human-text-Earth" className="col-lg-8 col-md-12 col-ms-12 col-sx-12 stand-text-earth">
                  <div className="row ">
                    <div className="col-md-6 col-xs-12">
                      <h2 className="">Earth</h2>
                    </div>
                    <div className="col-md-6 col-xs-12 stand-btn-container ">
                      <div onClick={this.Water} className="stand-btn-div">
                            <div  className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Water</p>
                      </div>
                      <div className="stand-btn-div ">
                            <div onClick={this.Fire} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Fire</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Earth} className="stand-btn stand-btn-earth">
                            </div>
                            <p className="stand-text-active">Earth</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Air} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Air</p>
                      </div>
                    </div>
                    <p>
                    Earth magic gives the ability of controlling stone: 
                    therefore, most of earth skills are focused on protection. 
                    This magic helps safeguard allies with shields and implements 
                    powerful stuns on the enemies. 

                    </p>
                  </div> 
                </div>
            </div>    
        </div>
        <div id="Human-image-Air" className="container stand-container animate__animated animate__fadeIn invisible">
            <div id="Stand-stones-4" className="row stand-stones">
                <div  className="col-lg-4 col-md-12 col-ms-12 col-sx-12 stand-mage stand-air">
                    
                </div>
                <div id="Human-text-Air" className="col-lg-8 col-md-12 col-ms-12 col-sx-12 stand-text-air">
                  <div className="row ">
                    <div className="col-md-6 col-xs-12">
                      <h2 className="">Air</h2>
                    </div>
                    <div className="col-md-6 col-xs-12 stand-btn-container ">
                      <div onClick={this.Water} className="stand-btn-div">
                            <div  className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Water</p>
                      </div>
                      <div className="stand-btn-div ">
                            <div onClick={this.Fire} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Fire</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Earth} className="stand-btn-noactive">
                            </div>
                            <p className="stand-text-noactive">Earth</p>
                      </div>
                      <div  className="stand-btn-div">
                            <div onClick={this.Air} className="stand-btn stand-btn-air">
                            </div>
                            <p className="stand-text-active">Air</p>
                      </div>
                    </div>
                    <p>
                    Although many people might underestimate air, 
                    it really comesin handy in Elemental Wars. Air magic
                    makes other elements even stronger, by increasing their
                     damage, shields and healing.

                    </p>
                  </div> 
                </div>
            </div>    
        </div>





        <div id="Ground-text" className="container  ground-container  "> 
              <div className="row ">
                <div className="col-lg-5 col-md-12 com-ms-12 col-sx-12">
                  <div className="ground-text">
                    <h2>Lands</h2>
                    <p>Land is a very important aspect of the game. 
                      They are used to accommodate structures and for province cultivation.
                       Different land plots have their own fertility rates, which define the growth rate of
                        crops, and differ in sizes. The rarest ones have some unique features which will 
                        provide magicians with even more resources. Elemental Wars allows you to have up to
                         three active lands at a time. Every player receives a free starting land plot 
                         entering the game for the first time. Each type of land can be bought or sold on 
                         the marketplace, except the starting land plot.</p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-12 com-ms-12 col-sx-12 ground-image">
                </div>
              </div>
            </div>  
        <div id="Token-text" className="container token-container">
          <div className="row "> 
              <h2 className="token-row">Tokens</h2>
              <h3>With EWARS tokens, players will be able to:</h3>
              <div className="col-lg-6 col-md-12 col-xs-12 token-images">
                  <div className="row token-container-icon">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 token-icon-1"></div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 token-icon-2"></div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 token-icon-3"></div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 token-icon-4"></div>
                  </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12 token-text">
                <p>
                The in-game currency in Elemental Wars is EWARS tokens. These tokens were created
                by ARKAD for the purpose of incorporating them into most in-game
                mechanics. The in-game currency, called "EWARS", is an EOS token
                created and distributed by ARKAD.
                </p>
                <strong>Goal of EWARS tokens:</strong><br/>
                <p className="token-text-indent">
                Rewarding players: our goal is to create the “play-to-earn” system.
                 Players can earn EWARS by playing Elemental Wars and can spend it on 
                 in-game items and improving their characters. It is also used as a 
                 currency on a marketplace. </p>
                <p className="token-text-indent">
                Stable economic infrastructure of the game: by releasing tokens, we
                 will be able to support the market economics in order to ensure the 
                 economic security of the players, providing protection from monopoly.
                </p>
                <p>
                <strong>Summary</strong><br/>
                EWARS is an in-game currency that will be issued for winning PVP and as 
                a reward for defeating bosses. Players can use EWARS for trading, crafting,
                crossbreeding, building and upgrading structures, and some other different processes.
                </p>
              </div>
          </div>
        </div>
        <div className="container-fluid last-container">
            <div id="Tokenomic-text" className="container tokenomic-container">
              <div id="Tokenomic-back-girl" className="row tokenomic-back-girl">
                <div className="col-lg-3 col-md-6 col-ms-12 col-xs-12 tokenomic-image">
                </div>
                <div  className="col-lg-6 col-md-6 col-ms-12 col-xs-12 tokenomic-text">
                  <h2 id="Tokenomic-h2">Tokenomics</h2>
                  <div className="row"> 
                    <div className=" col-lg-6 col-md-6 col-ms-12 col-xs-12">
                      <ul className="tokenomic-ul">
                        <li className="li-1">Player Rewards:50%</li>
                        <li className="li-2">Developers:20%</li>
                      </ul>
                    </div>
                    <div className="col-lg-6 col-md-6 col-ms-12 col-xs-12">
                      <ul className="tokenomic-ul">
                        <li className="li-3">Community Rewards:20%</li>
                        <li className="li-4">Private Presale:10%</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
          </div>  

          <div className="container-fluid buy-now-container">
            <div className="row">
              <div id="Buy-now-stones" className="buy-now-back">
                  <a href="https://wax.atomichub.io/explorer/collection/elementalwar" className="buy-now-btn-last"/>
              </div>
            </div>
          </div>    
        </div>
        <footer>
          <div id="footer"className="container-fluid footer-container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-ms-12 col-xs-12 footer-logo-img">
              </div>
              <div className="col-lg-3 col-md-6 col-ms-12 col-xs-12 footer-social">
                  <h3>Social</h3>
                  <ul>
                    <li><a href="https://elementalwarss.gitbook.io/elemental-wars/">Whitepaper</a></li>
                    <li><a href="https://medium.com/@elementalwarss">Medium</a></li>
                    <li><a href="https://twitter.com/PlayElementals">Twitter</a></li>
                    <li><a href="https://t.me/elementalwars">Telegram</a></li>
                  </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-ms-12 col-xs-12 footer-info">
                  <h3>Info</h3>
                  <ul>
                    <li><a href="https://docs.google.com/document/d/1gBisB9XxbrUurtKTcyQLP2KQ3J-OugAETTyKV2pKJ8s/edit?usp=sharing">Terms and conditons</a></li>
                    <li><a href="https://elementalwarss.gitbook.io/elemental-wars/elemental-wars-token/ews-tokens">Official Token</a></li>
                    <li><a href="https://docs.google.com/document/d/1kvpdAnBzgi0YcQcJnjyw5xyFaVaQoDQ8_9hIhHFYTVk/edit?usp=sharing">Privacy Policy</a></li>
                  </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-ms-12 col-xs-12 footer-about">
                  <h3>About</h3>
                  <ul>
                    <li>Address: Ukraine, 61070, Kharkiv region, Kharkiv city, ZHILYARDI STREET, building 15</li>
                    <li>Company ID: 36647238</li>
                    <li>CEO: Yehor Isaienko</li>
                    <li>Contact email: elementalwarss@gmail.com</li>
                  </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    );
  }
  
}

export default Home;
