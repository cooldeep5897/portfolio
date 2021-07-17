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
                    I am a Competitive coder and a Software developer with more
                    than 1 years of experience in full stack developement using
                    latest technologies like reactjs ,redux ,context api
                    ,bootstrap ,python. I'm motivated, result-focused and
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
                  <a href='https://kiit.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;Kalinga Institute of
                    Technology.
                  </a>
                </li>
                <li>
                  <a href='http://lendingdemo1.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;LSQ Money
                  </a>
                </li>
                <li>
                  <a href='http://lsqestates.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;LSQ Estates
                  </a>
                </li>
                <li>
                  <a href='https://edudemo4.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;LSQ University
                  </a>
                </li>
                <li>
                  <a href='https://edudemo2.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;Flame University
                  </a>
                </li>
                <li>
                  <a href='http://edudemo1.lsqportal.com/' target='_blank'>
                    <i class='fa fa-link'></i>&nbsp;LSQ University
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
                    href='https://www.hackerrank.com/mohitsin3232?hr_r=1'
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
                    href='https://www.hackerearth.com/@mohit655'
                    target='_blank'>
                    <img
                      src={hackerearth}
                      style={{
                        height: '46px',
                        width: '46px',
                        borderRadius: '50%',

                        boxShadow:
                          '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
                      }}
                      alt='hackerrank'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://leetcode.com/mohit_11615192/'
                    target='_blank'>
                    <img
                      src={leetcode}
                      style={{ height: '46px' }}
                      alt='leetcode'
                    />
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.codechef.com/users/mohit_11615192'
                    target='_blank'>
                    <img
                      src={codechef}
                      style={{
                        height: '46px',
                        background: '#fff',
                        borderRadius: '50%',
                        boxShadow:
                          '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)'
                      }}
                      alt='codechef'
                    />
                  </a>
                </li>
                <li>
                  <a href='https://github.com/mohitsinghnegi1' target='_blank'>
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
                    href='https://www.linkedin.com/in/mohit-singh-9819a3148/'
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
