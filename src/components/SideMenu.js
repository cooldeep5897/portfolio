import React from 'react';
import $ from 'jquery';
import hackerrank from '../img/hackerrank.png';
import hackerearth from '../img/hackerearth.png';
import leetcode from '../img/leetcode.PNG';
import github from '../img/github.png';
import linkedin from '../img/linkedin.png';
import codechef from '../img/codechef.png';
class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.menucontainer = React.createRef();
    this.showmenu = this.showmenu.bind(this);
  }
  componentDidMount() {
    $('.menu-container').toggleClass('width-0');
  }
  showmenu = () => {
    $('.menu-container').toggleClass('width-0');
    $('#side-pagination-hamburger').toggleClass('arrow');
  };
  render() {
    return (
      <div className='sidemenu-container'>
        <div
          onClick={this.showmenu}
          class='hr__hamburger hr__hamburger--arrow hr__hamburger--is-active'
          id='side-pagination-hamburger'>
          <div class='hr__hamburger__box'>
            <span class='hr__hamburger__inner'></span>
          </div>
        </div>
        <div className='menu-container pr-5 ' ref={this.menucontainer}>
          <ul>
            <li className='menu-item'>
              <a href='#' className='heading'>
                INTRO
              </a>
              <ul className='sub-menu pr-5'>
                <li>
                  <a href='#'>
                    I am a Software developer with more than 1 year of experience in industry and been practicing 
                    full stack developement using
                    latest technologies like reactjs,NodeJs and MongoDB. I'm motivated, result-focused and
                    seeking a successful team-oriented company with opportunity
                    to grow.{' '}
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                {' '}
                PROJECTS
              </a>
              <ul className='sub-menu'>
                <li>
                  <a href='https://spellchckr.herokuapp.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;Spell Checker
                  </a>
                </li>
                <li>
                  <a href='https://hkernews.herokuapp.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;Hacker News
                  </a>
                </li>
                <li>
                  <a href='https://github.com/cooldeep5897/nutrify-new/tree/main' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;Nutrify App
                  </a>
                </li>
              </ul>
            </li>
            <li className='menu-item'>
              <a href='#' className='heading'>
                Profiles
              </a>
              <ul className='sub-menu d-flex justify-content-between profiles w-75'>
                <li>
                  <a
                    href='https://www.hackerrank.com/rishab5897'
                    target='_blank'>
                    <img
                      src={hackerrank}
                      style={{ height: '46px', width: '46px' }}
                      alt='hackerrank'
                    />
                  </a>
                </li>
                
                <li>
                  <a
                    href='https://leetcode.com/kuldeep5897/'
                    target='_blank'>
                    <img
                      src={leetcode}
                      style={{ height: '46px' }}
                      alt='leetcode'
                    />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/cooldeep5897' target='_blank'>
                    <img
                      src={github}
                      style={{
                        height: '46px',
                        width: '46px'
                      }}
                      alt='github'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.linkedin.com/in/kuldeep-joshi-20244413a/'
                    target='_blank'>
                    <img
                      src={linkedin}
                      style={{
                        height: '46px',
                        width: '46px',
                        boxShadow:
                          '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
                        borderRadius: '50%'
                      }}
                      alt='linkedin'
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div id='sidemenu'>
          <div>
            <ul className='menu mt-5'>
              <li>
                <a href='#intro'>INTRO</a>
              </li>
              <li>
                <a href='#skills'>Skills</a>
              </li>
              <li>
                <a href='#projects'>Projects</a>
              </li>
              <li>
                <a href='#experience'>Experience</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default SideMenu;
