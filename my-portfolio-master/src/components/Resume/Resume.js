import React from 'react';

import { PDFExport } from '@progress/kendo-react-pdf';
import './resume.scss';

import profileimg from '../../img/mohit.jpg';
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
            &nbsp;+91-8194997428
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
              fileName='mohitsinghnegi'>
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
                          Mohit&nbsp;{' '}
                          <span class='purple' style={{ fontSize: '32px' }}>
                            Singh{' '}
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
                            <a>UI/UX designer</a>
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
                        <p>+91-9008645536</p>
                        <p class='purple'>Email:</p>
                        <p>mohitsin3232@gmail.com</p>
                        <p class='purple mb-0'>Data of Birth:</p>
                        <p>21 June 1998</p>
                        {/* <p class='purple'>Adress:</p>
                        <p>Sri durga pg for gents</p>
                        <p>Koramangala I block , Bangaluru</p>
                        <p>Karnataka , 560034</p> */}
                      </div>
                      <h2>Education</h2>
                      <p class='purple'>Lovely Professional University</p>
                      <p className='date'>B.Tech Cse &nbsp;(2016 - 2020)</p>
                      <p className='date'>CGPA : &nbsp;9.23</p>
                      <h2>Technical Skills</h2>
                      <TechnicalSkills />
                      <div class='get_social_content'>
                        <h2>Profiles</h2>
                        <ul class='profiles_icons '>
                          <li>
                            <p class='purple mb-0'>Leetcode.com</p>
                            <div>/mohit_11615192</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Codechef.com</p>

                            <div>/users/mohit_11615192</div>
                          </li>
                          <li>
                            <p class='purple mb-0'>Hackerrank.com</p>

                            <div>/mohitsin3232</div>
                          </li>
                          {/* <li>
                            <p class='purple '>Hackerearth.com</p>

                            <div>/@mohit655</div>
                          </li>
                          <li>
                            <p class='purple '>LinkedIn.com</p>

                            <div>/in/mohit-singh-9819a3148</div>
                          </li> */}
                          <li>
                            <p class='purple mb-0'>Github.com</p>

                            <div>/mohitsinghnegi1</div>
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
                            Android app development and UI/UX designing are some
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

                      <div class=' block mt-0'>
                        <h2>Achievements</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold title1'>
                                Leadsquared award
                              </div>
                              <div className='date'>June 2019 - Dec 2019</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold title1'>
                                  Star of the quarter award{' '}
                                </span>
                              </div>
                              <div>
                                Rewarded with Star of the quarter award for
                                excellence ownership and accountability on 10+
                                projects that I delivered during my internship.
                              </div>
                              <div>
                                Grabbed an Internship opportunity at Leadsquared
                                as a Software developer intern and also got a
                                PPO offer from same company.{' '}
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>
                                Pi-a-thon hackathon
                              </div>
                              <div className='date'>May 2018</div>
                            </td>
                            <td>
                              <div>
                                Secured <b>first position</b> in Pi-a-thon
                                hackathon- Assisted and collaborated on project
                                named as Crowd analysis.
                                <br />
                                Worked on technologies such as Python,
                                Bootstrap, Php, Mysql.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>
                                Competitive programming
                              </div>
                              <div className='date'>Oct 2018 - Present</div>
                            </td>
                            <td>
                              <div>
                                Ranked top 1 among all student of my university
                                in Stop stalk.
                              </div>
                              <div>
                                Secured 289 rank in December challenge 2018 and
                                161 rank in October challenge 2019 division 2 in
                                Codechef.
                              </div>
                              <div>
                                Solved over 1200 programming questions on
                                various platform.
                              </div>

                              <div>
                                4 star coder at Codechef. Participated in more
                                then 40 hackathon.
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
                      <div class='block' id='experience'>
                        <h2>Experience</h2>
                        <table className='experience gt'>
                          <th></th>
                          <th></th>
                          <tr>
                            <td>
                              <div className='bold title1'>
                                Software Engineer
                              </div>
                              <div className='date'>June 2019 - Present</div>
                            </td>
                            <td>
                              <div className='bold title1'>
                                Leadsquared - Marketxpenders
                              </div>
                              <div>
                                Working as a Front-End Developer. Successfully
                                delivered 10+ portals to clients such as
                                DevBhoomi, ISBR, KIIT within strict deadline.
                                <br />
                                <b>Technologies used</b> : React framework,
                                Bootstrap Restful API and Leadsquared CRM.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>UI Designer</div>
                              <div className='date'>Jan 2019 - Mar 2019</div>
                            </td>
                            <td>
                              <div className='bold title1'>
                                Redjee Software labs
                              </div>
                              <div>
                                Worked as a UI/UX Developer.combined the art of
                                design with the art of programming.My
                                Responsibilities include translation of the
                                UI/UX design wireframes into actual reusable
                                code
                                <br />
                                <b>Tools used :</b> Html5, Css3,Jquery Photoshop
                                and AdobeXD.
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
                                Dev Bhoomi Group of Institutions
                              </div>
                              <div className='date'>Jan - 2020- March 2020</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://admission.dbgidoon.ac.in'
                                  className='link'>
                                  Admission.dbgidoon.ac.in
                                </a>
                              </div>
                              <div>
                                CRM solution for educational university which
                                allows student to enroll for various courses and
                                view/search their application history through
                                dashboard. Automated email will be send to the
                                student/ admin based on activity. An automated
                                offer letter gets generated after background
                                verification.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>Referral portal</div>
                              <div className='date'>Nov - 2019 - Jan 2020</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://lsqestates.lsqportal.com'
                                  className='link'>
                                  Lsqestates.lsqportal.com
                                </a>
                              </div>
                              <div>
                                Built an online platform from scratch to help
                                double fold first to help agents refer leads to
                                the organization secondly to help the
                                organization to identify the lead source for
                                rewards.
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className='bold title1'>LSQ Money</div>
                              <div className='date'>Oct 2019 - Nov 2019</div>
                            </td>
                            <td>
                              <div>
                                <span className='bold'>Production link - </span>

                                <a
                                  href='https://lendingdemo1.lsqportal.com/'
                                  className='link'>
                                  Lendingdemo1.lsqportal.com
                                </a>
                              </div>
                              <div>
                                LSQ Money is an online platform which connects
                                borrowers and lender for loan. Technologies
                                used: Reactjs, Bootstrap, Restful API, CRM.
                              </div>
                            </td>
                          </tr>

                          <tr>
                            <td>
                              <div className='bold title1'>
                                External Sorting
                              </div>
                              <div className='date'>
                                March 2020 - March 2020
                              </div>
                            </td>
                            <td>
                              <div>
                                Implemented external sorting using python. This
                                algorithm works even when the data (size may be
                                in GBs) to be sorted does not fit into the RAM
                                and instead they resides in the slower external
                                memory.
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
            <div className='resume'>
              <a
                href='mailto:mohitsin3232@gmail.com'
                class='send_message_button'>
                <span class='cut1'></span>
                <span class='cut2'></span>
                <span class='content'>
                  Send me a message{' '}
                  <span class='fontawesome-double-angle-right'></span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
