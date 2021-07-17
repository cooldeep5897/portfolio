import React from 'react';

import { PDFExport } from '@progress/kendo-react-pdf';
import './resume.scss';

import profileimg from '../../img/kuldeep2.jpg';
import TechnicalSkills from './TechnicalSkills';
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.downloadPDF = this.downloadPDF.bind(this);
  }

  componentDidMount() {
    //Get Lead Details by LeadId
  }

  downloadPDF() {
    this.pdfExportComponent.save();
  }

  render() {
    return (
      <div className='container-fluid p-0'>
        <div className='row dl-r '>
          <a
            href='#move'
            className='col-lg-1 resb offset-lg-5 '
            style={{
              backgroundColor: '#ffc107',
              color: '#fff',
              cursor: 'pointer',
            }}>
            <i class='fa fa-3x fa-arrow-circle-o-down' aria-hidden='true'></i>
          </a>
          <div
            className=' col-lg-3 resb '
            onClick={this.downloadPDF}
            style={{ cursor: 'pointer' }}>
            <i class='fa  fa-file-text-o' aria-hidden='true'></i>
            &nbsp;Download Resume
          </div>
          <div className=' col-lg-3 resb '>
            <i class='fa fa-whatsapp' aria-hidden='true'></i>
            &nbsp;+91-8279554743
          </div>
        </div>
        <div style={{ marginTOp: '-400px' }} className='pullUp'>
          <div
            id='move'
            className='application-form-in-app-preview  mr-lg-5 mb-5 container p-3 pl-md-0 p-sm-5 '>
            <PDFExport
              forcePageBreak='.page-break'
              ref={(component) => (this.pdfExportComponent = component)}
              paperSize='A4'
              scale={0.5}
              margin='0.07cm'
              fileName='Kuldeeps Resume'>
              <div
                id='main_container'
                className=' mt-4    pl-5 pr-5  pt-4 container resume'>
                <div>
                  <div>
                    {/* <!-- HEADER --> */}
                    <div id='header'>
                      {/* <!-- LOGOTYPE/NAME --> */}
                      <div class='header_logotype_container'>
                        <h1 class='logotype_name'>
                        Kuldeep Joshi &nbsp;{' '}
                          <span class='purple' style={{ fontSize: '32px' }}>
                          {' '}
                          </span>
                        </h1>
                        <h2 class='logotype_occupation pl-1'>
                          Software Engineer
                        </h2>
                      </div>
                      {/* <!-- MAIN MENU --> */}
                      <div class='header_menu_container'>
                        <div class='clear'></div>
                        <ul class='header_menu horizontal_list'>
                          <li>
                            <a class='no_border '>Competitive coder</a>
                          </li>
                          <li>
                            <a class=' '>Full stack developer</a>
                          </li>
                          <li>
                            <a>Automation Tester</a>
                          </li>
                          <li>
                            <a>Creative thinker</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- LEFT COL --> */}
                    <div id='left_col'>
                      <div class='profile_frame'>
                        <div class='profile_picture'>
                          <img
                            src={profileimg}
                            style={{ height: '100%', width: '100%' }}
                            alt='profile picture'
                          />
                        </div>
                      </div>
                      <div class='hello_content'>
                        <h2>Personal</h2>

                        {/* <p class='purple mb-0'>Language:</p> */}
                        {/* <p>English , Hindi</p> */}
                      </div>
                      <div class='contact_details_content mb-4'>
                        {/* <h2>Contact details</h2> */}
                        <p class='purple'>Mobile No:</p>
                        <p>+91-8279554743</p>
                        <p class='purple'>Email:</p>
                        <p>Joshikuldeep5897@gmail.com</p>
                        <p class='purple mb-0'>Data of Birth:</p>
                        <p>05 August 1997</p>
                      </div>
                      <h2>Education</h2>
                      <p class='purple'> Graphic Era Hill University</p>
                      <p className='date'>B.Tech CSE &nbsp;(2016 - 2020)</p>
                      <p class='purple'> Intermediate</p>
                      <p className='date'> Kendriya Vidyalaya Haldwani Cantt</p>
                      <h2>Technical Skills</h2>
                      <TechnicalSkills />
                      <div class='get_social_content'>
                        <h2>Profiles</h2>
                        <ul class='profiles_icons '>
                          <li>
                            <p class='purple mb-0'>Leetcode.com</p>
                            
                            <div>/kuldeep5897</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Github.com</p>
                            <div>/cooldeep5897</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Hackerrank.com</p>

                            <div>/rishab5897</div>
                          </li>
                          
                          <li>
                            <p class='purple '>LinkedIn.com</p>
                            <div>/in/kuldeep-joshi-20244413a/</div>
                          </li> 
                          
                        </ul>
                      </div>
                    </div>
                    {/* <!-- PROFILE CONTENT --> */}
                    <div id='content_container' style={{ height: '1460px' }}>
                      <div class='block' id='intro'>
                        <h1>About me</h1>
                        <blockquote class='profile_quote'>
                          <p>
                            " I am passionate programmer interested in
                            Competitive programming and Full stack development.
                            Data Structure and Algorithms are some
                            other fields that interests me the most. I believe
                            in practical work rather than theoretical. "
                            <i
                              class='fa fa-quote-right fa-3x'
                              style={{
                                position: 'absolute',
                                right: '40px',
                                top: '25px',
                                color: '#3d3a41',
                              }}
                              aria-hidden='true'></i>
                          </p>
                          {/* <span class='entypo-quote'></span> */}
                        </blockquote>
                      </div>

                      
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='block' id='experience'>
                        <h2>Experience</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold title1'>
                                Automation Tester
                              </div>
                              <div className='date'>August 2020 - Present</div>
                            </td>
                            <td>
                              <div className='bold title1'>
                                Cognizant Technology Solutions
                              </div>
                              <div>
                                Web Services API testing - In this we have to create
                                test cases to test the APIs. These test cases will send
                                appropriate JSONs and will verify the response
                                accordingly.<br/>
                                DataBase Testing - Automated the Database testing process for clients.
                                Tasks included creating suites for reading FlatFiles to
                                compare with database values.
                                <br />
                                <b>Technologies used</b> :JAVA 8 SQL, Eclipse,Oracle SQL Developer,Katalon,Insomnia.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>Automation Testing Intern</div>
                              <div className='date'>Jan 2020 - June 2020</div>
                            </td>
                            <td>
                              <div className='bold title1'>
                                Cognizant Technology Solution
                              </div>
                              <div>
                                Six-month internship at Cognizant Technology Solutions (13-Jan-2020 to 11-June-2020) 
                                Worked on automation Testing. Successfully completed all the tasks, assignments including 
                                a project based on automation testing using selenium and got 2nd rank in the internship
                                among many interns. Learnt Java,Mysql, JavaScript,Selenium,etc.


                                <br />
                                <b>Tools used :</b> Java,Selenium,Eclipse,TestNG.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <div class='horizontal_line'>
                        <div class='line_left'></div>
                        <div class='left_circle'></div>
                        <div class='central_circle'></div>
                        <div class='right_circle'></div>
                        <div class='line_right'></div>
                      </div>
                      <div class='block' id='projects'>
                        <h2>Projects</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold title1'>
                              Spell Checker
                              </div>
                              </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://spellchckr.herokuapp.com/ '
                                  className='link'>
                                  Spell Checker
                                </a>
                              </div>
                              <div>
                              Spell Checker is a Vanilla JS app designed for making texts, notes, essays, etc spelling mistakes free.
It makes an API call using axios to post Raw text and receive mistakes as response.
The app will also give suggestions to correct the mistakes.By choosing a suggestion from the list of suggestions the spelling will get corrected in the text.

                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>Nutrify App</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Github link - </span>

                                <a
                                  href='https://github.com/cooldeep5897/nutrify-new/tree/main'
                                  className='link'>
                                  Link
                                </a>
                              </div>
                              <div>
                              The Nutrify App is a full stack application made using ReactJs for Frontend, Node JS for Backend and MongoDB as DataBase. It is used to keep a count on your calories and monitor calories consumed everyday.
                              A user can SignUp and set total calories to be consumed in a day.
                              A user can add all the meals and calories he consumes in a day.
                              A user will be authenticated using Jwt Token.I have Implemented Cookie and Jwt token authentication.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>Hacker News</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://hkernews.herokuapp.com/'
                                  className='link'>
                                  Hacker News
                                </a>
                              </div>
                              <div>
                              The Hacker News is ReactJS application,I have implemented hooks,and stateless component in this app.
                              Some of its Features- it displays the latest news uploaded on Hack News
                               website using the firebase API’s provided. 
                                  A user can select from a list of news links to navigate directly to the respective website.

                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className='bold title1'>
                              KnowWeather   
                              </div>
                              <div className='date'>
                              
                              </div>
                            </td>
                            <td>
                            <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://weatherkj.herokuapp.com/'
                                  className='link'>
                                  Weather App
                                </a>
                              </div>
                              <div>
                              Created a Vanilla JavaScript App where i have implemented Call to API using axios to check the weather of any provided city using API :
The user can enter the name of any city.  
The user can see the temweatherkjperature of the city in Celsius and Fahrenheit.
The background image changes dynamically according to the weather of the searched city.
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                    <div class='clear'></div>
                    {/* <!-- FOOTER --> */}
                    <div id='footer'>
                      {/* <p class='footer_name'>Mohit Singh Negi CV 2020</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </PDFExport>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
