import React from 'react';
import ComparisonSlider from 'comparison-slider';
import '../css/slider.css';
import 'bootstrap/dist/css/bootstrap.css';
class ComparisonSlide extends React.Component {
  componentDidMount() {
    var comparisonSlider = new ComparisonSlider();
  }
  render() {
    return (
      <div class='ComparisonSlider '>
        <div class='ComparisonSlider__Before '>
          <div className='about-me p-4 '>
            <div className='row p-5 pt-md-4 noselect '>
              <div></div>
              <div>
                <div className='fl-heading' style={{}}>
                  Mohit Singh Negi
                </div>
                <p className='t-w'>
                  Competative Coder | Full Stack Developer | UI/UX designer
                </p>
                <p className='tc'>Summary</p>
                <p className='c-g'>
                  Pursuing B.Tech in Computer Science from Lovely Professional
                  University, I consider myself to be creative, hard-working and
                  a tech enthusiast. I believe in practical work rather than
                  theoretical. I am quite good at portal development using
                  React. During my internship at Leadsquared, I had been awarded
                  the Star of the quarter award for the best performer in portal
                  development using React framework and Leadsquared CRM. Apart
                  from that ,I have a kneen Interest In Android app development.
                  I can adapt easily and believe me , I am a fast learner.
                </p>
                <p className='tc'>Education</p>
                <p className='c-g'>
                  <table>
                    <tr>
                      <td>University &nbsp;</td>
                      <td>: Lovely Professional University 2016-2020</td>
                    </tr>
                    <tr>
                      <td>Stream </td>
                      <td>: Btech Cse</td>
                    </tr>
                    <tr>
                      <td> School </td>
                      <td>: Kendriya Vidyalaya No-5 Bathinda Cantt</td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='ComparisonSlider__After text-dark text-white'>
          <div className='about-me p-4 '>
            <div className='row p-5 pt-md-4 noselect '>
              <div></div>
              <div>
                <div className='fl-heading' style={{}}>
                  Mohit Singh Negi
                </div>
                <p className='t-w'>
                  Competative Coder | Full Stack Developer | UI/UX designer
                </p>
                <p className='tc'>TECHNICAL SKills</p>
                <p className=''>
                  <table className='ts-table'>
                    <tr>
                      <td>React Js &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '80%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Competetive Coding &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '72%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Bootstrap &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '82%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Python &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '86%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Android &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '60%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Resetful API &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '92%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Photoshop &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '90%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>C/C++ &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '62%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Java &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '60%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>HTML / CSS3 &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '99%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Adobe XD &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '88%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Bootstrap &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '82%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Jquery &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '85%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Php &nbsp; </td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '78%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> Mysql &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '88%' }}></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td> UI Designing &nbsp;</td>
                      <td>
                        <div class='progress'>
                          <div
                            class='progress-bar progress-bar-warning progress-bar-striped'
                            role='progressbar'
                            aria-valuenow='40'
                            aria-valuemin='0'
                            aria-valuemax='100'
                            style={{ width: '95%' }}></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ComparisonSlide;
